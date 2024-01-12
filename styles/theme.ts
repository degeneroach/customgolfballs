import { extendTheme } from "@chakra-ui/react";
import "@fontsource/inter/100.css";
import "@fontsource/inter/200.css";
import "@fontsource/inter/300.css";
import "@fontsource/inter/400.css";
import "@fontsource/inter/500.css";
import "@fontsource/inter/600.css";
import "@fontsource/inter/700.css";
import { switchTheme } from "./custom/switch";

const theme = extendTheme({
  styles: {
    global: () => ({
      "html, body": {
        background: "surface-background-secondary",
        fontSize: "sm",
        overflowX: 'hidden'
      },
    }),
  },
  fonts: {
    heading: `'Inter', sans-serif`,
    body: `'Inter', sans-serif`,
  },
  colors: {
    "text-primary": "#011638",
    "text-secondary": "#193766",
    "text-tertiary": "#748cb2",
    "text-inverse": "#ffffff",
    "text-active": "#008FBC",
    "text-hover": "#2EC4B6",
    "surface-active": "#008fbc",
    "surface-hover": "#2EC4b6",
    "surface-hover-alpha-20": "rgba(46, 196, 182, 0.20)",
    "surface-background-primary": "#ffffff",
    "surface-background-secondary": "#f2f7ff",
    "surface-background-tertiary": "#011638",
    "surface-background-tertiary-alpha-20": "rgba(1, 22, 56, 0.2)",
    "surface-background-input": "#E5EFFF",
    "icon-primary": "#011638",
    "icon-secondary": "#748CB2",
    "icon-inverse": "#FFFFFF",
    "icon-active": "#008FBC",
    "icon-hover": "#2EC4B6",
    "border-primary": "#748CB2",
    "border-active": "#008FBC",
    "border-hover": "#2EC4B6",
  },
  components: { Switch: switchTheme },
});

export default theme;
