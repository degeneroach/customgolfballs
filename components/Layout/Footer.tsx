import { Box, Flex, Image, Text } from "@chakra-ui/react";
import Link from "next/link";
import React from "react";

const Footer = () => {
  return (
    <Flex py={20} flexDirection={"column"} alignItems={"center"}>
      <Image src={"../images/Logo2.svg"} alt={"Logo2"} />
      <Flex mt={8} gap={28} fontSize={"lg"} fontWeight={'semibold'} color={'text-primary'}>
        <Link href={"/faq"}>FAQ</Link>
        <Link href={"/tos"}>TOS</Link>
      </Flex>
    </Flex>
  );
};

export default Footer;
