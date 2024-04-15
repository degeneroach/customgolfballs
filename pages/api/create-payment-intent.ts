import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";
import countries from "i18n-iso-countries";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    const data = await req.body;
    const {
      name,
      email,
      phoneNumber,
      streetAddress,
      unit,
      city,
      province,
      zipCode,
      country,
      shippingDetails,
      totalPrice,
    } = data;

    const countryCode = countries.getAlpha2Code(country, "en");

    //Check if the customer is exist then get the customerId else create customer.
    const getCustomer = await stripe.customers.search({
      query: `name:\'${name}\' AND email:\'${email}\'`,
    });
    let customerId;
    if (getCustomer.data.length === 0 || getCustomer.data === null) {
      const customer = await stripe.customers.create({
        email,
        name,
        phone: phoneNumber,
        address: {
          city,
          country: countryCode,
          line1: unit,
          line2: streetAddress,
          postal_code: zipCode,
          state: province,
        },
      });
      customerId = customer.id;
    } else {
      customerId = getCustomer.data[0].id;
    }

    const calculation = await stripe.tax.calculations.create({
      currency: "CAD",
      line_items: [
        {
          amount: totalPrice * 100,
          reference: "L1",
        },
      ],
      customer_details: {
        address: {
          line1: streetAddress,
          line2: unit,
          city: city,
          state: province,
          postal_code: zipCode,
          country: countryCode!,
        },
        address_source: "shipping",
      },
    });

    const paymentIntent = await stripe.paymentIntents.create({
      amount: calculation.amount_total,
      currency: "CAD",
      customer: customerId,
      metadata: {
        "Shipping Details": shippingDetails,
      },
      shipping: {
        address: {
          city,
          country: countryCode,
          line1: unit,
          line2: streetAddress,
          postal_code: zipCode,
          state: province,
        },
        name,
        phone: phoneNumber,
      },
      receipt_email: email,
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntent: paymentIntent,
      status: paymentIntent.status,
    });
  }

  if (req.method == "GET") {
    const products = await stripe.products.list({
      limit: 20,
    });

    let data: { name: string; price: number | null }[] = [];

    await Promise.all(
      products.data.map(async (product) => {
        const price = await stripe.prices.search({
          query: `product:\'${product.id}\'`,
        });

        data.push({
          name: product.name,
          price: (price.data[0].unit_amount || 0) / 100,
        });
      })
    );

    res.status(200).json({
      priceList: data,
    });
  }
}
