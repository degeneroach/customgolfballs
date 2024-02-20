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
  singleSidedSetupSS: number;
  doubleSidedSetupSS: number;
  singleSidedSetupCS: number;
  doubleSidedSetupCS: number;
  singleSidedSetupTP: number;
  doubleSidedSetupTP: number;
  shippingFee: number;
  setTotalPrice: () => void;
  setInitialTotalPrice: () => void;
  clearTotalPrice: () => void;
  setBallCost: (arg: number) => void;
  setSingleSidedSetup: (arg: number) => void;
  setDoubleSidedSetup: (arg: number) => void;
  setSingleSidedSetupSS: (arg: number) => void;
  setDoubleSidedSetupSS: (arg: number) => void;
  setSingleSidedSetupCS: (arg: number) => void;
  setDoubleSidedSetupCS: (arg: number) => void;
  setSingleSidedSetupTP: (arg: number) => void;
  setDoubleSidedSetupTP: (arg: number) => void;
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
  singleSidedSetupSS: 0,
  doubleSidedSetupSS: 0,
  singleSidedSetupCS: 0,
  doubleSidedSetupCS: 0,
  singleSidedSetupTP: 0,
  doubleSidedSetupTP: 0,
  singleSidedPrint: 0,
  doubleSidedPrint: 0,
  shippingFee: 0,
  setTotalPrice: () =>
    set((state: any) => {
      let ballPrice;
      if (state.ballType === "Callaway SuperSoft") {
        ballPrice = 34.99 / 12;
      } else if (state.ballType === "Titleist Pro V1") {
        ballPrice = 79.99 / 12;
      } else {
        ballPrice = state.ballCost || 2;
      }

      return {
        totalPrice: state.isDoubleSided
          ? ballPrice * state.quantity +
            state.doubleSidedPrint * state.quantity +
            state.doubleSidedSetup +
            (state.shippingDetails === "Flat Rate" ? state.shippingFee : 0)
          : state.ballCost * state.quantity +
            state.singleSidedPrint * state.quantity +
            state.singleSidedSetup +
            (state.shippingDetails === "Flat Rate" ? state.shippingFee : 0),
      };
    }),
  setInitialTotalPrice: () =>
    set((state: any) => {
      let ballPrice;
      if (state.ballType === "Callaway SuperSoft") {
        ballPrice = 34.99 / 12;
      } else if (state.ballType === "Titleist Pro V1") {
        ballPrice = 79.99 / 12;
      } else {
        ballPrice = state.ballCost || 2;
      }

      return {
        ballCost: ballPrice,
        initialTotalPrice: state.isDoubleSided
          ? ballPrice * state.quantity +
            state.doubleSidedPrint * state.quantity +
            state.doubleSidedSetup
          : ballPrice * state.quantity +
            state.singleSidedPrint * state.quantity +
            state.singleSidedSetup,
      };
    }),
  clearTotalPrice: () =>
    set((state) => ({ totalPrice: 0, initialTotalPrice: 0 })),
  setBallCost: (cost: number) => set((state) => ({ ballCost: cost })),
  setSingleSidedPrint: (cost: number) =>
    set((state) => ({ singleSidedPrint: cost })),
  setDoubleSidedPrint: (cost: number) =>
    set((state) => ({ doubleSidedPrint: cost })),
  setShippingFee: (cost: number) => set((state) => ({ shippingFee: cost })),

  setSingleSidedSetup: (cost: number) =>
    set((state) => ({
      singleSidedSetup:
        state.ballType != "StarStrike" ? state.singleSidedSetupCS : cost,
    })),
  setDoubleSidedSetup: (cost: number) =>
    set((state) => ({
      doubleSidedSetup:
        state.ballType != "StarStrike" ? state.doubleSidedSetupCS : cost,
    })),

  //StarStrike
  setSingleSidedSetupSS: (cost: number) =>
    set((state) => ({ singleSidedSetupSS: cost })),
  setDoubleSidedSetupSS: (cost: number) =>
    set((state) => ({ doubleSidedSetupSS: cost })),

  //Callaway SuperSoft
  setSingleSidedSetupCS: (cost: number) =>
    set((state) => ({ singleSidedSetupCS: cost })),
  setDoubleSidedSetupCS: (cost: number) =>
    set((state) => ({ doubleSidedSetupCS: cost })),

  //Titleist Pro V1
  setSingleSidedSetupTP: (cost: number) =>
    set((state) => ({ singleSidedSetupTP: cost })),
  setDoubleSidedSetupTP: (cost: number) =>
    set((state) => ({ doubleSidedSetupTP: cost })),
});

export default createPriceCalculationSlice;
