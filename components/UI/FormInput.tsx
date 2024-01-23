import { FormControl, Input } from "@chakra-ui/react";
import React from "react";

interface FormInputProps {
  placeholder?: string;
  isInvalid?: boolean;
  register: any;
  [key: string]: any;
}

const FormInput: React.FC<FormInputProps> = ({
  placeholder,
  register,
  isInvalid,
  ...props
}) => {
  return (
    <FormControl
      w={{ base: "20rem", sm: "18rem" }}
      mb={5}
      isInvalid={isInvalid}
    >
      <Input
        w={{ base: "20rem", sm: "18rem" }}
        p={"0.75rem 1rem"}
        color={"text-secondary"}
        borderRadius={"1rem"}
        bg={"surface-background-input"}
        placeholder={placeholder}
        _hover={{ bg: "surface-hover-alpha-20" }}
        {...register(props?.id)}
        {...props}
      />
    </FormControl>
  );
};

export default FormInput;
