import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    section_style: {
      backgroundColor: "#FFFFFF",
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(15),
    },
    h1_style: {
      color: "#343D48",
      fontFamily: "Okta",
      fontSize: 30,
      fontWeight: "bold",
      fontStyle: "italic",
    },
    h1_banner_style: {
      color: "#16DE74",
      fontFamily: "Okta",
      fontSize: 30,
      fontWeight: "bold",
      fontStyle: "italic",
    },

    container_2: {
      position: "relative",
      marginTop: 310,
      zIndex: 5,
    },
    container_2_header: {
      color: "#343D48",
      fontSize: 52,
      fontFamily: "Comfortaa",
      fontWeight: "bold",
      marginBottom: 30,
    },
    div_header: {
      // width: "100%",
      // height: 200,
      // objectFit: "none",
      paddingInline: 40,
      background: "url('/static/img/home-background-sm.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      backgroundPosition: "left top",
      overflow: "hidden",
    },

    carousel_button: {
      borderRadius: 100,
      backgroundColor: "white",
    },
    carousel_style: {
      // marginBottom: 50,
      // marginTop: 50,
    },
    carousel_icon: {
      color: "#16DE74",
      fontSize: 40,
    },
    carousel_icon_disable: {
      fontSize: 40,
    },
  });
