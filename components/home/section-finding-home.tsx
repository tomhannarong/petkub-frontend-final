import React, { ReactElement, useRef, useEffect } from "react";
import ReactDOM from "react-dom";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./../../styles/component-home-styles/section-finding-home.style";
import { Card, Container, Grid, Typography } from "@material-ui/core";

import FindingHomeCarousel from "./section-finding-home-carousel";
import FindingHomeSelector from "./section-finding-home-selector";

interface Props {}
const useStyles = makeStyles(styles);
export default function SectionFindingHome({}: Props): ReactElement {
  const classes = useStyles();
  let carouselRef = useRef();

  useEffect(() => {
    ReactDOM.render(<FindingHomeCarousel />, carouselRef.current);
  }, []);

  return (
    <section className={classes.section_style}>
      <FindingHomeSelector />

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

        <div ref={carouselRef}></div>
      </Container>
    </section>
  );
}
