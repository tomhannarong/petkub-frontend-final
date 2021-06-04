import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) =>
  createStyles({
    carousel_button: {
      borderRadius: 100,
      backgroundColor: "white",
    },
    carousel_style: {
      // paddingBottom: 50,
      // paddingTop: 50,
    },
    carousel_icon: {
      color: "#16DE74",
      fontSize: 40,
    },
    carousel_icon_disable: {
      fontSize: 40,
    },
  });
