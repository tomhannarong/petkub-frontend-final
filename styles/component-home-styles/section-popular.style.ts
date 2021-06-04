import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    section_style: {
      background:
        "linear-gradient(180deg, rgba(231,252,241,1) 0%, rgba(22,222,116,1) 100%)",
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    container_style: {
      position: "static",
      height: 300,
      zIndex: 5,
      //   position: "absolute",
      //   left: "50%",
      //   top: 1800,
      //   transform: "translate(-50%, -50%)",
      //   zIndex: 5,
    },
    grid_style: {
      width: "100%",
      height: "100%",
      objectFit: "fill",
      background: "url('/static/img/home-subtraction-1.png')",
      backgroundRepeat: "no-repeat",
      backgroundSize: "auto",
      backgroundPosition: "center top",
      overflow: "hidden",
    },
    h1_style: {
      color: "#343D48",
      fontFamily: "Comfortaa",
      fontSize: 52,
      fontWeight: "bold",
    },
    h1_banner_style: {
      color: "#16DE74",
      fontFamily: "Okta",
      fontSize: 94,
      fontWeight: "bold",
      fontStyle: "italic",
    },
    subtitle_style: {
      color: "#343D48",
      fontFamily: "Okta",
      fontSize: 18,
      fontWeight: "bold",
      fontStyle: "italic",
      marginTop: theme.spacing(3),
      // marginBottom: theme.spacing(3),
      maxWidth: theme.spacing(50),
    },
    card_img: {
      width: "auto",
      height: 600,
      objectFit: "fill",
      position: "absolute",
      left: "50%",
      top: 2000,
      transform: "translate(-50%, -50%)",
      zIndex: 5,
      //   background: "url('/static/img/home-background-card.png')",
      //   backgroundRepeat: "no-repeat",
      //   backgroundSize: "auto",
      //   backgroundPosition: "center top",
      //   overflow: "hidden",
    },
    section_2_style: {
      backgroundColor: "#343D48",
      paddingTop: theme.spacing(5),
      paddingBottom: theme.spacing(5),
    },
    container_2_style: {
      position: "static",
      height: 200,
      //   left: "50%",
      //   top: 920,
      //   // minWidth: 1200,
      //   transform: "translate(-50%, -50%)",
      zIndex: 5,
    },
  });