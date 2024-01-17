import { Divider } from "@chakra-ui/react";
import React from "react";

interface DividerCustomProps {
  top: string;
  left: string;
}

const DividerCustom: React.FC<DividerCustomProps> = ({ top, left }) => {
  return (
    <Divider
      borderWidth={1}
      borderColor={"border-primary"}
      w={"2.5rem"}
      top={top}
      left={left}
      display={{ base: "none", sm: "block" }}
      position={"absolute"}
    />
  );
};

export default DividerCustom;
