import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    section_style: {
      backgroundColor: "#FFFFFF",
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(20),
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
    bg_white: {
      backgroundColor: "#FFFFFF",
      borderRadius: 20,
    },
    card_container: {
      position: "absolute",
      left: "50%",
      top: 920,
      // minWidth: 1200,
      transform: "translate(-50%, -50%)",
      zIndex: 5,
    },

    card: {
      position: "relative",
      display: "flex",
      flexDirection: "column",
      borderRadius: 20,
      width: 350,
      height: "100%",
      // backgroundColor: "#FFFFFF",
      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      padding: 15,
      zIndex: 5,
      boxShadow:
        "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      "&:hover": {
        backgroundColor: "#16DE74",
        "& $card_header_text": {
          color: "white",
        },
        "& $card_subtitle": {
          color: "white",
        },
      },
    },
    card_img: {
      width: "100%",
      height: 200,
      objectFit: "none",
      background: "url('/static/img/home-background-card.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      backgroundPosition: "center top",
      overflow: "hidden",
    },
    card_header_text: {
      color: "#343D48",
      fontSize: 30,
      fontFamily: "Comfortaa",
      fontWeight: "bold",
      marginBottom: 15,
    },
    card_subtitle: {
      color: "#909090",
      fontSize: 20,
      fontFamily: "Comfortaa",
      fontWeight: "bold",
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
      marginBottom: 15,
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
  });
