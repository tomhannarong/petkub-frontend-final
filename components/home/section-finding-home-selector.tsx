import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/component-home-styles/section-finding-home-selector.style";
import { Card, Container, Grid, Typography } from "@material-ui/core";
import Link from "next/link";
import { useSpring, animated } from "react-spring";

interface Props {}

const useStyles = makeStyles(styles);

export default function FindingHomeSelector({}: Props): ReactElement {
  const classes = useStyles();

  const stylesFindSpring = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    config: { duration: 2000, tension: 300 },
    to: { y: -20 },
  });
  const stylesFoundSpring = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    config: { duration: 1500, tension: 200 },
    to: { y: -15 },
  });
  const stylesFreeSpring = useSpring({
    loop: { reverse: true },
    from: { y: 0 },
    config: { duration: 1000, tension: 100 },
    to: { y: -25 },
  });

  return (
    <Container maxWidth="lg" className={classes.card_container}>
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
              <animated.div
                style={{
                  ...stylesFindSpring,
                }}
              >
                <img
                  src="/static/img/home-find-icon.png"
                  alt="find-icon"
                  className={classes.card_img}
                />
              </animated.div>

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
              <animated.div
                style={{
                  ...stylesFoundSpring,
                }}
              >
                <img
                  src="/static/img/home-found-icon.png"
                  alt="found-icon"
                  className={classes.card_img}
                />
              </animated.div>

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
              <animated.div
                style={{
                  ...stylesFreeSpring,
                }}
              >
                <img
                  src="/static/img/home-free-icon.png"
                  alt="free-icon"
                  className={classes.card_img}
                />
              </animated.div>

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
    </Container>
  );
}
