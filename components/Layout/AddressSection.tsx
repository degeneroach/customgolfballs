import { Flex, HStack, Image, Stack, Text, VStack, chakra } from "@chakra-ui/react";
import React from "react";
import TextIcon from "../UI/TextIcon";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

const AddressSection = () => {
  return (
    <Stack direction={{base: 'column-reverse', md: 'row'}} alignItems={'center'} justifyContent={'space-between'} my={10}>
      <VStack alignItems={'flex-start'} overflowX={'auto'} zIndex={10}>
        <Text fontSize={'5xl'} fontWeight={400} mb={{base: 4, md: 10}}>
          Visit us in <chakra.span fontWeight={'bold'}>Vancouver BC</chakra.span>
        </Text>
        <TextIcon mb={1} leftIcon={HiOutlineMail}>
          customgolfballprinting@gmail.com
        </TextIcon>
        <TextIcon mb={1} leftIcon={HiOutlinePhone}>
          (604) 600-4347
        </TextIcon>
        <TextIcon leftIcon={HiOutlineLocationMarker}>
          3200 E Broadway, Bay 1, Vancouver, BC V5M 1Z8
        </TextIcon>
      </VStack>
      <Flex alignItems={'flex-end'} mb={{base: 5, md: 0}}>
        <Image src="../images/Map.svg" alt="Map"/>
      </Flex>
    </Stack>
  );
};

export default AddressSection;
