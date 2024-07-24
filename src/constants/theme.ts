import { OverrideToken } from "antd/es/theme/interface";
import { AliasToken } from "antd/es/theme/interface/alias";
import { COLORS } from "./colors";

export const THEME_TOKEN: Partial<AliasToken> = {};
export const THEME_COMPONENT: OverrideToken = {
  Button: {
    colorPrimary: COLORS["color-primary-500"],
    colorPrimaryHover: COLORS["color-primary-500"],
    colorPrimaryActive: COLORS["color-primary-500"],
    colorPrimaryBg: COLORS["color-primary-900"],
    colorBorder: COLORS["color-primary-500"],
    colorText: COLORS["color-primary-500"],
    colorBgContainerDisabled: "#ddd",
  },
  Tabs: {
    colorBgContainer: COLORS["color-primary-500"],
    colorPrimary: COLORS["color-primary-500"],
    colorText: COLORS["color-primary-300"],
    colorPrimaryHover: COLORS["color-primary-400"],
  },
  Menu: {
    darkItemBg: "#1c212d",
    darkItemSelectedBg: COLORS["color-primary-500"],
    itemColor: "#fff",
    itemHoverColor: "#fff",
    horizontalItemSelectedColor: "#fff",
  },
};
export const THEME = {
  token: THEME_TOKEN,
  components: THEME_COMPONENT,
};
