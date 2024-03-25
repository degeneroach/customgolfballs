import {
  Box,
  Image,
  Text,
  useDisclosure,
} from "@chakra-ui/react";
import React from "react";
import ImageModal from "./Modal/ImageModal";

interface PrintImageProps {
  imageUrl?: string | null;
  hasLabel?: boolean;
}

const PrintImage: React.FC<PrintImageProps> = ({
  imageUrl,
  hasLabel = true,
}) => {
  const { isOpen, onOpen, onClose } = useDisclosure();

  return (
    <>
      <Box cursor={"pointer"} position={"relative"} onClick={onOpen}>
        <Image
          src="../images/NoLogoGolfBall.svg"
          alt="Golf Ball"
          w={"auto"}
          maxWidth={hasLabel ? { base: "22rem", sm: "15rem" } : "9rem"}
          h={hasLabel ? { base: "19.5rem", sm: "12.5rem" } : "7.5rem"}
        />
        <Box
          borderWidth={2}
          borderStyle={hasLabel ? "dashed" : "none"}
          borderColor={"border-hover"}
          borderRadius={hasLabel ? 5 : 0}
          w={hasLabel ? { base: "7rem", sm: "5rem" } : "2.8rem"}
          h={hasLabel ? { base: "7rem", sm: "5rem" } : "2.8rem"}
          position={"absolute"}
          top={"50%"}
          left={"50%"}
          transform={"translate(-50%, -50%)"}
          zIndex={1}
        >
          {imageUrl && (
            <Image
              w={"full"}
              h={"full"}
              objectFit={"contain"}
              src={imageUrl}
              alt="Preview Image"
            />
          )}
        </Box>
        {hasLabel && (
          <>
            <Text
              fontWeight={"bold"}
              top={"50%"}
              left={"25%"}
              transform={"translate(-50%, -50%)"}
              position={"absolute"}
            >
              .75&quot;
            </Text>
            <Text
              fontWeight={"bold"}
              top={"25%"}
              left={"50%"}
              transform={"translate(-50%, -50%)"}
              position={"absolute"}
            >
              .75&quot;
            </Text>
          </>
        )}
      </Box>
      {<ImageModal isOpen={isOpen} onClose={onClose} imageUrl={imageUrl!} />}
    </>
  );
};

export default PrintImage;
