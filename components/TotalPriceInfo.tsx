import { Stack, Flex, Text } from "@chakra-ui/react";
import React from "react";

const TotalPriceInfo = () => {
  return (
    <Stack
      padding={10}
      flexDir={"column"}
      bgColor={"surface-background-secondary"}
      borderRadius={"1rem"}
      fontSize={"md"}
      alignSelf={"center"}
      w={"40rem"}
    >
      <Flex justifyContent={"space-between"}>
        <Text>Ball Cost:</Text>
        <Text>$96.00</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text>Setup Cost:</Text>
        <Text>$916.00</Text>
      </Flex>
      <Flex justifyContent={"space-between"}>
        <Text>Print Cost:</Text>
        <Text>$96.00</Text>
      </Flex>
      <Flex
        justifyContent={"space-between"}
        fontSize={"xl"}
        fontWeight={"bold"}
      >
        <Text>Total: </Text>
        <Text>$96.00</Text>
      </Flex>
    </Stack>
  );
};

export default TotalPriceInfo;
