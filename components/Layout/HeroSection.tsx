import { SimpleGrid, Flex, chakra, Box, Text, Image } from "@chakra-ui/react";
import React from "react";
import PrimaryButton from "../UI/PrimaryButton";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlinePencil,
} from "react-icons/hi";
import TextIcon from "../UI/TextIcon";

const HeroSection = () => {
  return (
    <Flex mt={10} flexDirection={{ base: "column-reverse", md: "row" }} alignItems={'center'}>
      <Flex
        flex={1}
        direction="column"
        alignItems="start"
        justifyContent="center"
        textColor={"text-primary"}
        mb={{ base: 10, md: 0 }}
      >
        <Text fontWeight={400} fontSize={"5xl"} mb={6}>
          Personalize your golf balls with{" "}
          <chakra.span fontWeight={"bold"}>custom printing</chakra.span>
        </Text>
        <Text fontWeight={400} fontSize={"sm"} mb={4}>
          We are located in the heart of Vancouver, at 3200 E Broadway, Bay 1,
          Custom Golf Ball Printing is your one-stop destination for bespoke,
          creative, and personalized golf ball designs. With a decade`s worth of
          experience in the industry, we take pride in amplifying your golfing
          experience through our unique, innovative, and customer-oriented
          services.
        </Text>
        <Text fontWeight={400} fontSize={"sm"} mb={8}>
          Whether it`s a corporate event, a golfing tournament, a gift, or a
          personal set, we have you covered for any & all your custom golf ball
          printing.
        </Text>
        <PrimaryButton leftIcon={<HiOutlinePencil />} size="lg">
          Customize your balls
        </PrimaryButton>
      </Flex>

      <Flex
        alignItems={'flex-end'}
        flexDirection={{ base: "row", md: "column" }}
        flex={1}
      >
        <Image
          src="../images/Group 26.svg"
          alt="4 image"
          boxSize={{ base: 96, md: 80 }}
          mb={4}
        />
        <Flex
          flexDirection={"column"}
          alignItems={"flex-end"}
          display={{ base: "none", md: "flex" }}
        >
          <TextIcon mb={2} leftIcon={HiOutlineMail}>
            customgolfballprinting@gmail.com
          </TextIcon>
          <TextIcon mb={2} leftIcon={HiOutlinePhone}>
            (604) 600-4347
          </TextIcon>
          <TextIcon leftIcon={HiOutlineLocationMarker}>
            3200 E Broadway, Bay 1, Vancouver, BC V5M 1Z8
          </TextIcon>
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
