import {
  Box,
  Flex,
  Step,
  StepSeparator,
  StepTitle,
  useSteps,
  Stepper,
  useBreakpointValue,
} from "@chakra-ui/react";
import React from "react";
import {
  HiOutlineCreditCard,
  HiOutlinePencil,
  HiOutlineUser,
} from "react-icons/hi";
import DividerCustom from "./DividerCustom";

const steps = [
  { title: "Customize", icon: <HiOutlinePencil size={20} /> },
  { title: "Details & Shipping", icon: <HiOutlineUser size={20} /> },
  { title: "Payment", icon: <HiOutlineCreditCard size={20} /> },
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

  const isMobileView = useBreakpointValue(
    {
      base: true,
      md: false,
    }
  );

  return (
    <Stepper
      index={activeStep}
      justifyContent={"space-around"}
      position={"relative"}
    >
      {steps.map((step, index) => (
        <Flex key={index}>
          <Step
            onClick={() => {
              isCompleteStep(index) && setActiveStep(index);
            }}
          >
            <Flex
              fontWeight={"bold"}
              alignItems={"center"}
              padding={{base: "0.75rem", sm: "0.75rem 1rem"}}
              cursor={"pointer"}
              color={getColor(index)}
              bg={isActiveStep(index) ? "surface-background-tertiary" : "none"}
              borderRadius={isActiveStep(index) ? "2rem" : "none"}
              _hover={{
                color: isIncompleteStep(index) ? "text-hover" : "none",
              }}
            >
              <Box mr={{ base: 0, sm: 1 }} alignItems={"center"}>
                {step.icon}
              </Box>
              {isMobileView ? <></> : <StepTitle>{step.title}</StepTitle>}
            </Flex>
          </Step>
        </Flex>
      ))}
      <DividerCustom left={{ base: "28%", sm: "30%" }} />
      <DividerCustom right={{ base: "28%", sm: "30%" }} />
    </Stepper>
  );
};

export default StepperCustom;
