import { Box } from "@chakra-ui/react";
import React from "react";

interface ShapeProps {
  top: string;
  right: string;
  [key: string]: any;
}

const Shape: React.FC<ShapeProps> = ({top, right, ...props}) => {
  return (
    <Box
      position="absolute"
      top={top}
      right={right}
      width="50rem"
      height="50rem"
      borderRadius="50%"
      bgGradient={"linear(to-b, surface-hover, surface-active)"}
      opacity={0.1}
      zIndex="-1"
      {...props}
    />
  );
};

export default Shape;
