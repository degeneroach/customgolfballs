import { Flex, Image } from "@chakra-ui/react";
import React from "react";
import PrintImage from "./PrintImage";
import useBoundStore from "@/store/boundStore";

const PreviewImage = () => {
  const frontSideImage = useBoundStore((state) => state.frontSideImage);
  const backSideImage = useBoundStore((state) => state.backSideImage);
  const isDoubleSided = useBoundStore((state) => state.isDoubleSided);

  return (
    <Flex gap={10}>
      <PrintImage imageUrl={frontSideImage?.url} />
      {isDoubleSided ? (
        <PrintImage imageUrl={backSideImage?.url} />
      ) : (
        <Image
          src="../images/GolfBox.svg"
          alt="Golf Box"
          w={"15rem"}
          h={"12.5rem"}
        />
      )}
    </Flex>
  );
};

export default PreviewImage;
