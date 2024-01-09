import { Box, HStack, Stack, Text, VStack } from "@chakra-ui/react";
import React from "react";
import PricingCard from "../PricingInfo";
import PrimaryButton from "../UI/PrimaryButton";

//Bring Your Own Balls
const byobItems = [
  {
    name: "Single sided: $0.50",
    printPrice: 0.5,
    setupFee: 40,
    ballCost: 0,
  },
  {
    name: "Double sided: $1",
    printPrice: 1,
    setupFee: 60,
    ballCost: 0,
  },
];

const houseBrandItems = [
  {
    name: "Single sided: $0.50",
    printPrice: 0.5,
    setupFee: 30,
    ballCost: 2,
  },
  {
    name: "Double sided: $1",
    printPrice: 1,
    setupFee: 50,
    ballCost: 2,
  },
];

const PricingSection = () => {
  return (
    <Stack my={20} alignItems={"center"}>
      <VStack mb={10}>
        <Text fontSize={"4xl"} fontWeight={"bold"}>
          Pricing Information
        </Text>
        <Text fontSize={"md"}>No MOQ</Text>
      </VStack>
      <PricingCard title="Bring Your Own Balls" data={byobItems} />
      <PricingCard title="Purchase House Brand Balls" data={houseBrandItems} />
      <PrimaryButton size="lg">Order Online</PrimaryButton>
    </Stack>
  );
};

export default PricingSection;
