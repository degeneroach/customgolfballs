import { Flex, Input } from "@chakra-ui/react";
import React, { useRef } from "react";
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

  const handleUploadFile = () => {
    inputRef.current.click();
  };

  const handleFileChange = (e: any) => {
    const fileObj = e.target.files && e.target.files[0];
    if (!fileObj) {
      return;
    }

    if (side == "front") {
      frontSideImage(URL.createObjectURL(e.target.files[0]), fileObj.name);
    }
    if (side == "back") {
      backSideImage(URL.createObjectURL(e.target.files[0]), fileObj.name);
    }

    e.target.value = null;
  };

  return (
    <Flex flex={1}>
      <Input
        display={"none"}
        ref={inputRef}
        type="file"
        onChange={handleFileChange}
      />
      <PrimaryButton
        leftIcon={<HiOutlineUpload size={20} />}
        size="lg"
        onClick={handleUploadFile}
      >
        Upload File
      </PrimaryButton>
    </Flex>
  );
};

export default UploadButton;
