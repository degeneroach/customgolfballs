import { sendMail } from "@/utils/nodemailer";
import { NextApiRequest, NextApiResponse } from "next";
import Stripe from "stripe";

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
      paymentIntent: paymentIntentId,
      arrayImageUrl,
      quantity,
      ballType,
      isDoubleSided,
      orderId,
      unit,
      streetAddress,
      city,
      province,
      zipCode,
      country,
      totalPrice,
      firstName,
      lastName,
      shippingDetails
    } = data;

    const paymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
      metadata: {
        "Front Side Image": arrayImageUrl[0],
        "Back Side Image": arrayImageUrl[1],
        "Double Sided": isDoubleSided,
        "Quantity": quantity,
        "Ball Type": ballType
      },
    });

    const sendEmailPayload = {
      frontSideImage: arrayImageUrl[0],
      backSideImage: arrayImageUrl[1],
      ballType,
      isDoubleSided,
      orderId,
      unit,
      streetAddress,
      city,
      province,
      zipCode,
      country,
      totalPrice,
      firstName,
      lastName,
      shippingDetails,
      quantity
    };

    await sendMail(sendEmailPayload);

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntent: paymentIntent.id,
    });
  }
}
