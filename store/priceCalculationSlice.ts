import { StateCreator } from "zustand";
import { BallQuantity } from "./ballQuantitySlice";
import { UploadImage } from "./uploadImageSlice";
import { CustomerDetails } from "./customerDetailsSlice";

export interface PriceCalculation {
  totalPrice: number;
  initialTotalPrice: number;
  ballCost: number;
  singleSidedSetup: number;
  doubleSidedSetup: number;
  singleSidedPrint: number;
  doubleSidedPrint: number;
  shippingFee: number;
  setTotalPrice: () => void;
  setInitialTotalPrice: () => void;
  clearTotalPrice: () => void;
  setBallCost: (arg: number) => void;
  setSingleSidedSetup: (arg: number) => void;
  setDoubleSidedSetup: (arg: number) => void;
  setSingleSidedPrint: (arg: number) => void;
  setDoubleSidedPrint: (arg: number) => void;
  setShippingFee: (arg: number) => void;
}

const createPriceCalculationSlice: StateCreator<
  PriceCalculation & BallQuantity & UploadImage & CustomerDetails,
  [],
  [],
  PriceCalculation
> = (set) => ({
  totalPrice: 0,
  initialTotalPrice: 0,
  ballCost: 0,
  singleSidedSetup: 0,
  doubleSidedSetup: 0,
  singleSidedPrint: 0,
  doubleSidedPrint: 0,
  shippingFee: 0,
  setTotalPrice: () =>
    set((state: any) => ({
      totalPrice: state.isDoubleSided
        ? state.ballCost * state.quantity +
          state.doubleSidedPrint * state.quantity +
          state.doubleSidedSetup +
          (state.shippingDetails === "Flat Rate" ? state.shippingFee : 0)
        : state.ballCost * state.quantity +
          state.singleSidedPrint * state.quantity +
          state.singleSidedSetup +
          (state.shippingDetails === "Flat Rate" ? state.shippingFee : 0),
    })),
    setInitialTotalPrice: () =>
    set((state: any) => ({
      initialTotalPrice: state.isDoubleSided
        ? state.ballCost * state.quantity +
          state.doubleSidedPrint * state.quantity +
          state.doubleSidedSetup
        : state.ballCost * state.quantity +
          state.singleSidedPrint * state.quantity +
          state.singleSidedSetup,
    })),
  clearTotalPrice: () => set((state) => ({ totalPrice: 0, initialTotalPrice: 0 })),
  setBallCost: (cost: number) => set((state) => ({ ballCost: cost })),
  setSingleSidedSetup: (cost: number) =>
    set((state) => ({ singleSidedSetup: cost })),
  setDoubleSidedSetup: (cost: number) =>
    set((state) => ({ doubleSidedSetup: cost })),
  setSingleSidedPrint: (cost: number) =>
    set((state) => ({ singleSidedPrint: cost })),
  setDoubleSidedPrint: (cost: number) =>
    set((state) => ({ doubleSidedPrint: cost })),
  setShippingFee: (cost: number) =>
    set((state) => ({ shippingFee: cost })),
});

export default createPriceCalculationSlice;
