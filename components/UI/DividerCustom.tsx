import { Divider } from "@chakra-ui/react";
import React from "react";

interface DividerCustomProps {
  left?: any;
  right?: any;
}

const DividerCustom: React.FC<DividerCustomProps> = ({ left, right }) => {
  return (
    <Divider
      borderWidth={1}
      borderColor={"border-primary"}
      w={{base: "1.5rem",sm: "2.5rem"}}
      top={"50%"}
      left={left}
      right={right}
      // display={{ base: "none", sm: "block" }}
      position={"absolute"}
    />
  );
};

export default DividerCustom;
