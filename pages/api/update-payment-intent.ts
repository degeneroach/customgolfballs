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
    
    const { paymentIntent: paymentIntentId, arrayImageUrl, quantity, isDoubleSided} = data;

    const paymentIntent = await stripe.paymentIntents.update(paymentIntentId, {
      metadata: {
        "Front Side Image": arrayImageUrl[0],
        "Back Side Image": arrayImageUrl[1],
        "Double Sided": isDoubleSided,
        "Quantity": quantity,
      },
    });

    res.status(200).json({
      clientSecret: paymentIntent.client_secret,
      paymentIntent: paymentIntent.id,
    });
  }
}
