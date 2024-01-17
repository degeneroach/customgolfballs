import { produce } from "immer";
import { StateCreator } from "zustand";

export interface UploadImage {
  isDoubleSided: boolean;
  frontSideImage: { url: string | null; name: string };
  backSideImage: { url: string | null; name: string };
  setIsDoubleSided: (arg: boolean) => void;
  setFrontSideImage: (url: string, name: string) => void;
  clearFrontSideImage: () => void;
  setBackSideImage: (url: string, name: string) => void;
  clearBackSideImage: () => void;
}

const createUploadImageSlice: StateCreator<UploadImage, [], [], UploadImage> = (
  set
) => ({
  isDoubleSided: false,
  setIsDoubleSided: (arg) => set(() => ({ isDoubleSided: arg })),
  frontSideImage: { url: null, name: "" },

  setFrontSideImage: (url: string | undefined, name: string) =>
    set(
      produce((state) => {
        (state.frontSideImage.url = url), (state.frontSideImage.name = name);
      })
    ),
  clearFrontSideImage: () =>
    set(
      produce((state) => {
        (state.frontSideImage.url = null), (state.frontSideImage.name = "");
      })
    ),

  backSideImage: { url: null, name: "" },
  setBackSideImage: (url: string, name: string) =>
    set(
      produce((state) => {
        (state.backSideImage.url = url), (state.backSideImage.name = name);
      })
    ),
  clearBackSideImage: () =>
    set(
      produce((state) => {
        (state.backSideImage.url = null), (state.backSideImage.name = "");
      })
    ),
});

export default createUploadImageSlice;
