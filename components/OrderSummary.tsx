import React from "react";
import PrintImage from "./PrintImage";
import { Flex, Stack, Text, VStack, chakra } from "@chakra-ui/react";
import useBoundStore from "@/store/boundStore";

interface OrderSummaryProps {
  title: string;
}

const OrderSummary: React.FC<OrderSummaryProps> = ({ title }) => {
  const isDoubleSided = useBoundStore((state) => state.isDoubleSided);
  const frontSideImage = useBoundStore((state) => state.frontSideImage);
  const backSideImage = useBoundStore((state) => state.backSideImage);
  const ballQuantity = useBoundStore((state) => state.quantity);
  const totalPrice = useBoundStore((state) => state.totalPrice);

  return (
    <Stack my={10} alignItems={"center"}>
      <Text fontSize={"2rem"} fontWeight={"bold"} mb={4}>
        {title}
      </Text>
      <Flex
        p={10}
        w={{base: "26rem", sm: "40rem"}}
        fontSize={"md"}
        alignItems={"center"}
        bgColor={"surface-background-secondary"}
        borderRadius={"1rem"}
        color={"text-primary"}
        flexDir={{base: 'column', md: 'row'}}
      >
        <Stack
          flex={isDoubleSided ? 1.75 : 1}
          justifyContent={"flex-end"}
          direction={"row"}
          mb={{base: 5, sm: 0}}
        >
          <PrintImage hasLabel={false} imageUrl={frontSideImage?.url} />
          {isDoubleSided && (
            <PrintImage hasLabel={false} imageUrl={backSideImage?.url} />
          )}
        </Stack>
        <VStack flex={1.5} alignItems={"flex-start"} fontSize={"md"}>
          <Text fontWeight={"bold"}>Order Details:</Text>
          <Text>{ballQuantity}x StarStrike Golf Balls</Text>
          {isDoubleSided ? (
            <Text>Double sided print</Text>
          ) : (
            <Text>Single sided print</Text>
          )}
          <Text fontSize={"xl"} fontWeight={"bold"}>
            Total: <chakra.span ml={4}>${totalPrice.toFixed(2)}</chakra.span>
          </Text>
        </VStack>
      </Flex>
    </Stack>
  );
};

export default OrderSummary;
