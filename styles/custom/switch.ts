import { switchAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(switchAnatomy.keys);

const baseStyle = definePartsStyle({
  container: {},
  thumb: {
    bg: "icon-active",
    _hover: {
      bg: "icon-hover",
    },
    _checked: {
      bg: "icon-inverse",
      _hover: {
        bg: "icon-inverse",
      },
    },
  },
  track: {
    bg: "gray.100",
    _hover: {
      bg: "surface-hover-alpha-20",
    },
    _checked: {
      bg: "surface-active",
      _hover: {
        bg: "surface-hover",
      },
    },
  },
});

export const switchTheme = defineMultiStyleConfig({ baseStyle });
