import React, { ReactElement, useRef, useEffect, useState } from "react";
import Link from "next/link";
import Router, { useRouter } from "next/router";
import styles from "./../../styles/component-home-styles/section-banner.style";
import { makeStyles } from "@material-ui/core/styles";

import { Button, Typography, Container, Grid, Paper } from "@material-ui/core";
import { gsap } from "gsap";
import { useSpring, animated } from "react-spring";

interface Props {}

const useStyles = makeStyles(styles);

export default function SectionBanner({}: Props): ReactElement {
  const classes = useStyles();
  const router = useRouter();
  const cityRef = useRef(null);
  const marker_12_Ref = useRef(null);
  const marker_9_Ref = useRef(null);
  const marker_10_Ref = useRef(null);
  const building_8_Ref = useRef(null);
  const building_7_Ref = useRef(null);
  const bird_Ref = useRef(null);
  const cat_Ref = useRef(null);
  const dog_Ref = useRef(null);
  const path_10_Ref = useRef(null);
  const path_11_Ref = useRef(null);
  const path_12_Ref = useRef(null);

  useEffect(() => {
    gsap.from(cityRef.current, {
      duration: 1.5,
      autoAlpha: 0,
      ease: "none",
      delay: 0.2,
    });
    gsap.from(marker_12_Ref.current, {
      duration: 1.5,
      autoAlpha: 0,
      ease: "back.out(1.7)",
      y: -500,
      delay: 1,
    });
    gsap.from(marker_9_Ref.current, {
      duration: 2.5,
      autoAlpha: 0,
      ease: "elastic.out(1, 0.3)",
      y: -500,
      delay: 1.5,
    });
    gsap.from(marker_10_Ref.current, {
      duration: 2.5,
      autoAlpha: 0,
      ease: "bounce.out",
      y: -500,
      delay: 1.5,
    });
    gsap.from(building_8_Ref.current, {
      duration: 2.5,
      autoAlpha: 0,
      ease: "rough({ template: none.out, strength: 1, points: 20, taper: 'none', randomize: true, clamp: false})",
      y: 500,
      delay: 0.5,
    });
    gsap.from(building_7_Ref.current, {
      duration: 2.5,
      autoAlpha: 0,
      ease: "slow(0.7, 0.7, false)",
      y: 500,
      delay: 0.5,
    });

    gsap.from(bird_Ref.current, {
      duration: 2,
      autoAlpha: 0,
      ease: "Power2.easeOut",
      delay: 2,
    });
    gsap.from(cat_Ref.current, {
      duration: 2.5,
      autoAlpha: 0,
      ease: "Power2.easeIn",
      delay: 2.5,
    });
    gsap.from(dog_Ref.current, {
      duration: 3,
      autoAlpha: 0,
      ease: "Power2.easeOut",
      delay: 3,
    });

    gsap.from(path_10_Ref.current, {
      duration: 2,
      autoAlpha: 0,
      ease: "none",
      delay: 2,
    });
    gsap.from(path_11_Ref.current, {
      duration: 2,
      autoAlpha: 0,
      ease: "none",
      delay: 2,
    });
    gsap.from(path_12_Ref.current, {
      duration: 2,
      autoAlpha: 0,
      ease: "none",
      delay: 2,
    });

    // gsap.from(marker_12_Ref.current, {
    //   duration: 1.5,
    //   autoAlpha: 0,
    //   ease: "none",
    //   delay: 1,
    // });
    // gsap.from(headerRef.current, {
    //   duration: 2.5,
    //   autoAlpha: 0,
    //   ease: "back.out(1.7)",
    //   y: -500,
    //   delay: 1,
    // });
  }, [cityRef]);

  return (
    <section className={classes.section_style}>
      <Container maxWidth="lg">
        <Grid
          container
          direction="row"
          justify="space-between"
          alignItems="center"
        >
          <Grid item xs={6}>
            <Typography
              variant="h1"
              noWrap
              color="primary"
              className={classes.h1_style}
            >
              Find your lost
            </Typography>
            <Typography
              variant="h2"
              noWrap
              color="primary"
              className={classes.h1_banner_style}
            >
              petkub
            </Typography>
            <Typography
              variant="subtitle1"
              noWrap
              color="primary"
              className={classes.subtitle_style}
            >
              If You Find a Lost Pets. We Can Help You.
            </Typography>
            <Typography
              variant="subtitle1"
              noWrap
              color="primary"
              className={classes.subtitle2_style}
            >
              If You Found a Lost Pets. We can help you.
            </Typography>
            <Typography
              variant="subtitle1"
              noWrap
              color="primary"
              className={classes.subtitle2_style}
            >
              If You Need to Find Your Pets a New Home. We can help you.
            </Typography>
            <Typography
              variant="subtitle1"
              noWrap
              color="primary"
              className={classes.subtitle2_style}
            >
              If You Need to Get Free Pets. We can help you.
            </Typography>
            <Link href={"/search-by-photo"}>
              <Button>
                <img
                  src="/static/img/home-button-find-14.png"
                  alt="find pets"
                  className={classes.btn_searach}
                />
              </Button>
            </Link>
            <img
              ref={marker_12_Ref}
              src="/static/img/home-building-location-group-12.png"
              alt="location_12"
              className={classes.location_12_style}
            />
            <img
              ref={marker_9_Ref}
              src="/static/img/home-building-location-group-9.png"
              alt="location_9"
              className={classes.location_9_style}
            />
            <img
              ref={marker_10_Ref}
              src="/static/img/home-building-location-group-10.png"
              alt="location_10"
              className={classes.location_10_style}
            />
            <img
              ref={dog_Ref}
              src="/static/img/home-dog.png"
              alt="dog"
              className={classes.dog_style}
            />
            <img
              ref={cat_Ref}
              src="/static/img/home-cat.png"
              alt="cat"
              className={classes.cat_style}
            />
            <img
              ref={bird_Ref}
              src="/static/img/home-bird.png"
              alt="bird"
              className={classes.bird_style}
            />
            <img
              ref={building_8_Ref}
              src="/static/img/home-building-group-8.png"
              alt="building_8"
              className={classes.building_8_style}
            />
            <img
              ref={building_7_Ref}
              src="/static/img/home-building-group-7.png"
              alt="building_7"
              className={classes.building_7_style}
            />
            <img
              ref={path_12_Ref}
              src="/static/img/home-building-path-group-12.png"
              alt="building_path_12"
              className={classes.building_path_12_style}
            />
            <img
              ref={path_11_Ref}
              src="/static/img/home-building-path-group-11.png"
              alt="building_path_11"
              className={classes.building_path_11_style}
            />
            <img
              ref={path_10_Ref}
              src="/static/img/home-building-path-group-10.png"
              alt="building_path_10"
              className={classes.building_path_10_style}
            />
          </Grid>
          <Grid item xs={6}>
            <img
              ref={cityRef}
              src="/static/img/home-building-city-group-01.png"
              alt="city"
              className={classes.city_style}
            />
          </Grid>
        </Grid>
      </Container>
    </section>
  );
}
