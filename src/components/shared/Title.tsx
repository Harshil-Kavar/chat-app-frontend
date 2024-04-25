import React from "react";
import { Helmet } from "react-helmet-async";

interface TitlePropTypes {
  title?: string;
  description?: string;
}

const Title = ({
  title = "Chat App",
  description = "This is a Chat App Called chatting",
}: TitlePropTypes) => {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
    </Helmet>
  );
};

export default Title;
