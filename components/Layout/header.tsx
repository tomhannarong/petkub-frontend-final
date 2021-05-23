import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import AppBar from "@material-ui/core/AppBar";
import Toolbar from "@material-ui/core/Toolbar";
import IconButton from "@material-ui/core/IconButton";
import Typography from "@material-ui/core/Typography";
import InputBase from "@material-ui/core/InputBase";
import Badge from "@material-ui/core/Badge";
import MenuItem from "@material-ui/core/MenuItem";
import Menu from "@material-ui/core/Menu";
import MenuIcon from "@material-ui/icons/Menu";
import SearchIcon from "@material-ui/icons/Search";
import ExitToAppIcon from "@material-ui/icons/ExitToApp";
import MailIcon from "@material-ui/icons/Mail";
import NotificationsIcon from "@material-ui/icons/Notifications";
import MoreIcon from "@material-ui/icons/MoreVert";

import styles from "./../../styles/header.style";
import { Button, Container, Grid } from "@material-ui/core";
import { MenuType } from "../../types/menu.types";
import Router, { useRouter } from "next/router";
import Link from "next/link";
import Head from "next/head";

const useStyles = makeStyles(styles);
const menus: MenuType[] = [
  { title: "Find pets", path: "/find-pets" },
  { title: "Found pets", path: "/found-pets" },
  { title: "Free pets", path: "/free-pets" },
  { title: "Donate", path: "/donate" },
  { title: "Contact us", path: "/contact-us" },
];

export default function Header() {
  const classes = useStyles();
  const router = useRouter();

  return (
    <>
      <Head>
        <meta name="viewport" content="viewport-fit=cover" />

        <link
          rel="preload"
          href="/static/fonts/okta/Okta-BoldItalic.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/okta/Okta-ExtraLight.otf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/comfortaa/Comfortaa-Bold.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/comfortaa/Comfortaa-Light.ttf"
          as="font"
          crossOrigin=""
        />
        <link
          rel="preload"
          href="/static/fonts/comfortaa/Comfortaa-Regular.ttf"
          as="font"
          crossOrigin=""
        />
      </Head>
      <AppBar position="static" className={classes.appBar}>
        {/* position="fixed" */}
        <Container fixed>
          <Toolbar className={classes.toolbar}>
            <div className={classes.drawerContainer}>
              <Link href={"/"}>
                <a href="#">
                  <img
                    src="/static/img/Logo.png"
                    alt="Logo-Petkub"
                    className={classes.banner}
                  />
                </a>
              </Link>
            </div>
            <Grid
              container
              direction="row"
              justify="flex-start"
              alignItems="center"
            >
              {menus &&
                menus.map(({ title, icon, path }, index) => {
                  const rootPath = "/" + router.pathname.split("/")[1];
                  return (
                    <Link href={path} key={title}>
                      <a href={path} className={classes.menuHeader}>
                        <Typography
                          variant="h1"
                          noWrap
                          color="primary"
                          className={
                            rootPath == path ? classes.active : classes.inActive
                          }
                        >
                          {title}
                        </Typography>
                      </a>
                    </Link>
                  );
                })}
            </Grid>

            <div className={classes.grow}></div>

            <div>
              <Button className={classes.button_border_radius}>
                <img
                  src="/static/img/button-signin.png"
                  alt="signin"
                  className={classes.banner}
                />
              </Button>
            </div>
          </Toolbar>
        </Container>
      </AppBar>

      <style jsx global>
        {`
          @font-face {
            font-family: "Okta";
            src: url("static/fonts/okta/Okta-BoldItalic.otf");
            font-style: bold;
            font-weight: 600;
          }
          @font-face {
            font-family: "Okta";
            src: url("static/fonts/okta/Okta-ExtraLight.otf");
            font-style: light;
            font-weight: 500;
          }

          @font-face {
            font-family: "Comfortaa";
            src: url("static/fonts/comfortaa/Comfortaa-Bold.ttf");
            font-style: bold;
            font-weight: 700;
          }
          @font-face {
            font-family: "Comfortaa";
            src: url("static/fonts/comfortaa/Comfortaa-Light.ttf");
            font-style: light;
            font-weight: 400;
          }
          @font-face {
            font-family: "Comfortaa";
            src: url("static/fonts/comfortaa/Comfortaa-Regular.ttf");
            font-style: normal;
            font-weight: 400;
          }
          a:link {
            text-decoration: none;
          }
          img {
            -webkit-user-select: none;
            -khtml-user-select: none;
            -moz-user-select: none;
            -o-user-select: none;
            user-select: none;
          }
        `}
      </style>
    </>
  );
}
