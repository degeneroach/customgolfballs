import {
    Modal,
    ModalOverlay,
    ModalContent,
    ModalCloseButton,
    ModalBody,
    Image,
  } from "@chakra-ui/react";
  import React from "react";
  
  const ImageModal: React.FC<{
    isOpen: boolean;
    onClose: () => void;
    imageUrl?: string;
  }> = ({ isOpen, onClose, imageUrl }) => {
    return (
      <Modal isOpen={isOpen} onClose={onClose} isCentered>
        <ModalOverlay />
        <ModalContent m={5}>
          <ModalCloseButton />
          <ModalBody padding={0} display={"flex"} justifyContent={"center"}>
            <Image w={"100%"} h={"100%"} src={imageUrl!} alt="Preview Image" />
          </ModalBody>
        </ModalContent>
      </Modal>
    );
  };
  
  export default ImageModal;
  