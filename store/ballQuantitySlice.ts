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
  ballType: '',
  setBallType: (args: string) => set({ ballType: args}),
  increment: () => set((state) => ({ quantity: state.quantity + 1 })),
  decrement: () => set((state) => ({ quantity: state.quantity - 1 })),
  setQuantity: (newQuantity: number) => set({ quantity: newQuantity }),
});

export default createBallQuantitySlice