import { create } from "zustand";
import createUploadImageSlice, { UploadImage } from "./uploadImageSlice";
import createBallQuantitySlice, { BallQuantity } from "./ballQuantitySlice";
import { persist } from "zustand/middleware";
import createCustomerDetailsSlice, {
  CustomerDetails,
} from "./customerDetailsSlice";

const useBoundStore = create<UploadImage & BallQuantity & CustomerDetails>()(
  persist(
    (...a) => ({
      ...createUploadImageSlice(...a),
      ...createBallQuantitySlice(...a),
      ...createCustomerDetailsSlice(...a),
    }),
    {
      name: "user-details",
    }
  )
);

export default useBoundStore;
