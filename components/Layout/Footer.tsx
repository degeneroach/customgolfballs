import { Box, Flex, Image } from "@chakra-ui/react";
import React from "react";

const Footer = () => {
  return (
    <Flex justifyContent={"center"} py={20}>
      <Image src={"../images/Logo2.svg"} alt={"Logo2"} />
    </Flex>
  );
};

export default Footer;
