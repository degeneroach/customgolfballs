import { Schema, model, models } from "mongoose";

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  streetAddress?: string | undefined;
  unit?: string | undefined;
  city: string;
  province: string;
  zipCode: string;
  country: string;
  shippingDetails: string;
}

const OrderDetailsSchema = new Schema<CustomerDetails>(
  {
    firstName: { type: String },
    lastName: { type: String },
    email: { type: String },
    phoneNumber: { type: String },
    streetAddress: { type: String },
    unit: { type: String },
    city: { type: String },
    province: { type: String },
    zipCode: { type: String },
    country: { type: String },
    shippingDetails: { type: String },
  },
  {
    timestamps: true,
  }
);

export default models.OrderDetails || model("OrderDetails", OrderDetailsSchema);
