import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) =>
  createStyles({
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
      transition: "all 0.2s ease-out",
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
      border: "4px dashed rgba(0,87,41,1)",
      boxShadow:
        "rgba(0, 0, 0, 0.09) 0px 2px 1px, rgba(0, 0, 0, 0.09) 0px 4px 2px, rgba(0, 0, 0, 0.09) 0px 8px 4px, rgba(0, 0, 0, 0.09) 0px 16px 8px, rgba(0, 0, 0, 0.09) 0px 32px 16px",
      "&:hover": {
        backgroundColor: "#16DE74",
        border: "4px dashed white",

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
  });
