import { StateCreator } from "zustand";

export interface CustomerDetails {
  firstName: string;
  lastName: string;
  email: string;
  phoneNumber: string;
  streetAddress?: string | undefined;
  unit?: string | undefined;
  city: string;
  province: string;
  zipCode: string;
  country: string;
  shippingDetails: string;
  setFirstName: (arg: string) => void;
  setLastName: (arg: string) => void;
  setEmail: (arg: string) => void;
  setPhoneNumber: (arg: string) => void;
  setStreetAddress: (arg: string | undefined) => void;
  setUnit: (arg: string | undefined) => void;
  setCity: (arg: string) => void;
  setProvince: (arg: string) => void;
  setZipCode: (arg: string) => void;
  setCountry: (arg: string) => void;
  setShippingDetails: (arg: string) => void;
}

const createCustomerDetailsSlice: StateCreator<
  CustomerDetails,
  [],
  [],
  CustomerDetails
> = (set) => ({
  firstName: "",
  lastName: "",
  email: "",
  phoneNumber: "",
  streetAddress: "",
  unit: "",
  city: "",
  province: "",
  zipCode: "",
  country: "",
  shippingDetails: "",
  setFirstName: (arg: string) => set({ firstName: arg }),
  setLastName: (arg: string) => set({ lastName: arg }),
  setEmail: (arg: string) => set({ email: arg }),
  setPhoneNumber: (arg: string) => set({ phoneNumber: arg }),
  setStreetAddress: (arg: string | undefined) => set({ streetAddress: arg }),
  setUnit: (arg: string | undefined) => set({ unit: arg }),
  setCity: (arg: string) => set({ city: arg }),
  setProvince: (arg: string) => set({ province: arg }),
  setZipCode: (arg: string) => set({ zipCode: arg }),
  setCountry: (arg: string) => set({ country: arg }),
  setShippingDetails: (arg: string) => set({ shippingDetails: arg }),
});

export default createCustomerDetailsSlice;
