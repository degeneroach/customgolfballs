import { create } from "zustand";
import createUploadImageSlice, { UploadImage } from "./uploadImageSlice";
import createBallQuantitySlice, { BallQuantity } from "./ballQuantitySlice";
import { persist } from "zustand/middleware";
import createCustomerDetailsSlice, {
  CustomerDetails,
} from "./customerDetailsSlice";
import createPriceCalculationSlice, {
  PriceCalculation,
} from "./priceCalculationSlice";

const useBoundStore = create<
  UploadImage & BallQuantity & CustomerDetails & PriceCalculation
>()(
  persist(
    (...a) => ({
      ...createUploadImageSlice(...a),
      ...createBallQuantitySlice(...a),
      ...createCustomerDetailsSlice(...a),
      ...createPriceCalculationSlice(...a),
    }),
    {
      name: "user-details",
    }
  )
);

export default useBoundStore;
