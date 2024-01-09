import { Button, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface ButtonProps {
  children: ReactNode;
  size: string;
  leftIcon?: any;
  rightIcon?: any;
  onClick?: () => void;
  [key: string]: any;
}

const PrimaryButton: React.FC<ButtonProps> = ({
  children,
  size,
  leftIcon,
  rightIcon,
  onClick,
  ...props
}) => {
  return (
    <Button
      size={size}
      fontSize={"md"}
      textColor={"text-inverse"}
      fontWeight={"bold"}
      boxShadow={"md"}
      borderRadius={32}
      onClick={onClick}
      leftIcon={leftIcon}
      rightIcon={rightIcon}
      _hover={{ bg: "surface-hover" }}
      _active={{ bg: "surface-active" }}
      whiteSpace={'break-spaces'}
      bgGradient="linear(to-b, surface-hover, surface-active)"
      {...props}
    >
      {children}
    </Button>
  );
};

export default PrimaryButton;
