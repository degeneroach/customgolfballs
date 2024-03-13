import React from "react";
import PrintImage from "./PrintImage";
import { Flex, Stack, Text, VStack, chakra } from "@chakra-ui/react";
import useBoundStore from "@/store/boundStore";
import { GST, PST } from "@/store/priceCalculationSlice";

interface OrderSummaryProps {
  title: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ title }) => {
  const isDoubleSided = useBoundStore((state) => state.isDoubleSided);
  const frontSideImage = useBoundStore((state) => state.frontSideImage);
  const backSideImage = useBoundStore((state) => state.backSideImage);
  const ballQuantity = useBoundStore((state) => state.quantity);
  const totalPrice = useBoundStore((state) => state.totalPrice);
  const ballType = useBoundStore((state) => state.ballType);
  const grandTotal = useBoundStore((state) => state.grandTotal);
  const province = useBoundStore((state) => state.province);
  const country = useBoundStore((state) => state.country);

  const hasGST = !country.match(/^united states$/i);
  const hasPST =
    !country.match(/^united states$/i) && province.match(/^british columbia$/i);

  return (
    <Stack my={10} alignItems={"center"}>
      <Text fontSize={"2rem"} fontWeight={"bold"} mb={4}>
        {title}
      </Text>
      <Flex
        p={10}
        w={{ base: "20rem", sm: "40rem" }}
        fontSize={"md"}
        alignItems={"center"}
        bgColor={"surface-background-secondary"}
        borderRadius={"1rem"}
        color={"text-primary"}
        flexDir={{ base: "column", md: "row" }}
      >
        <Stack
          flex={isDoubleSided ? 1.75 : 1}
          justifyContent={"flex-end"}
          direction={{ base: "column", sm: "row" }}
          mb={{ base: 5, sm: 0 }}
        >
          <PrintImage hasLabel={false} imageUrl={frontSideImage?.url} />
          {isDoubleSided && (
            <PrintImage hasLabel={false} imageUrl={backSideImage?.url} />
          )}
        </Stack>
        <VStack
          flex={1.5}
          alignItems={{ base: "center", sm: "flex-start" }}
          fontSize={"md"}
        >
          <Text fontWeight={"bold"}>Order Details:</Text>
          <Text>
            {ballQuantity}x {ballType} Golf Balls
          </Text>
          {isDoubleSided ? (
            <Text>Double sided print</Text>
          ) : (
            <Text>Single sided print</Text>
          )}
          <Text>
            Total: <chakra.span>${totalPrice.toFixed(2)}</chakra.span>
          </Text>
          {hasGST && (
            <Text>
              GST: <chakra.span>${(totalPrice * GST).toFixed(2)}</chakra.span>
            </Text>
          )}
          {hasPST && (
            <Text>
              PST: <chakra.span>${(totalPrice * PST).toFixed(2)}</chakra.span>
            </Text>
          )}
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Grand Total: <chakra.span>${grandTotal.toFixed(2)}</chakra.span>
          </Text>
        </VStack>
      </Flex>
    </Stack>
  );
};

export default OrderSummary;
