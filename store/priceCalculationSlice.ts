import { StateCreator } from "zustand";
import { BallQuantity } from "./ballQuantitySlice";
import { UploadImage } from "./uploadImageSlice";
import { CustomerDetails } from "./customerDetailsSlice";

export interface PriceCalculation {
  totalPrice: number;
  ballCost: number;
  singleSidedSetup: number;
  doubleSidedSetup: number;
  singleSidedPrint: number;
  doubleSidedPrint: number;
  setTotalPrice: () => void;
  clearTotalPrice: () => void;
  setBallCost: (arg: number) => void;
  setSingleSidedSetup: (arg: number) => void;
  setDoubleSidedSetup: (arg: number) => void;
  setSingleSidedPrint: (arg: number) => void;
  setDoubleSidedPrint: (arg: number) => void;
}

const createPriceCalculationSlice: StateCreator<
  PriceCalculation & BallQuantity & UploadImage & CustomerDetails,
  [],
  [],
  PriceCalculation
> = (set) => ({
  totalPrice: 0,
  ballCost: 0,
  singleSidedSetup: 0,
  doubleSidedSetup: 0,
  singleSidedPrint: 0,
  doubleSidedPrint: 0,
  setTotalPrice: () =>
    set((state: any) => ({
      totalPrice: state.isDoubleSided
        ? state.ballCost * state.quantity +
          state.doubleSidedPrint * state.quantity +
          state.doubleSidedSetup +
          (state.shippingDetails === "Flat Rate" ? 15 : 0)
        : state.ballCost * state.quantity +
          state.singleSidedPrint * state.quantity +
          state.singleSidedSetup +
          (state.shippingDetails === "Flat Rate" ? 15 : 0),
    })),
  clearTotalPrice: () => set((state) => ({ totalPrice: 0 })),
  setBallCost: (cost: number) => set((state) => ({ ballCost: cost })),
  setSingleSidedSetup: (cost: number) =>
    set((state) => ({ singleSidedSetup: cost })),
  setDoubleSidedSetup: (cost: number) =>
    set((state) => ({ doubleSidedSetup: cost })),
  setSingleSidedPrint: (cost: number) =>
    set((state) => ({ singleSidedPrint: cost })),
  setDoubleSidedPrint: (cost: number) =>
    set((state) => ({ doubleSidedPrint: cost })),
});

export default createPriceCalculationSlice;
