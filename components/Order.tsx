import {
  VStack,
  Text,
  Image,
  Flex,
  Box,
  Input,
  InputGroup,
  Stack,
  Switch,
  InputRightElement,
  HStack,
} from "@chakra-ui/react";
import React from "react";
import {
  HiOutlineUpload,
  HiChevronRight,
  HiOutlinePlus,
  HiOutlineMinus,
} from "react-icons/hi";
import PrimaryButton from "./UI/PrimaryButton";

const Order = () => {
  return (
    <Flex flexDir={"column"}>
      <Stack my={10} alignItems={"center"}>
        <Text fontSize={"2rem"} fontWeight={"bold"} mb={4}>
          Order online
        </Text>
        <Text fontSize={"xs"} width={"40.75rem"} textAlign={"center"}>
          We offer shipping and local pick up on our online orders. For online
          orders we offer StarStrike Golf Balls. They are comparable to
          Kirklands and play great. Use the below tool to submit your artwork.
        </Text>
      </Stack>
      
      <Stack mb={10} alignItems={"center"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          StarStrike Golf Balls
        </Text>
        <Flex>
          <Image
            src="../images/NoLogoGolfBall.svg"
            alt="Golf Ball"
            w={"15rem"}
            h={"12.5rem"}
          />
          <Image
            src="../images/GolfBox.svg"
            alt="Golf Box"
            w={"15rem"}
            h={"12.5rem"}
          />
        </Flex>
      </Stack>

      <Stack mb={10} alignSelf={"center"} width={"25rem"}>
        <Flex alignItems={"center"} justifyContent={"space-between"} mb={4}>
          <Text fontSize={"md"} fontWeight={"bold"} flex={1}>
            Double Sided:
          </Text>
          <Flex
            flex={1}
            fontSize={"xs"}
            color={"text-tertiary"}
            alignItems={"center"}
          >
            <Text mr={2}>No</Text>
            <Switch size={"lg"} />
            <Text ml={2}>Yes</Text>
          </Flex>
        </Flex>
        <Flex alignItems={"center"} flex={1} mb={2}>
          <Text fontSize={"md"} fontWeight={"bold"} flex={1}>
            Upload artwork:
          </Text>
          <Flex flex={1}>
            <PrimaryButton leftIcon={<HiOutlineUpload size={20} />} size="lg">
              Upload File
            </PrimaryButton>
          </Flex>
        </Flex>
        <Flex alignItems={"center"}>
          <Text fontSize={"md"} fontWeight={"bold"} flex={1}>
            Golf balls amount:
          </Text>
          <Flex flex={1} fontSize={"xs"} color={"text-tertiary"}>
            <InputGroup w={"10rem"}>
              <Input
                px={"1rem"}
                color={"text-primary"}
                backgroundColor={"surface-background-input"}
                borderRadius={"1rem"}
                placeholder="123"
                size={"lg"}
                _hover={{ bg: "surface-hover-alpha-20" }}
              />
              <InputRightElement pr={10} pt={2} color={"icon-active"}>
                <HStack>
                  <HiOutlineMinus size={16} cursor={"pointer"} />
                  <HiOutlinePlus size={16} cursor={"pointer"} />
                </HStack>
              </InputRightElement>
            </InputGroup>
          </Flex>
        </Flex>
      </Stack>

      <Stack
        padding={10}
        flexDir={"column"}
        bgColor={"surface-background-secondary"}
        borderRadius={"1rem"}
        fontSize={"md"}
        alignSelf={'center'}
        w={'40rem'}
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

      <Stack alignItems={"center"} mt={10}>
        <PrimaryButton
          size="lg"
          rightIcon={<HiChevronRight size={16} />}
          isDisabled
        >
          Continue to shipping details
        </PrimaryButton>
      </Stack>
    </Flex>
  );
};

export default Order;
