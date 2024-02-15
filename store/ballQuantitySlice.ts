import { StateCreator } from "zustand";

export interface BallQuantity {
  quantity: number;
  ballType: string,
  setBallType: (args: string) => void;
  increment: () => void;
  decrement: () => void;
  setQuantity: (quantity: number) => void;
}

const createBallQuantitySlice: StateCreator<
  BallQuantity,
  [],
  [],
  BallQuantity
> = (set) => ({
  quantity: 0,
  ballType: "StarStrike",
  setBallType: (args: string) =>
    set((state) => ({ ballCost: 0, quantity: 0, ballType: args })),
  increment: () =>
    set((state) => ({
      quantity: state.quantity + (state.ballType !== "StarStrike" ? 12 : 1),
    })),
  decrement: () =>
    set((state) => ({
      quantity: state.quantity - (state.ballType !== "StarStrike" ? 12 : 1),
    })),
  setQuantity: (newQuantity: number) => set({ quantity: newQuantity }),
});

export default createBallQuantitySlice