import {
  Flex,
  chakra,
  Text,
  Image,
  Heading,
  UnorderedList,
  ListItem,
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
        <Heading
          fontWeight={400}
          fontSize={"5xl"}
          as='h1'
          mb={6}
          textAlign={{ base: "center", md: "inherit" }}
        >
          Custom Golf Balls{" "}
          <chakra.span fontWeight={"bold"}>Personalized Logo Golf Balls</chakra.span>
        </Heading>
        <Text
          fontWeight={400}
          fontSize={"sm"}
          mb={4}
          textAlign={{ base: "center", md: "inherit" }}
        >
          We are located in the heart of Vancouver, at 3200 E Broadway, Bay 1,{" "} 
          <strong>Custom Golf Ball Printing</strong> is your one-stop destination for bespoke,
          creative, and <em>personalized golf ball designs</em>. With a decade&apos;s worth of
          experience in the print industry, we take pride in amplifying your <strong>custom golf gear</strong> through our unique, innovative, and industry leading techniques. Whether you&apos;re looking for funny golf gifts or corproate logo gift ideas we&apos;ll make sure it&apos;s the <em>best quality print with our Mimaki UJF 6042 MkII e</em>.
        </Text>
        <Heading
        fontWeight={700}
        fontSize={"md"}
        as='h2'
        mb={6}
        textAlign={{ base: "center", md: "inherit" }}>Custom Golf Ball Printing Ideas:</Heading>
        <UnorderedList style={{marginBottom: `25px`}}>
            <ListItem>Corporate Golf Tournaments</ListItem>
            <ListItem>Custom Titleist Golf Balls</ListItem>
            <ListItem>Custom Callaway Golf Balls</ListItem>
            <ListItem>Custom Golf Balls with Picture</ListItem>
            <ListItem>Funny Custom Golf Balls</ListItem>
        </UnorderedList>
        <Text
          fontWeight={400}
          fontSize={"sm"}
          mb={8}
          textAlign={{ base: "center", md: "inherit" }}
        >
          We&apos;ve created one of the easiest ways to order custom golf balls with logos online! If you have any questions about our ordering platform please contact us at (604) 600-4347 or email us at <Link style={{textDecoration:`underline`}} href="mailto:hello@customgolfballprinting.com">hello@customgolfballprinting.com</Link>. We have a detailed <Link style={{textDecoration:`underline`}} href="faq">FAQ page</Link> for any questions you might have. Our <strong>turn around is 5 - 7 business days</strong> but with the proper notice we can have them done with 1 - 3 days. Visit our office from Monday - Friday from 10AM - 5PM in Vancouver, BC just off Broadway and Rupert.
        </Text>
        <PrimaryButton
          leftIcon={<HiOutlinePencil />}
          size="lg"
          alignSelf={{ base: "center", md: "inherit" }}
          onClick={onOpenOrderModal}
        >
          Customize Golf Balls Online
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
