import Typography from "@material-ui/core/Typography";
import React, { ReactElement } from "react";
import SectionBanner from "../components/home/section-banner";
import SectionFindingHome from "../components/home/section-finding-home";

interface Props {}

export default function index({}: Props): ReactElement {
  return (
    <>
      <SectionBanner />
      <SectionFindingHome />
    </>
  );
}
