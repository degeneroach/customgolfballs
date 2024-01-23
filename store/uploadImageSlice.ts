import { produce } from "immer";
import { StateCreator } from "zustand";

export interface UploadImage {
  isDoubleSided: boolean;
  frontSideImage: { url: string | null; file: any; name: string };
  errorUploadMessage : string
  setErrorUploadMessage: (arg: string) => void
  backSideImage: { url: string | null; file: any; name: string };
  setIsDoubleSided: (arg: boolean) => void;
  setFrontSideImage: (url: string, file: any, name: string) => void;
  clearFrontSideImage: () => void;
  setBackSideImage: (url: string, file: any, name: string) => void;
  clearBackSideImage: () => void;
}

const createUploadImageSlice: StateCreator<UploadImage, [], [], UploadImage> = (
  set
) => ({
  isDoubleSided: false,
  errorUploadMessage: '',
  setErrorUploadMessage: (arg: string) => set({errorUploadMessage: arg}),
  setIsDoubleSided: (arg) => set(() => ({ isDoubleSided: arg })),
  frontSideImage: { url: null, file: "", name: "" },
  setFrontSideImage: (url: string | undefined, file: any, name: string) =>
    set(
      produce((state) => {
        (state.frontSideImage.url = url),
          (state.frontSideImage.file = file),
          (state.frontSideImage.name = name);
      })
    ),
  clearFrontSideImage: () =>
    set(
      produce((state) => {
        (state.frontSideImage.url = null),
          (state.frontSideImage.name = ""),
          (state.frontSideImage.file = null);
      })
    ),
  backSideImage: { url: null, file: null, name: "" },
  setBackSideImage: (url: string, file: any, name: string) =>
    set(
      produce((state) => {
        (state.backSideImage.url = url), (state.backSideImage.file = file);
        state.backSideImage.name = name;
      })
    ),
  clearBackSideImage: () =>
    set(
      produce((state) => {
        (state.backSideImage.url = null),
          (state.backSideImage.name = ""),
          (state.backSideImage.file = null);
      })
    ),
});

export default createUploadImageSlice;
