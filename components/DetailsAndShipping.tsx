import {
  Flex,
  Radio,
  RadioGroup,
  Stack,
  Text,
  VStack,
  chakra,
} from "@chakra-ui/react";
import React from "react";
import PrintImage from "./PrintImage";
import useBoundStore from "@/store/boundStore";
import CustomerForm from "./Form/CustomerForm";
import OrderSummary from "./OrderSummary";

const DetailsAndShipping = () => {
  return (
    <Flex flexDir={"column"}>
      <OrderSummary/>
      <CustomerForm />
    </Flex>
  );
};

export default DetailsAndShipping;
