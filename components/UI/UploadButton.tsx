import { Flex, Input, Text } from "@chakra-ui/react";
import React, { useRef, useState } from "react";
import { HiOutlineUpload } from "react-icons/hi";
import PrimaryButton from "./PrimaryButton";
import useBoundStore from "@/store/boundStore";

interface UploadButtonProps {
  side: string;
}

const UploadButton: React.FC<UploadButtonProps> = ({ side }) => {
  const inputRef = useRef<any>(null);

  const frontSideImage = useBoundStore((state) => state.setFrontSideImage);
  const backSideImage = useBoundStore((state) => state.setBackSideImage);
  const setErrorUploadMessage = useBoundStore(
    (state) => state.setErrorUploadMessage
  );
  const errorUploadMessage = useBoundStore((state) => state.errorUploadMessage);

  const handleUploadFile = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e: any) => {
    const FILE_SIZE = 2048; //2MB

    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) {
      return;
    }

    if (fileObj.size / 1024 >= FILE_SIZE) {
      setErrorUploadMessage("File size is greater 2MB");
    } else {
      if (side == "front") {
        frontSideImage(
          URL.createObjectURL(e.target.files[0]),
          e.target.files[0],
          fileObj.name
        );
      }
      if (side == "back") {
        backSideImage(
          URL.createObjectURL(e.target.files[0]),
          e.target.files[0],
          fileObj.name
        );
      }

      setErrorUploadMessage("");
    }

    e.target.value = null;
    ("");
  };

  return (
    <Flex flex={1} flexDir={"column"}>
      <Input
        display={"none"}
        ref={inputRef}
        type="file"
        accept="image/jpeg, image/png"
        onChange={handleFileChange}
      />
      <PrimaryButton
        leftIcon={<HiOutlineUpload size={20} />}
        size="lg"
        onClick={handleUploadFile}
        w={"10.5rem"}
      >
        Upload File
      </PrimaryButton>
      <Text color={"red"} ml={2}>
        {errorUploadMessage}
      </Text>
    </Flex>
  );
};

export default UploadButton;
