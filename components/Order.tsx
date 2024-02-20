import {
  Text,
  Image,
  Flex,
  Stack,
  Switch,
  IconButton,
  useRadioGroup,
  HStack,
  Box,
  useBreakpointValue,
} from "@chakra-ui/react";
import React, { useEffect, useState } from "react";
import { HiChevronRight, HiOutlineTrash } from "react-icons/hi";
import PrimaryButton from "./UI/PrimaryButton";
import UploadButton from "./UI/UploadButton";
import TotalPriceInfo from "./TotalPriceInfo";
import QuantityInput from "./QuantityInput";
import useBoundStore from "@/store/boundStore";
import PreviewImage from "./PreviewImage";
import API from "@/utils/axios";
import Card from "./Card";
import MySwiper from "./Swiper";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

interface OrderProps {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
}

const SINGLE_SIDED_FEE = 40;
const DOUBLE_SIDED_FEE = 60;

const Order: React.FC<OrderProps> = ({ activeStep, setActiveStep }) => {
  const isDoubleSided = useBoundStore((state) => state.isDoubleSided);
  const quantity = useBoundStore((state) => state.quantity);
  const setIsDoubleSided = useBoundStore((state) => state.setIsDoubleSided);
  const frontSideImage = useBoundStore((state) => state.frontSideImage);
  const backSideImage = useBoundStore((state) => state.backSideImage);
  const ballType = useBoundStore((state) => state.ballType);
  const singleSidedSetupSS = useBoundStore((state) => state.singleSidedSetupSS);
  const doubleSidedSetupSS = useBoundStore((state) => state.doubleSidedSetupSS);
  const setBallType = useBoundStore((state) => state.setBallType);
  const clearBackSideImage = useBoundStore((state) => state.clearBackSideImage);
  const setTotalPrice = useBoundStore((state) => state.setTotalPrice);
  const setBallCost = useBoundStore((state) => state.setBallCost);
  const setShippingFee = useBoundStore((state) => state.setShippingFee);
  const clearFrontSideImage = useBoundStore(
    (state) => state.clearFrontSideImage
  );
  const setInitialTotalPrice = useBoundStore(
    (state) => state.setInitialTotalPrice
  );
  const setSingleSidedPrint = useBoundStore(
    (state) => state.setSingleSidedPrint
  );
  const setDoubleSidedPrint = useBoundStore(
    (state) => state.setDoubleSidedPrint
  );

  const setSingleSidedSetup = useBoundStore(
    (state) => state.setSingleSidedSetup
  );
  const setDoubleSidedSetup = useBoundStore(
    (state) => state.setDoubleSidedSetup
  );
  //StarStrike
  const setSingleSidedSetupSS = useBoundStore(
    (state) => state.setSingleSidedSetupSS
  );
  const setDoubleSidedSetupSS = useBoundStore(
    (state) => state.setDoubleSidedSetupSS
  );
  //Callaway SuperSoft
  const setSingleSidedSetupCS = useBoundStore(
    (state) => state.setSingleSidedSetupCS
  );
  const setDoubleSidedSetupCS = useBoundStore(
    (state) => state.setDoubleSidedSetupCS
  );
  //Titleist Pro
  const setSingleSidedSetupTP = useBoundStore(
    (state) => state.setSingleSidedSetupTP
  );
  const setDoubleSidedSetupTP = useBoundStore(
    (state) => state.setDoubleSidedSetupTP
  );

  const isMobileView = useBreakpointValue({
    base: true,
    md: false,
  });

  const handleToggle = () => {
    setIsDoubleSided(!isDoubleSided);
    setTotalPrice();
    setInitialTotalPrice();
  };

  useEffect(() => {
    const getPrices = async () => {
      const response = await API("GET", "create-payment-intent");

      setSingleSidedSetupCS(SINGLE_SIDED_FEE);
      setDoubleSidedSetupCS(DOUBLE_SIDED_FEE);
      setSingleSidedSetupTP(SINGLE_SIDED_FEE);
      setDoubleSidedSetupTP(DOUBLE_SIDED_FEE);

      response.priceList.map((price: any) => {
        switch (price.name) {
          case "BALL_COST":
            setBallCost(price.price);
            break;
          case "SINGLE_SIDED_SETUP":
            setSingleSidedSetupSS(price.price || 0)
            break;
          case "DOUBLE_SIDED_SETUP":
            setDoubleSidedSetupSS(price.price || 0);
            break;
          case "SINGLE_SIDED_PRINT":
            setSingleSidedPrint(price.price || 0);
            break;
          case "DOUBLE_SIDED_PRINT":
            setDoubleSidedPrint(price.price || 0);
            break;
          case "SHIPPING_FEE":
            setShippingFee(price.price || 0);
            break;
          default:
            break;
        }
      });
    };

    getPrices();
  }, []);

  //Group Radio
  const options = ["StarStrike", "Callaway SuperSoft", "Titleist Pro V1"];

  const { getRootProps, getRadioProps } = useRadioGroup({
    name: "package",
    defaultValue: ballType || "StarStrike",
    onChange: (value) => {
      setBallType(value),
        setSingleSidedSetup(singleSidedSetupSS),
        setDoubleSidedSetup(doubleSidedSetupSS);
    },
  });

  const group = getRootProps();

  //SwiperJS
  const [currentSlideIndex, setCurrentSlideIndex] = useState<number>();

  const handleSlideChange = (swiper: any) => {
    setCurrentSlideIndex(swiper.activeIndex);
    const selectedOption = options[swiper.activeIndex];

    setBallType(selectedOption);
    setSingleSidedSetup(singleSidedSetupSS),
    setDoubleSidedSetup(doubleSidedSetupSS);
  };

  const initialSlide = (ballType: string) => {
    switch (ballType) {
      case "StarStrike":
        return 0;
      case "Callaway SuperSoft":
        return 1;
      case "Titleist Pro V1":
        return 2;
      default:
        break;
    }
  };

  return (
    <Flex flexDir={"column"}>
      <Stack my={10} alignItems={"center"}>
        <Text fontSize={"2rem"} fontWeight={"bold"} mb={4}>
          Order online
        </Text>
        <Text
          fontSize={"xs"}
          width={{ base: "20rem", md: "40.75rem" }}
          textAlign={"center"}
          overflowWrap={"break-word"}
        >
          We offer shipping and local pick up on our online orders. For online
          orders we offer StarStrike Golf Balls. They are comparable to
          Kirklands and play great. Use the below tool to submit your artwork.
        </Text>
      </Stack>

      <Text fontSize={"xl"} fontWeight={"bold"} textAlign={"center"} mb={4}>
        Pick Your Balls
      </Text>

      {isMobileView && (
        <Text fontSize={"xs"} textAlign={"center"} mb={4}>
          Swipe for more options
        </Text>
      )}

      {isMobileView ? (
        <Flex textAlign={"center"} mb={10}>
          <Swiper
            onSlideChange={handleSlideChange}
            initialSlide={initialSlide(ballType)}
          >
            {options.map((value, index) => {
              const radio = getRadioProps({ value });
              return (
                <SwiperSlide key={value}>
                  <Flex justifyContent={"center"}>
                    <Card {...radio} isActive={index === currentSlideIndex}>
                      {value}
                    </Card>
                  </Flex>
                </SwiperSlide>
              );
            })}
          </Swiper>
        </Flex>
      ) : (
        <HStack {...group} justifyContent={"center"} my={8}>
          {options.map((value) => {
            const radio = getRadioProps({ value });
            return (
              <Card key={value} {...radio}>
                {value}
              </Card>
            );
          })}
        </HStack>
      )}

      <Stack mb={10} alignItems={"center"}>
        <Text fontSize={"xl"} fontWeight={"bold"}>
          {ballType} Golf Balls
        </Text>
        <PreviewImage />
      </Stack>

      <Stack
        mb={10}
        alignSelf={"center"}
        width={{ base: "20rem", sm: "25rem" }}
      >
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
          isDisabled={quantity === 0 || !frontSideImage.name}
          onClick={() => setActiveStep(activeStep + 1)}
        >
          Continue to shipping details
        </PrimaryButton>
      </Stack>
    </Flex>
  );
};

export default Order;
