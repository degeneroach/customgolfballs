import { Flex } from "@chakra-ui/react";
import React from "react";
import CustomerForm from "./Form/CustomerForm";
import OrderSummary from "./OrderSummary";

interface OrderProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const DetailsAndShipping: React.FC<OrderProps> = ({
  activeStep,
  setActiveStep,
}) => {
  return (
    <Flex flexDir={"column"}>
      <OrderSummary title="Details & Shipping" />
      <CustomerForm
        activeStep={activeStep}
        setActiveStep={setActiveStep}
      />
    </Flex>
  );
};

export default DetailsAndShipping;
