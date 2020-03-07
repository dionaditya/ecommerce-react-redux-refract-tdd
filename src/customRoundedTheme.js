import { grommet } from "grommet/themes";
import { deepMerge } from "grommet/utils";

const colors = {
  selected: "neutral-3"
};

export const customRoundedTheme = deepMerge(grommet, {
  global: {
    colors,
    control: {
      border: {
        radius: "24px"
      }
    },
    input: {
      weight: 400
    },
  },
  text: {
    medium: "13px"
  },
  textInput: {
    extend: "padding: 0 12px;"
  },
  select: {
    control: {
      extend: "padding: 3px 6px;",
      open: {
        background: "#ece0fa",
        border: "1px solid #7D4CDB"
      }
    }
  }
});