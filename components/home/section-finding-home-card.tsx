import { Card, Typography } from "@material-ui/core";
import React, { ReactElement } from "react";
import { makeStyles } from "@material-ui/core/styles";
import styles from "../../styles/component-home-styles/section-finding-home-card.style";

interface Props {}

const useStyles = makeStyles(styles);

export default function FindingHomeCard({}: Props): ReactElement {
  const classes = useStyles();
  return (
    <Card className={classes.card_2}>
      <img
        src="/static/img/dog_avatar.png"
        alt="free-icon"
        className={classes.card_img_2}
      />
      <Typography
        variant="h1"
        noWrap
        align="left"
        className={classes.card_header_text_2}
      >
        Marcus
      </Typography>
      <Typography
        variant="body1"
        align="left"
        className={classes.card_subtitle_2}
      >
        Male,Young
      </Typography>
    </Card>
  );
}
