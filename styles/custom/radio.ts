import { radioAnatomy } from "@chakra-ui/anatomy";
import { createMultiStyleConfigHelpers, defineStyle } from "@chakra-ui/react";

const { definePartsStyle, defineMultiStyleConfig } =
  createMultiStyleConfigHelpers(radioAnatomy.keys);

const baseStyle = definePartsStyle({
  control: {
    borderColor: "border-active",
    mr: "1rem",
    _checked: { borderColor: "border-active", borderWidth: 5 },
  },
  container: {
    bg: "surface-background-input",
    padding: "1rem 1.5rem",
    borderRadius: "1rem",
    width: "18rem",
    _hover: { bg: "surface-hover-alpha-20" },
  },
});

const xl = defineStyle({
  w: "1.3rem",
  h: "1.3rem",
});

const sizes = {
  xl: definePartsStyle({ control: xl }),
};

export const radioTheme = defineMultiStyleConfig({ baseStyle, sizes });
