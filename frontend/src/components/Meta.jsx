import React from "react";
import { Helmet } from "react-helmet-async";

function Meta({ title, description, keywords }) {
  return (
    <Helmet>
      <title>{title}</title>
      <meta name="description" content={description} />
      <meta name="keywords" content={keywords} />
    </Helmet>
  );
}

Meta.defaultProps = {
  title: "Welcome to The Tropical Collection",
  description: "We sell the best kosher dried fruits",
  keywords:
    "kosher, dried fruits, kosher fruits, cheap kosher fruits, best dried fruits",
};

export default Meta;
