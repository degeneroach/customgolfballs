import {
  Flex,
  IconButton,
  Image,
  Stack,
  Text,
  VStack,
  chakra,
  Link,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import TextIcon from "../UI/TextIcon";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";
import { DIRECTIONS, EMAIL, EMAIL_TO, TEL_NUMBER, TEL_NUMBER_TO } from "@/utils/constants";

const AddressSection = () => {
  const isMobileView = useBreakpointValue({
    base: true,
    md: false,
  });
  return (
    <Stack
      direction={{ base: "column", md: "row" }}
      alignItems={"center"}
      justifyContent={"space-between"}
      my={10}
    >
      <VStack alignItems={"flex-start"} overflowX={"auto"} zIndex={10}>
        <Text
          fontSize={"5xl"}
          fontWeight={400}
          mb={{ base: 4, md: 10 }}
          textAlign={{ base: "center", md: "inherit" }}
        >
          Visit us in{" "}
          <chakra.span fontWeight={"bold"}>Vancouver BC</chakra.span>
        </Text>
        {isMobileView ? (
          <Stack flexDirection={"row"} alignSelf={"center"} gap={10} mb={10}>
            <Link href="mailto:hello@customgolfballprinting.com">
              <IconButton
                boxSize={14}
                bg={"white"}
                icon={<HiOutlineMail size={20} />}
                aria-label="email address"
                color={"icon-active"}
                borderRadius={"1rem"}
              />
            </Link>
            <Link href="tel:6046004347">
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
      </VStack>
      <Flex alignItems={"flex-end"} my={{ base: 5, md: 0 }}>
        <Image src="../images/Map.svg" alt="Map" />
      </Flex>
    </Stack>
  );
};

export default AddressSection;
