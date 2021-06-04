import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "./../../styles/component-home-styles/section-popular.style";
import { Container, Grid, Typography } from "@material-ui/core";

interface Props {}
const useStyles = makeStyles(styles);

export default function SectionPopular({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <>
      <section className={classes.section_style}>
        <Container maxWidth="lg" className={classes.container_style}>
          <Typography variant="h1" align="center" className={classes.h1_style}>
            Popular Categories
          </Typography>

          <Grid
            container
            spacing={1}
            direction="row"
            justify="space-evenly"
            alignItems="center"
            className={classes.grid_style}
          >
            <img
              src="/static/img/home-popular-bird-icon.png"
              alt="bird-icon"
              className={classes.card_img}
            />
            <img
              src="/static/img/home-popular-dog-icon.png"
              alt="dog-icon"
              className={classes.card_img}
            />
            <img
              src="/static/img/home-popular-cat-icon.png"
              alt="cat-icon"
              className={classes.card_img}
            />
          </Grid>
        </Container>
      </section>
      <section className={classes.section_2_style}>
        <Container maxWidth="lg" className={classes.container_2_style}>
          <div>567</div>
        </Container>
      </section>
    </>
  );
}
