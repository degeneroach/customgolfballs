import {
  Flex,
  HStack,
  Icon,
  IconButton,
  Image,
  Popover,
  PopoverArrow,
  PopoverBody,
  PopoverCloseButton,
  PopoverContent,
  PopoverHeader,
  PopoverTrigger,
  Stack,
  Text,
  Tooltip,
  VStack,
  chakra,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import TextIcon from "../UI/TextIcon";
import {
  HiOutlineLocationMarker,
  HiOutlineMail,
  HiOutlinePhone,
} from "react-icons/hi";

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
            <Popover>
              <PopoverTrigger>
                <IconButton
                  p={4}
                  boxSize={14}
                  bg={"white"}
                  icon={<HiOutlineMail size={20} />}
                  aria-label="email address"
                  color={"icon-active"}
                  borderRadius={"1rem"}
                />
              </PopoverTrigger>
              <PopoverContent w={'auto'}>
                <PopoverArrow />
                <PopoverHeader textAlign={"center"} fontSize={"md"}>
                  customgolfballprinting@gmail.com
                </PopoverHeader>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <IconButton
                  p={4}
                  boxSize={14}
                  bg={"white"}
                  icon={<HiOutlinePhone size={20} />}
                  aria-label="email address"
                  color={"icon-active"}
                  borderRadius={"1rem"}
                />
              </PopoverTrigger>
              <PopoverContent w={'auto'}>
                <PopoverArrow />
                <PopoverHeader textAlign={"center"} fontSize={"md"}>
                  (604) 600-4347
                </PopoverHeader>
              </PopoverContent>
            </Popover>

            <Popover>
              <PopoverTrigger>
                <IconButton
                  p={4}
                  boxSize={14}
                  bg={"white"}
                  icon={<HiOutlineLocationMarker size={20} />}
                  aria-label="email address"
                  color={"icon-active"}
                  borderRadius={"1rem"}
                />
              </PopoverTrigger>
              <PopoverContent>
                <PopoverArrow />
                <PopoverHeader textAlign={"center"} fontSize={"md"}>
                  3200 E Broadway, Bay 1, Vancouver, BC V5M 1Z8
                </PopoverHeader>
              </PopoverContent>
            </Popover>
          </Stack>
        ) : (
          <>
            <TextIcon mb={1} leftIcon={HiOutlineMail}>
              customgolfballprinting@gmail.com
            </TextIcon>
            <TextIcon mb={1} leftIcon={HiOutlinePhone}>
              (604) 600-4347
            </TextIcon>
            <TextIcon leftIcon={HiOutlineLocationMarker}>
              3200 E Broadway, Bay 1, Vancouver, BC V5M 1Z8
            </TextIcon>
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
