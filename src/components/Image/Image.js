// @flow

import React from "react";

type Props = {
  src: number,
  title: number
};

const Image = (props: Props) => {
  const { src, title } = props;
  return <img src={src} alt={title} />;
};

export default Image;
