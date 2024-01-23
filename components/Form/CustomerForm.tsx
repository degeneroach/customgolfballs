import {
  Stack,
  Text,
  Flex,
  Radio,
  RadioGroup,
  FormControl,
  FormErrorMessage,
  Input,
} from "@chakra-ui/react";
import React, { useEffect } from "react";
import FormInput from "../UI/FormInput";
import { SubmitHandler, useForm } from "react-hook-form";
import * as yup from "yup";
import { yupResolver } from "@hookform/resolvers/yup";
import PrimaryButton from "../UI/PrimaryButton";
import { HiChevronRight } from "react-icons/hi";
import useBoundStore from "@/store/boundStore";

export type CustomerFormValues = {
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
};

const phoneRegExp =
  /^((\\+[1-9]{1,4}[ \\-]*)|(\\([0-9]{2,3}\\)[ \\-]*)|([0-9]{2,4})[ \\-]*)*?[0-9]{3,4}?[ \\-]*[0-9]{3,4}?$/;

export const customerDetailsSchema = yup.object().shape({
  firstName: yup.string().max(40).required(),
  lastName: yup.string().max(40).required(),
  email: yup.string().max(30).email().required(),
  phoneNumber: yup
    .string()
    .max(20)
    .matches(phoneRegExp, "Phone number is not valid")
    .required(),
  streetAddress: yup.string().max(50),
  unit: yup.string().max(20),
  city: yup.string().max(20).required(),
  province: yup.string().max(20).required(),
  zipCode: yup.string().max(10).required(),
  country: yup.string().max(20).required(),
  shippingDetails: yup.string().max(20).required(),
});

