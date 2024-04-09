import OrderDetails from "@/models/OrderDetails";
import { NextApiRequest, NextApiResponse } from "next";

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  if (req.method === "POST") {
    try {
      const data = await req.body;

      const createOrderDetails = await OrderDetails.create(data);

      res.status(201).json(createOrderDetails.toJSON());
    } catch (error) {
      res.status(404).json({ error: "Bad Request" });
    }
  }

  if (req.method === "GET") {
    try {
      const orderDetailsList = await OrderDetails.find();
      res.status(200).json(orderDetailsList);
    } catch (error) {
      res.status(404).json({ error: "Bad Request" });
    }
  }
}
