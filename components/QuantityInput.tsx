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
  const ballType = useBoundStore((state) => state.ballType);
  const incrementQty = useBoundStore((state) => state.increment);
  const decrementQty = useBoundStore((state) => state.decrement);
  const setQuantity = useBoundStore((state) => state.setQuantity);
  const setInitialTotalPrice = useBoundStore(
    (state) => state.setInitialTotalPrice
  );
  const setTotalPrice = useBoundStore((state) => state.setTotalPrice);
  const setGrandTotal = useBoundStore((state) => state.setGrandTotal);

  const handleInputQuantity = (e: React.ChangeEvent<HTMLInputElement>) => {
    const newQuantity = parseInt(e.target.value, 10);
    setQuantity(isNaN(newQuantity) ? 0 : newQuantity);
    setInitialTotalPrice();
    setTotalPrice();
    setGrandTotal();
  };

  const handleIncreaseQuantity = () => {
    incrementQty(), setInitialTotalPrice(), setTotalPrice(), setGrandTotal();
  };
  const handleDecreaseQuantity = () => {
    decrementQty(), setInitialTotalPrice(), setTotalPrice(), setGrandTotal();
  };

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
        _disabled={{ color: "text-primary" }}
        isDisabled={ballType != "StarStrike"}
        min={0}
      />
      <InputRightElement pr={10} pt={2} color={"icon-active"}>
        <IconButton
          color={"icon-active"}
          icon={<HiOutlineMinus size={16} cursor={"pointer"} />}
          aria-label="decrease quantity"
          onClick={handleDecreaseQuantity}
          bg={"none"}
          size={"sm"}
          _hover={{ bg: "none" }}
          isDisabled={quantity <= 0}
        />
        <IconButton
          color={"icon-active"}
          icon={<HiOutlinePlus size={16} cursor={"pointer"} />}
          aria-label="increase quantity"
          onClick={handleIncreaseQuantity}
          bg={"none"}
          size={"sm"}
          _hover={{ bg: "none" }}
        />
      </InputRightElement>
    </InputGroup>
  );
};

export default QuantityInput;
