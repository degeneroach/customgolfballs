import useBoundStore from "@/store/boundStore";
import { Divider, Flex, Stack, Text, VStack, chakra } from "@chakra-ui/react";
import React from "react";
import PrintImage from "./PrintImage";
import CustomerDetails from "./CustomerDetails";
import OrderSummary from "./OrderSummary";

const Payment = () => {
  return (
    <Flex flexDir={"column"}>
      <OrderSummary />
      <CustomerDetails />
      <Divider
        my={10}
        w={"40rem"}
        alignSelf={"center"}
        borderColor={"border-primary"}
      />
    </Flex>
  );
};

export default Payment;
