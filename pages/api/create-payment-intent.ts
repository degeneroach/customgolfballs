import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

const stripe = new Stripe(process.env.STRIPE_SECRET_KEY!, {
  typescript: true,
});

const calculateOrderAmount = (amount: any) => {
  // Replace this constant with a calculation of the order's amount
  // Calculate the order total on the server to prevent
  // people from directly manipulating the amount on the client
  return amount * 100;
};

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
      totalPrice
    } = data;

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
          country,
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

    const paymentIntent = await stripe.paymentIntents.create({
      amount: totalPrice * 100,
      currency: "CAD",
      customer: customerId,
      metadata: {
        "Shipping Details": shippingDetails,
      },
      shipping: {
        address: {
          city,
          country,
          line1: unit,
          line2: streetAddress,
          postal_code: zipCode,
          state: province,
        },
        name,
        phone: phoneNumber,
      },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntent: paymentIntent,
      status: paymentIntent.status
    });
  }

  if (req.method == "GET") {
    const products = await stripe.products.list({
      limit: 20,
    });

    let data: { name: string; price: number | null }[] = [];

    await Promise.all(products.data.map(async (product) => {
      const price = await stripe.prices.search({
        query: `product:\'${product.id}\'`,
      });

      data.push({
        name: product.name,
        price: (price.data[0].unit_amount || 0) / 100,
      });
    }));

    res.status(200).json({
      priceList: data,
    });
  }
}
