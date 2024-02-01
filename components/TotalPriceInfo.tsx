import useBoundStore from "@/store/boundStore";
import { Stack, Flex, Text } from "@chakra-ui/react";
import React, { useEffect } from "react";

const TotalPriceInfo = () => {
  const isDoubleSided = useBoundStore((state) => state.isDoubleSided);
  const initialTotalPrice = useBoundStore((state) => state.initialTotalPrice);
  const ballCost = useBoundStore((state) => state.ballCost);
  const quantity = useBoundStore((state) => state.quantity);
  const singleSidedSetup = useBoundStore((state) => state.singleSidedSetup);
  const doubleSidedSetup = useBoundStore((state) => state.doubleSidedSetup);
  const singleSidedPrint = useBoundStore((state) => state.singleSidedPrint);
  const doubleSidedPrint = useBoundStore((state) => state.doubleSidedPrint);

  return (
    <Stack
      padding={10}
      flexDir={"column"}
      bgColor={"surface-background-secondary"}
      borderRadius={"1rem"}
      fontSize={"md"}
      alignSelf={"center"}
      w={{base: "20rem", sm: "40rem"}}
    >
      <Flex justifyContent={"space-between"}>
        <Text>Ball Cost:</Text>
        <Text>${(ballCost * quantity).toFixed(2) }</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text>Setup Cost:</Text>
        <Text>
          ${(isDoubleSided ? doubleSidedSetup : singleSidedSetup).toFixed(2)}
        </Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text>Print Cost:</Text>
        <Text>
          $
          {(isDoubleSided
            ? doubleSidedPrint * quantity
            : singleSidedPrint * quantity
          ).toFixed(2)}
        </Text>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        fontSize={"xl"}
        fontWeight={"bold"}
      >
        <Text>Total: </Text>
        <Text>${initialTotalPrice.toFixed(2)}</Text>
      </Flex>
    </Stack>
  );
};

export default TotalPriceInfo;
