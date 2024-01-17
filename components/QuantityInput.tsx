import useBoundStore from "@/store/boundStore";
import {
  InputGroup,
  Input,
  InputRightElement,
  IconButton,
} from "@chakra-ui/react";
import React from "react";
import { HiOutlineMinus, HiOutlinePlus } from "react-icons/hi";

const QuantityInput = () => {
  const quantity = useBoundStore((state) => state.quantity);
  const incrementQty = useBoundStore((state) => state.increment);
  const decrementQty = useBoundStore((state) => state.decrement);
  const setQuantity = useBoundStore((state) => state.setQuantity);

  const handleInputQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 0 : newQuantity);
  }

  return (
    <InputGroup w={"10rem"}>
      <Input
        px={"1rem"}
        value={quantity}
        onChange={handleInputQuantity}
        color={"text-primary"}
        backgroundColor={"surface-background-input"}
        borderRadius={"1rem"}
        placeholder="123"
        size={"lg"}
        _hover={{ bg: "surface-hover-alpha-20" }}
        min={0}
      />
      <InputRightElement pr={10} pt={2} color={"icon-active"}>
        <IconButton
          color={"icon-active"}
          icon={<HiOutlineMinus size={16} cursor={"pointer"} />}
          aria-label="add quantity"
          onClick={decrementQty}
          bg={"none"}
          size={"sm"}
          _hover={{ bg: "none" }}
          isDisabled={quantity === 0}
        />
        <IconButton
          color={"icon-active"}
          icon={<HiOutlinePlus size={16} cursor={"pointer"} />}
          aria-label="minus quantity"
          onClick={incrementQty}
          bg={"none"}
          size={"sm"}
          _hover={{ bg: "none" }}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default QuantityInput;
