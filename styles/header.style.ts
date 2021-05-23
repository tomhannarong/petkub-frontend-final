import { createStyles, Theme } from "@material-ui/core/styles";

const drawerWidth = 240;

export default (theme: Theme) =>
  createStyles({
    root: {
      display: "flex",
    },
    appBar: {
      zIndex: theme.zIndex.drawer + 1,
      backgroundColor: "#E7FCF1", //transparent
    },
    drawer: {
      width: drawerWidth,
      flexShrink: 0,
    },
    drawerPaper: {
      width: drawerWidth,
    },
    drawerContainer: {
      overflow: "auto",
    },
    content: {
      flexGrow: 1,
      padding: theme.spacing(3),
    },
    grow: {
      flexGrow: 1,
    },
    small: {
      width: theme.spacing(3),
      height: theme.spacing(3),
    },
    large: {
      width: theme.spacing(7),
      height: theme.spacing(7),
    },
    toolbar: {
      minHeight: theme.spacing(12),
    },
    banner: {
      height: "100%",
      width: "100%",

      // marginLeft: 50,
      // marginRight: 50,
    },
    paper: {
      border: "1px solid #d3d4d5",
    },
    menuHeader: {
      // marginRight: theme.spacing(5),
      marginLeft: theme.spacing(10),
      // marginInline: theme.spacing(5),
    },
    active: {
      color: "#343D48",
      fontSize: 20,
      fontFamily: "Comfortaa",
      fontWeight: "bold",

      // borderBottom: `3px solid ${theme.palette.secondary.light}`,
    },
    inActive: {
      color: "#909090",
      fontSize: 20,
      fontFamily: "Comfortaa",
      fontWeight: "normal",

      // borderBottom: `3px solid ${theme.palette.secondary.light}`,
    },
    button_border_radius: { borderRadius: 20 },
  });
