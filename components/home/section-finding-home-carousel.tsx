import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import FindingHomeCard from "./section-finding-home-card";
import Carousel, {
  arrowsPlugin,
  autoplayPlugin,
  slidesToShowPlugin,
} from "@brainhubeu/react-carousel";
import "@brainhubeu/react-carousel/lib/style.css";
import ArrowBackIosTwoToneIcon from "@material-ui/icons/ArrowBackIosTwoTone";
import ArrowForwardIosTwoToneIcon from "@material-ui/icons/ArrowForwardIosTwoTone";
import styles from "../../styles/component-home-styles/section-finding-home-carousel.style";
import { IconButton } from "@material-ui/core";
const useStyles = makeStyles(styles);

interface Props {}

export default function FindingHomeCarousel({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <Carousel
      plugins={[
        "infinite",
        "fastSwipe",
        {
          resolve: arrowsPlugin,
          options: {
            arrowLeft: (
              <IconButton className={classes.carousel_button}>
                <ArrowBackIosTwoToneIcon
                  className={classes.carousel_icon}
                ></ArrowBackIosTwoToneIcon>
              </IconButton>
            ),
            arrowLeftDisabled: (
              <IconButton className={classes.carousel_button}>
                <ArrowBackIosTwoToneIcon
                  color="disabled"
                  className={classes.carousel_icon_disable}
                ></ArrowBackIosTwoToneIcon>
              </IconButton>
            ),
            arrowRight: (
              <IconButton className={classes.carousel_button}>
                <ArrowForwardIosTwoToneIcon
                  className={classes.carousel_icon}
                ></ArrowForwardIosTwoToneIcon>
              </IconButton>
            ),
            arrowRightDisabled: (
              <IconButton className={classes.carousel_button}>
                <ArrowForwardIosTwoToneIcon
                  color="disabled"
                  className={classes.carousel_icon_disable}
                ></ArrowForwardIosTwoToneIcon>
              </IconButton>
            ),
            addArrowClickHandler: true,
          },
        },
        {
          resolve: slidesToShowPlugin,
          options: {
            numberOfSlides: 5,
          },
        },
        {
          resolve: autoplayPlugin,
          options: {
            interval: 2000,
          },
        },
      ]}
      animationSpeed={1000}
      className={classes.carousel_style}
    >
      <FindingHomeCard />
      <FindingHomeCard />
      <FindingHomeCard />
      <FindingHomeCard />
      <FindingHomeCard />
      <FindingHomeCard />
    </Carousel>
  );
}
