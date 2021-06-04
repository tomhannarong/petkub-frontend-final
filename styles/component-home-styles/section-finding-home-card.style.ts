import { createStyles, Theme } from "@material-ui/core/styles";

export default (theme: Theme) =>
  createStyles({
    card_2: {
      // marginBottom: 100,
      // marginTop: 100,
      position: "relative",
      display: "flex",
      flexDirection: "column",
      borderRadius: 20,
      width: 200,
      // wordSpacing: 20,
      height: "100%",
      // backgroundColor: "#FFFFFF",

      textAlign: "center",
      justifyContent: "center",
      alignContent: "center",
      zIndex: 5,
      boxShadow:
        "rgba(136, 165, 191, 0.48) 6px 2px 16px 0px, rgba(255, 255, 255, 0.8) -6px -2px 16px 0px;",
    },
    card_img_2: {
      width: "100%",
      height: "100%",
      objectFit: "cover",
    },
    card_header_text_2: {
      marginTop: 20,
      color: "#343D48",
      fontSize: 20,
      fontFamily: "Comfortaa",
      fontWeight: "bold",
      marginBottom: 10,
      paddingInline: 20,
      minHeight: 25,
    },
    card_subtitle_2: {
      paddingInline: 20,
      color: "#909090",
      fontSize: 16,
      fontFamily: "Comfortaa",
      fontWeight: "normal",
      marginBottom: 15,
      minHeight: 20,
    },
  });
