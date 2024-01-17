import {
  Modal,
  ModalOverlay,
  ModalContent,
  ModalCloseButton,
  ModalBody,
  useSteps,
} from "@chakra-ui/react";
import React from "react";
import Order from "../Order";
import StepperCustom from "../UI/StepperCustom";
import DetailsAndShipping from "../DetailsAndShipping";
import Payment from "../Payment";

interface OrderModalProps {
  isOpen: boolean;
  onClose: () => void;
}

const OrderModal: React.FC<OrderModalProps> = ({ isOpen, onClose }) => {
  const {
    activeStep,
    setActiveStep,
    isActiveStep,
    isCompleteStep,
    isIncompleteStep,
  } = useSteps({
    index: 0,
    count: 3,
  });

  return (
    <Modal isOpen={isOpen} onClose={onClose}>
      <ModalOverlay
        bg="surface-background-tertiary-alpha-20"
        backdropFilter="blur(50px)"
      />
      <ModalContent maxWidth={"60rem"} borderRadius={"2rem"}>
        <ModalCloseButton p={"2rem"} bg={"none"} />
        <ModalBody px={10} py={20}>
          <StepperCustom
            activeStep={activeStep}
            setActiveStep={setActiveStep}
            isActiveStep={isActiveStep}
            isCompleteStep={isCompleteStep}
            isIncompleteStep={isIncompleteStep}
          />
          {activeStep === 0 && <Order />}
          {activeStep === 1 && <DetailsAndShipping />}
          {activeStep === 2 && <Payment />}
        </ModalBody>
      </ModalContent>
    </Modal>
  );
};

export default OrderModal;
