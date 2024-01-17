import {
  Box,
  Flex,
  Step,
  StepSeparator,
  StepTitle,
  useSteps,
  Stepper,
  Divider,
} from "@chakra-ui/react";
import React from "react";
import {
  HiOutlineCreditCard,
  HiOutlinePencil,
  HiOutlineUser,
} from "react-icons/hi";
import DividerCustom from "./DividerCustom";

const steps = [
  { title: "Customize", icon: <HiOutlinePencil size={16} /> },
  { title: "Details & Shipping", icon: <HiOutlineUser size={16} /> },
  { title: "Payment", icon: <HiOutlineCreditCard size={16} /> },
];

interface StepperCustom {
  activeStep: number;
  setActiveStep: React.Dispatch<React.SetStateAction<number>>;
  isActiveStep(step: number): boolean;
  isCompleteStep(step: number): boolean;
  isIncompleteStep(step: number): boolean;
}

const StepperCustom: React.FC<StepperCustom> = ({
  activeStep,
  setActiveStep,
  isActiveStep,
  isCompleteStep,
  isIncompleteStep,
}) => {
  const getColor = (index: number) => {
    switch (true) {
      case isCompleteStep(index):
        return "text-active";
      case isActiveStep(index):
        return "text-inverse";
      default:
        return "text-tertiary";
    }
  };

  return (
    <Stepper
      index={activeStep}
      justifyContent={"space-around"}
      position={"relative"}
    >
      {steps.map((step, index) => (
        <Flex key={index}>
          <Step onClick={() => setActiveStep(index)}>
            <Flex
              fontWeight={"bold"}
              alignItems={"center"}
              padding={"0.75rem 1rem"}
              cursor={"pointer"}
              color={getColor(index)}
              bg={isActiveStep(index) ? "surface-background-tertiary" : "none"}
              borderRadius={isActiveStep(index) ? "2rem" : "none"}
              _hover={{
                color: isIncompleteStep(index) ? "text-hover" : "none",
              }}
            >
              <Box mr={1}>{step.icon}</Box>
              <StepTitle>{step.title}</StepTitle>
            </Flex>
          </Step>
        </Flex>
      ))}
      <DividerCustom top={"50%"} left={"30%"} />
      <DividerCustom top={"50%"} left={"68%"} />
    </Stepper>
  );
};

export default StepperCustom;