interface CustomerFormProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const CustomerForm: React.FC<CustomerFormProps> = ({
  activeStep,
  setActiveStep,
}) => {
  const firstName = useBoundStore((state) => state.firstName);
  const lastName = useBoundStore((state) => state.lastName);
  const email = useBoundStore((state) => state.email);
  const phoneNumber = useBoundStore((state) => state.phoneNumber);
  const streetAddress = useBoundStore((state) => state.streetAddress);
  const unit = useBoundStore((state) => state.unit);
  const city = useBoundStore((state) => state.city);
  const province = useBoundStore((state) => state.province);
  const zipCode = useBoundStore((state) => state.zipCode);
  const country = useBoundStore((state) => state.country);
  const shippingDetails = useBoundStore((state) => state.shippingDetails);
  const setFirstName = useBoundStore((state) => state.setFirstName);
  const setLastName = useBoundStore((state) => state.setLastName);
  const setEmail = useBoundStore((state) => state.setEmail);
  const setPhoneNumber = useBoundStore((state) => state.setPhoneNumber);
  const setStreetAddress = useBoundStore((state) => state.setStreetAddress);
  const setUnit = useBoundStore((state) => state.setUnit);
  const setCity = useBoundStore((state) => state.setCity);
  const setProvince = useBoundStore((state) => state.setProvince);
  const setZipCode = useBoundStore((state) => state.setZipCode);
  const setCountry = useBoundStore((state) => state.setCountry);
  const setShippingDetails = useBoundStore((state) => state.setShippingDetails);
  const setTotalPrice = useBoundStore((state) => state.setTotalPrice);


  const {
    handleSubmit,
    register,
    reset,
    setValue,
    setFocus,
    formState: { errors, isValid, isSubmitted },
  } = useForm<CustomerFormValues>({
    mode: "onChange",
    resolver: yupResolver(customerDetailsSchema),
  });

  useEffect(() => {
    setValue("firstName", firstName);
    setValue("lastName", lastName);
    setValue("email", email);
    setValue("phoneNumber", phoneNumber);
    setValue("streetAddress", streetAddress);
    setValue("unit", unit);
    setValue("city", city);
    setValue("province", province);
    setValue("zipCode", zipCode);
    setValue("country", country);
    setValue("shippingDetails", shippingDetails);
    setFocus('firstName')
  }, []);

  const handleOnSubmit: SubmitHandler<CustomerFormValues> = async (data) => {
    setFirstName(data.firstName);
    setLastName(data.lastName);
    setEmail(data.email);
    setPhoneNumber(data.phoneNumber);
    setStreetAddress(data.streetAddress);
    setUnit(data.unit);
    setCity(data.city);
    setProvince(data.province);
    setZipCode(data.zipCode);
    setCountry(data.country);
    setShippingDetails(data.shippingDetails);
    setTotalPrice()
    setActiveStep(activeStep + 1);
  };

  return (
    <form onSubmit={handleSubmit(handleOnSubmit)}>
      <Stack alignItems={"center"} mb={5}>
        <Text fontSize={"xl"} fontWeight={"bold"} mb={6}>
          Contact Details
        </Text>
        <Flex
          justifyContent="space-between"
          maxW="40rem"
          flexWrap={{ base: "nowrap", sm: "wrap" }}
          flexDirection={{ base: "column", sm: "row" }}
        >
          <FormInput
            id={"firstName"}
            placeholder="First Name"
            isInvalid={!!errors?.firstName}
            register={register}
          />
          <FormInput
            id={"lastName"}
            placeholder="Last Name"
            isInvalid={!!errors?.lastName}
            register={register}
          />
          <FormInput
            id={"email"}
            placeholder="Email"
            isInvalid={!!errors?.email}
            register={register}
          />
          <FormInput
            id={"phoneNumber"}
            placeholder="Phone Number"
            isInvalid={!!errors?.phoneNumber}
            register={register}
            type="number"
          />
        </Flex>
      </Stack>

      <Stack alignItems={"center"} mb={10}>
        <Text fontSize={"xl"} fontWeight={"bold"} mb={6}>
          Shipping details
        </Text>
        <RadioGroup defaultValue={shippingDetails}>
          <Flex
            justifyContent={"space-between"}
            w={"40rem"}
            flexDir={{ base: "column", sm: "row" }}
            alignItems={"center"}
          >
            <Radio
              size={"xl"}
              mb={{ base: 5, sm: 0 }}
              value="Flat Rate"
              {...register("shippingDetails")}
              isInvalid={!!errors?.shippingDetails}
            >
              <Text fontSize={"md"} fontWeight={"bold"}>
                Flat Rate Shipping
              </Text>
              <Text fontSize={"sm"}>$15</Text>
            </Radio>
            <Radio
              size={"xl"}
              value="Pick-up"
              {...register("shippingDetails")}
              isInvalid={!!errors?.shippingDetails}
            >
              <Text fontSize={"md"} fontWeight={"bold"}>
                Local Pick-Up (Free)
              </Text>
              <Text fontSize={"sm"}>3200 E Broadway, Vancouver</Text>
            </Radio>
          </Flex>
        </RadioGroup>
      </Stack>

      <Stack alignItems={"center"}>
        <Text fontSize={"xl"} fontWeight={"bold"} mb={6}>
          Shipping details
        </Text>
        <Flex
          flexWrap={{ base: "nowrap", sm: "wrap" }}
          flexDirection={{ base: "column", sm: "row" }}
          justifyContent="space-between"
          maxW="40rem"
          mx="auto"
          alignItems={"center"}
          mb={5}
        >
          <FormInput
            id={"streetAddress"}
            placeholder="Street Address"
            isInvalid={!!errors?.streetAddress}
            register={register}
          />
          <FormInput
            id={"unit"}
            placeholder="Unit"
            isInvalid={!!errors?.unit}
            register={register}
          />
          <FormInput
            id={"city"}
            placeholder="City"
            isInvalid={!!errors?.city}
            register={register}
          />
          <FormInput
            id={"province"}
            placeholder="Province / State"
            isInvalid={!!errors?.province}
            register={register}
          />
          <FormInput
            id={"zipCode"}
            placeholder="Postal Code / ZIP"
            isInvalid={!!errors?.zipCode}
            register={register}
          />
          <FormInput
            id={"country"}
            placeholder="Country"
            isInvalid={!!errors?.country}
            register={register}
          />
        </Flex>
      </Stack>

      <Stack alignItems={"center"} mt={10}>
        <PrimaryButton
          size="lg"
          rightIcon={<HiChevronRight size={16} />}
          isDisabled={!isSubmitted && !isValid}
          type={"submit"}
        >
          Continue to checkout
        </PrimaryButton>
      </Stack>
    </form>
  );
};

export default CustomerForm;
