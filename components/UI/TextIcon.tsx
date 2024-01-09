import { Box, Flex, Icon, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface TextIconProps {
  children: ReactNode;
  leftIcon?: any;
  isBgTransparent?: boolean;
  [key: string]: any;
}

const TextIcon: React.FC<TextIconProps> = ({
  children,
  leftIcon,
  isBgTransparent,
  ...props
}) => {
  return (
    <Flex
      align="center"
      fontSize="sm"
      fontWeight={400}
      textColor="text-active"
      bgColor={isBgTransparent ? "transparent" : "surface-background-primary"}
      padding={isBgTransparent ? "0rem" : "1rem 1.5rem"}
      borderRadius='1rem'
      {...props}
    >
      {leftIcon && (
        <Icon as={leftIcon} mr="0.5rem" boxSize={5} />
      )}
      <Text>{children}</Text>
    </Flex>
  );
};

export default TextIcon;
