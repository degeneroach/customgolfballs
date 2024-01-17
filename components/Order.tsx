import { Text, Image, Flex, Stack, Switch, IconButton } from "@chakra-ui/react";
import React from "react";
import { HiChevronRight, HiOutlineTrash } from "react-icons/hi";
import PrimaryButton from "./UI/PrimaryButton";
import UploadButton from "./UI/UploadButton";
import TotalPriceInfo from "./TotalPriceInfo";
import QuantityInput from "./QuantityInput";
import useBoundStore from "@/store/boundStore";
import PreviewImage from "./PreviewImage";

const Order = () => {
  const isDoubleSided = useBoundStore((state) => state.isDoubleSided);
  const setIsDoubleSided = useBoundStore((state) => state.setIsDoubleSided);
  const frontSideImage = useBoundStore((state) => state.frontSideImage);
  const backSideImage = useBoundStore((state) => state.backSideImage);
  const clearFrontSideImage = useBoundStore(
    (state) => state.clearFrontSideImage
  );
  const clearBackSideImage = useBoundStore((state) => state.clearBackSideImage);

  const handleToggle = () => {
    setIsDoubleSided(!isDoubleSided);
  };

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
        <PreviewImage />
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
            <Switch isChecked={isDoubleSided} onChange={handleToggle} />
            <Text ml={2}>Yes</Text>
          </Flex>
        </Flex>

        <Flex alignItems={"center"} flex={1} mb={2}>
          <Text fontSize={"md"} fontWeight={"bold"} flex={1}>
            Upload artwork:
          </Text>
          {frontSideImage?.url ? (
            <Flex flex={1} color={"text-primary"} alignItems={"center"}>
              <Text fontSize={"md"} overflowWrap={"anywhere"}>
                {frontSideImage.name}
              </Text>
              <IconButton
                color={"icon-active"}
                bg={"none"}
                icon={<HiOutlineTrash size={18} />}
                aria-label="trash"
                onClick={clearFrontSideImage}
                _hover={{ bg: "none" }}
              />
            </Flex>
          ) : (
            <UploadButton side={"front"} />
          )}
        </Flex>

        {isDoubleSided && (
          <Flex alignItems={"center"} flex={1} mb={2}>
            <Text fontSize={"md"} fontWeight={"bold"} flex={1}>
              2nd side artwork:
            </Text>
            {backSideImage?.url ? (
              <Flex flex={1} color={"text-primary"} alignItems={"center"}>
                <Text fontSize={"md"} overflowWrap={"anywhere"}>
                  {backSideImage.name}
                </Text>
                <IconButton
                  color={"icon-active"}
                  bg={"none"}
                  icon={<HiOutlineTrash size={18} />}
                  aria-label="trash"
                  onClick={clearBackSideImage}
                  _hover={{ bg: "none" }}
                />
              </Flex>
            ) : (
              <UploadButton side={"back"} />
            )}
          </Flex>
        )}

        <Flex alignItems={"center"}>
          <Text fontSize={"md"} fontWeight={"bold"} flex={1}>
            Golf balls amount:
          </Text>
          <Flex flex={1} fontSize={"xs"} color={"text-tertiary"}>
            <QuantityInput />
          </Flex>
        </Flex>
      </Stack>

      <TotalPriceInfo />
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
