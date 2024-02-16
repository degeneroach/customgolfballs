import React from "react";
import { Box, Text, chakra, useRadio, Image, Flex } from "@chakra-ui/react";
import { HiCheckCircle, HiOutlineCheckCircle } from "react-icons/hi";

const Card: React.FC<any> = (props) => {
  const { getInputProps, getRadioProps } = useRadio(props);

  const input = getInputProps();
  const checkbox = getRadioProps();

  const cardData = [
    {
      name: "StarStrike",
      price: "$2.00 / Per Ball",
      description: "No MOQ - Purchase in increments of 1 ball.",
      img: "../images/StarStrike.svg",
    },
    {
      name: "Callaway SuperSoft",
      price: "$34.99 / Dozen",
      description: "Purchase in increments of 12",
      img: "../images/Callaway SuperSoft.svg",
    },
    {
      name: "Titleist Pro V1",
      price: "$72.99 / Dozen",
      description: "Purchase in increments of 12",
      img: "../images/Titleist Pro V1.svg",
    },
  ];

  const cardDetails = cardData.find((details) => details.name === props.value);

  return (
    <Box as="label">
      <input {...input} />
      <Box
        {...checkbox}
        py={3}
        mx={2}
        w={"17.25rem"}
        h={"23.688rem"}
        bg={"surface-background-secondary"}
        cursor="pointer"
        borderRadius="md"
        boxShadow="md"
        _checked={{
          borderColor: "border-active",
          borderWidth: 2,
          color: "text-active",
        }}
        borderWidth={props.isActive ? 2 : "1px"}
        borderColor={props.isActive && "border-active"}
        color={props.isActive && "text-active"}
      >
        <Flex flexDirection={"column"}>
          <Text fontSize={"md"} textAlign={"center"} fontWeight={"bold"}>
            {props.children}
          </Text>
          <Image
            alignSelf={"center"}
            w={150}
            h={180}
            alt="Package Img"
            src={cardDetails?.img}
          />
          <Box mt={5}>
            <Text fontSize={"md"} textAlign={"center"}>
              <chakra.span fontWeight={"bold"}>Price: </chakra.span>
              {cardDetails?.price}
            </Text>
            <Text fontSize={"xs"} textAlign={"center"}>
              {cardDetails?.description}
            </Text>
          </Box>
          <Box alignSelf={"center"} mt={5}>
            {props.isChecked || props.isActive ? (
              <HiCheckCircle size={20} />
            ) : (
              <HiOutlineCheckCircle size={20} />
            )}
          </Box>
        </Flex>
      </Box>
    </Box>
  );
};

export default Card;
