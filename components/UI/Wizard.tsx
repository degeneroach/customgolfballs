import { Button, Flex, Text } from "@chakra-ui/react";
import React, { ReactNode } from "react";

interface WizardProps {
  children: ReactNode;
  leftIcon?: any;
  onClick?: () => void;
  [key: string]: any;
}

const Wizard: React.FC<WizardProps> = ({
  children,
  leftIcon,
  onClick,
  ...props
}) => {
  return (
    <Button
      size={"lg"}
      fontSize={"md"}
      textColor={"text-tertiary"}
      fontWeight={"bold"}
      variant={'ghost'}
      borderRadius={32}
      onClick={onClick}
      leftIcon={leftIcon}
      _hover={{ bg: "surface-background-primary" }}
      _active={{ bg: "surface-active" }}
      whiteSpace={"break-spaces"}
    //   bg={'surface-background-tertiary'}
     {...props}
    >
      {children}
    </Button>
  );
};

export default Wizard;
