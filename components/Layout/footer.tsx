import React, { ReactElement, StyleHTMLAttributes } from "react";

interface Props {
  style?: React.CSSProperties;
}

export default function Footer({ style }: Props): ReactElement {
  return (
    <div style={style}>
      <span style={{ paddingLeft: 280 }}>
        Copyright © 2020 Petkub Co., Ltd. All Rights Reserved. reserved.
      </span>
    </div>
  );
}
