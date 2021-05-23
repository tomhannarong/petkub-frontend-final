import React, { ReactElement, useRef, useEffect } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./../../styles/component-home-styles/section-finding-home.style";
import { Box, Card, Container, Grid, Typography } from "@material-ui/core";

interface Props {}
const useStyles = makeStyles(styles);
export default function SectionFindingHome({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <section className={classes.section_style}>
      <Container maxWidth="lg" className={classes.card_container}>
        <div>
          <Grid
            container
            spacing={0}
            direction="row"
            justify="space-around"
            alignItems="center"
          >
            <Link href="/find-pets">
              <a href="#" className={classes.bg_white}>
                <Card className={classes.card}>
                  <img
                    src="/static/img/home-find-icon.png"
                    alt="find-icon"
                    className={classes.card_img}
                  />
                  <Typography
                    variant="h1"
                    noWrap
                    align="center"
                    className={classes.card_header_text}
                  >
                    Find pets
                  </Typography>
                  <Typography
                    variant="body1"
                    noWrap
                    align="center"
                    className={classes.card_subtitle}
                  >
                    Browse pets reported missing <br />
                    by their owner.
                  </Typography>
                </Card>
              </a>
            </Link>
            <Link href="/found-pets">
              <a href="#" className={classes.bg_white}>
                <Card className={classes.card}>
                  <img
                    src="/static/img/home-found-icon.png"
                    alt="found-icon"
                    className={classes.card_img}
                  />
                  <Typography
                    variant="h1"
                    noWrap
                    align="center"
                    className={classes.card_header_text}
                  >
                    Found pets
                  </Typography>
                  <Typography
                    variant="body1"
                    noWrap
                    align="center"
                    className={classes.card_subtitle}
                  >
                    Look through pets reported found <br />
                    by members of the public.
                  </Typography>
                </Card>
              </a>
            </Link>
            <Link href="/free-pets">
              <a href="#" className={classes.bg_white}>
                <Card className={classes.card}>
                  <img
                    src="/static/img/home-free-icon.png"
                    alt="free-icon"
                    className={classes.card_img}
                  />
                  <Typography
                    variant="h1"
                    noWrap
                    align="center"
                    className={classes.card_header_text}
                  >
                    Free pets
                  </Typography>
                  <Typography
                    variant="body1"
                    gutterBottom
                    noWrap
                    align="center"
                    className={classes.card_subtitle}
                  >
                    Look through free pets
                    <br />
                    by members of the public.
                  </Typography>
                </Card>
              </a>
            </Link>
          </Grid>
        </div>
      </Container>
      <Container maxWidth="lg" className={classes.container_2}>
        <Grid
          container
          spacing={0}
          direction="column"
          justify="center"
          alignItems="center"
        >
          <div className={classes.div_header}>
            <Typography
              variant="body1"
              align="center"
              className={classes.container_2_header}
            >
              Finding home
            </Typography>
          </div>
        </Grid>

        <Grid
          container
          spacing={2}
          direction="row"
          justify="space-around"
          alignItems="center"
        >
          <Typography
            variant="body1"
            gutterBottom
            noWrap
            align="center"
            className={classes.card_subtitle}
          >
            Look through free pets
            <br />
            by members of the public.
          </Typography>
          <Typography
            variant="body1"
            gutterBottom
            noWrap
            align="center"
            className={classes.card_subtitle}
          >
            Look through free pets
            <br />
            by members of the public.
          </Typography>
        </Grid>
      </Container>
    </section>
  );
}
