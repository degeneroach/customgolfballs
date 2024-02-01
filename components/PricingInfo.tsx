import {
  Box,
  Flex,
  Stack,
  Text,
  VStack,
} from "@chakra-ui/react";
import React from "react";

type PricingData = {
  name: string;
  printPrice: number;
  setupFee: number;
  ballCost: number;
};

interface PricingCardProps {
  title: string;
  data?: PricingData[];
}

const PricingInfo: React.FC<PricingCardProps> = ({ title, data }) => {
  return (
    <Stack mb={10} alignItems={'center'}>
      <Text mb={6} fontSize={"xl"} fontWeight={700}>
        {title}
      </Text>
      <Flex
        direction="column"
        p={"1rem 2rem"}
        width={{ base: "24rem", sm: "40rem" }}
        fontSize={"md"}
        borderRadius={"1rem"}
        color={"text-primary"}
        backgroundColor={"surface-background-primary"}
      >
        <Flex direction="row" p={1} color={"text-tertiary"}>
          <Box flex={{ base: 2, md: 1 }}>
            <Text>Price per print</Text>
          </Box>
          <Box flex={1}>
            <Text textAlign={"center"}>Setup fee</Text>
          </Box>
          <Box flex={1}>
            <Text textAlign={"center"}>Ball cost</Text>
          </Box>
        </Flex>

        {data?.map((item, index) => (
          <Flex key={index} direction="row" p={1} color={"text-primary"}>
            <Box flex={{ base: 2, md: 1 }}>
              <Text>{item.name}</Text>
            </Box>
            <Box flex={1}>
              <Text textAlign={"center"}>{`$${item.setupFee}`}</Text>
            </Box>
            <Box flex={1}>
              <Text textAlign={"center"}>{`$${item.ballCost}`}</Text>
            </Box>
          </Flex>
        ))}
      </Flex>
    </Stack>
  );
};

export default PricingInfo;
