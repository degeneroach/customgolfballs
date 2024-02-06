import {
  Flex,
  chakra,
  Text,
  Image,
  useBreakpointValue,
  IconButton,
  Stack,
  Link,
} from "@chakra-ui/react";
import React from "react";
import PrimaryButton from "../UI/PrimaryButton";
import {
  HiOutlineMail,
  HiOutlineLocationMarker,
  HiOutlinePhone,
  HiOutlinePencil,
} from "react-icons/hi";
import TextIcon from "../UI/TextIcon";
import { DIRECTIONS, EMAIL, EMAIL_TO, TEL_NUMBER, TEL_NUMBER_TO } from "@/utils/constants";

interface HeroSectionProps {
  onOpen: () => void;
}

const HeroSection: React.FC<HeroSectionProps> = ({
  onOpen: onOpenOrderModal,
}) => {
  const isMobileView = useBreakpointValue({
    base: true,
    md: false,
  });

  return (
    <Flex
      mt={10}
      flexDirection={{ base: "column-reverse", md: "row" }}
      alignItems={"center"}
    >
      <Flex
        flex={1}
        direction="column"
        alignItems="start"
        justifyContent="center"
        textColor={"text-primary"}
      >
        <Text
          fontWeight={400}
          fontSize={"5xl"}
          mb={6}
          textAlign={{ base: "center", md: "inherit" }}
        >
          Personalize your golf balls with{" "}
          <chakra.span fontWeight={"bold"}>custom printing</chakra.span>
        </Text>
        <Text
          fontWeight={400}
          fontSize={"sm"}
          mb={4}
          textAlign={{ base: "center", md: "inherit" }}
        >
          We are located in the heart of Vancouver, at 3200 E Broadway, Bay 1,
          Custom Golf Ball Printing is your one-stop destination for bespoke,
          creative, and personalized golf ball designs. With a decade`s worth of
          experience in the industry, we take pride in amplifying your golfing
          experience through our unique, innovative, and customer-oriented
          services.
        </Text>
        <Text
          fontWeight={400}
          fontSize={"sm"}
          mb={8}
          textAlign={{ base: "center", md: "inherit" }}
        >
          Whether it`s a corporate event, a golfing tournament, a gift, or a
          personal set, we have you covered for any & all your custom golf ball
          printing.
        </Text>
        <PrimaryButton
          leftIcon={<HiOutlinePencil />}
          size="lg"
          alignSelf={{ base: "center", md: "inherit" }}
          onClick={onOpenOrderModal}
        >
          Customize your balls
        </PrimaryButton>
      </Flex>

      <Flex
        alignItems={{ base: "center", md: "flex-end" }}
        flexDirection={"column"}
        flex={1}
      >
        <Flex
          mb={4}
          alignSelf={"flex-start"}
          display={{ base: "block", md: "none" }}
        >
          <TextIcon
            mb={2}
            mr={4}
            leftIcon={HiOutlineMail}
            isBgTransparent={true}
            textColor={"icon-primary"}
          >
            {EMAIL}
          </TextIcon>
          <TextIcon
            mb={2}
            leftIcon={HiOutlinePhone}
            isBgTransparent={true}
            textColor={"icon-primary"}
          >
            {TEL_NUMBER}
          </TextIcon>
        </Flex>

        <Image
          src="../images/GroupPicture.svg"
          alt="4 image"
          boxSize={{ base: 96, md: 80 }}
          mb={{ base: 10, md: 5 }}
        />
        <Flex
          flexDirection={"column"}
          alignItems={"flex-end"}
          // display={{ base: "none", md: "flex" }}
        >
          {isMobileView ? (
            <Stack flexDirection={"row"} alignSelf={"center"} gap={10} mb={10}>
              <Link href={EMAIL_TO}>
                <IconButton
                  boxSize={14}
                  bg={"white"}
                  icon={<HiOutlineMail size={20} />}
                  aria-label="email address"
                  color={"icon-active"}
                  borderRadius={"1rem"}
                />
              </Link>
              <Link href={TEL_NUMBER_TO}>
                <IconButton
                  p={4}
                  boxSize={14}
                  bg={"white"}
                  icon={<HiOutlinePhone size={20} />}
                  aria-label="email address"
                  color={"icon-active"}
                  borderRadius={"1rem"}
                />
              </Link>
              <Link href={DIRECTIONS} isExternal>
                <IconButton
                  p={4}
                  boxSize={14}
                  bg={"white"}
                  icon={<HiOutlineLocationMarker size={20} />}
                  aria-label="email address"
                  color={"icon-active"}
                  borderRadius={"1rem"}
                />
              </Link>
            </Stack>
          ) : (
            <>
              <Link href={EMAIL_TO} _hover={{ textDecor: "none" }}>
                <TextIcon mb={1} leftIcon={HiOutlineMail} cursor={"pointer"}>
                  {EMAIL}
                </TextIcon>
              </Link>

              <Link href={TEL_NUMBER_TO} _hover={{ textDecor: "none" }}>
                <TextIcon mb={1} leftIcon={HiOutlinePhone}>
                  {TEL_NUMBER}
                </TextIcon>
              </Link>

              <Link href={DIRECTIONS} _hover={{ textDecor: "none" }} isExternal>
                <TextIcon leftIcon={HiOutlineLocationMarker}>
                  3200 E Broadway, Bay 1, Vancouver, BC V5M 1Z8
                </TextIcon>
              </Link>
            </>
          )}
        </Flex>
      </Flex>
    </Flex>
  );
};

export default HeroSection;
