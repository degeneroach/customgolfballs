import {
  Button,
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  ModalFooter,
  Stepper,
  Box,
  Step,
  StepSeparator,
  useSteps,
  Flex,
  Text,
  Image,
  HStack,
  VStack,
  Switch,
  Input,
  InputGroup,
  Stack,
} from "@chakra-ui/react";
import React from "react";
import Wizard from "../UI/Wizard";
import {
  HiOutlinePencil,
  HiOutlineUser,
  HiOutlineCreditCard,
  HiOutlineUpload,
  HiChevronRight,
} from "react-icons/hi";
import PrimaryButton from "../UI/PrimaryButton";
import Order from "../Order";

const steps = [
  { title: "Customize", icon: <HiOutlinePencil size={20} /> },
  { title: "Details & Shipping", icon: <HiOutlineUser size={20} /> },
  { title: "Payment", icon: <HiOutlineCreditCard size={20} /> },
];

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const { activeStep } = useSteps({
    index: 1,
    count: steps.length,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="surface-background-tertiary-alpha-20"
        backdropFilter="blur(50px)"
      />
      <ModalContent maxWidth={"60rem"} borderRadius={"2rem"}>
        <ModalCloseButton />
        <ModalBody px={10} py={20}>
          <Stepper index={0}>
            {steps.map((step, index) => (
              <Step key={index}>
                <Box flex={1}>
                  <Wizard leftIcon={step.icon}>{step.title}</Wizard>
                </Box>
                <StepSeparator />
              </Step>
            ))}
          </Stepper>
          <Order />
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
