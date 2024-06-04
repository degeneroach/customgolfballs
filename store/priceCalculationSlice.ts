import { StateCreator } from "zustand";
import { BallQuantity } from "./ballQuantitySlice";
import { UploadImage } from "./uploadImageSlice";
import { CustomerDetails } from "./customerDetailsSlice";

export interface PriceCalculation {
  taxGST: number
  taxPST: number
  totalPrice: number;
  initialTotalPrice: number;
  ballCost: number;
  ballCostSS: number;
  ballCostCS: number;
  ballCostTP: number;
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
  grandTotal: number;
  setTaxGST: (arg: number) => void;
  setTaxPST: (arg: number) => void;
  setGrandTotal: () => void;
  setTotalPrice: () => void;
  setInitialTotalPrice: () => void;
  clearTotalPrice: () => void;
  setBallCost: (arg: number) => void;
  setSingleSidedSetup: (arg: number) => void;
  setDoubleSidedSetup: (arg: number) => void;
  setBallCostSS: (arg: number) => void;
  setBallCostCS: (arg: number) => void;
  setBallCostTP: (arg: number) => void;
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
  taxGST: 0,
  taxPST: 0,
  totalPrice: 0,
  initialTotalPrice: 0,
  ballCost: 0,
  ballCostSS: 0,
  ballCostCS: 0,
  ballCostTP: 0,
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
  grandTotal: 0,
  setTaxGST: (arg: number) => set({ taxGST: arg / 100 }),
  setTaxPST: (arg: number) => set({ taxPST: arg / 100 }),
  setGrandTotal: () =>
    set((state) => {
      let psTax = state.taxPST;
      let gsTax = state.taxGST;

      if (!state.province.match(/^british columbia$/i)) psTax = 0;
      if (state.country.match(/^united states$/i)) gsTax = 0;

      return {
        grandTotal: state.totalPrice * (1 + gsTax + psTax),
      };
    }),
  setTotalPrice: () =>
    set((state: any) => {
      let shippingFee: number = 0;
      let ballPrice: number;
      let totalPrice: number;

      //Ball Price
      if (state.ballType === "Srixon Q Star") {
        ballPrice = state.ballCostCS / 12;
      } else if (state.ballType === "Titleist Pro V1") {
        ballPrice = state.ballCostTP / 12;
      } else {
        ballPrice = state.ballCostSS;
      }

      //Shipping
      if (state.shippingDetails === "Flat Rate") {
        shippingFee = state.shippingFee;
      }

      //Total Price
      if (state.isDoubleSided) {
        totalPrice =
          ballPrice * state.quantity +
          state.doubleSidedPrint * state.quantity +
          state.doubleSidedSetup +
          shippingFee;
      } else {
        totalPrice =
          ballPrice * state.quantity +
          state.singleSidedPrint * state.quantity +
          state.singleSidedSetup +
          shippingFee;
      }

      return {
        totalPrice,
      };
    }),
  setInitialTotalPrice: () =>
    set((state: any) => {
      let ballPrice: number;
      let initialTotalPrice: number;

      //Ball Price
      if (state.ballType === "Callaway SuperSoft") {
        ballPrice = state.ballCostCS / 12;
      } else if (state.ballType === "Titleist Pro V1") {
        ballPrice = state.ballCostTP / 12;
      } else {
        ballPrice = state.ballCostSS;
      }

      //Initial Total Price
      if (state.isDoubleSided) {
        initialTotalPrice =
          ballPrice * state.quantity +
          state.doubleSidedPrint * state.quantity +
          state.doubleSidedSetup;
      } else {
        initialTotalPrice =
          ballPrice * state.quantity +
          state.singleSidedPrint * state.quantity +
          state.singleSidedSetup;
      }

      return {
        ballCost: ballPrice,
        initialTotalPrice,
      };
    }),
  clearTotalPrice: () =>
    set((state) => ({ totalPrice: 0, initialTotalPrice: 0, grandTotal: 0 })),
  setBallCost: (cost: number) => set((state) => ({ ballCost: cost })),
  setBallCostSS: (cost: number) => set((state) => ({ ballCostSS: cost })),
  setBallCostCS: (cost: number) => set((state) => ({ ballCostCS: cost })),
  setBallCostTP: (cost: number) => set((state) => ({ ballCostTP: cost })),
  setSingleSidedPrint: (cost: number) =>
    set((state) => ({ singleSidedPrint: cost })),
  setDoubleSidedPrint: (cost: number) =>
    set((state) => ({ doubleSidedPrint: cost })),
  setShippingFee: (cost: number) => set((state) => ({ shippingFee: cost })),

  setSingleSidedSetup: (cost: number) =>
    set((state) => ({
      singleSidedSetup: cost,
    })),
  setDoubleSidedSetup: (cost: number) =>
    set((state) => ({
      doubleSidedSetup: cost,
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