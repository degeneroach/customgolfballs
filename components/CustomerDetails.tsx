import useBoundStore from "@/store/boundStore";
import { Stack, Text } from "@chakra-ui/react";
import React from "react";

const CustomerDetails = () => {
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

  return (
    <Stack alignSelf={"center"} direction={"row"} w={"40rem"}>
      <Stack flex={1} fontSize={"md"}>
        <Text fontWeight={"bold"}>Shipping Details</Text>
        {streetAddress && <Text>{streetAddress}</Text>}
        {unit && <Text>{unit}</Text>}
        <Text>{zipCode}</Text>
        <Text>{province}</Text>
        <Text>{city}</Text>
        <Text>{country}</Text>
      </Stack>
      <Stack flex={1} fontSize={"md"}>
        <Text fontWeight={"bold"}>Contact Details</Text>
        <Text>
          {firstName} {lastName}
        </Text>
        <Text>{email}</Text>
        <Text>{phoneNumber}</Text>
        <Text mt={5} fontWeight={"bold"}>
          Estimated date of completion
        </Text>
        <Text>5 - 7 business days</Text>
      </Stack>
    </Stack>
  );
};

export default CustomerDetails;
