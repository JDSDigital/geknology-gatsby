import * as React from "react";
import { Helmet } from "react-helmet";
import { useSiteMetadata } from "hooks/useSiteMetadata";

type SeoProps = {
  description?: string;
  lang?: string;
  meta?: [];
  title: string;
};

export const Seo: React.FC<SeoProps> = ({
  description = "",
  lang = "",
  meta = [],
  title,
}) => {
  const {
    title: defaultTitle,
    description: defaultDescription,
    author,
  } = useSiteMetadata();

  const metaDescription = description || defaultDescription;

  return (
    <Helmet
      htmlAttributes={{
        lang,
      }}
      title={title}
      titleTemplate={defaultTitle ? `%s | ${defaultTitle}` : null}
      meta={[
        {
          name: `description`,
          content: metaDescription,
        },
        {
          property: `og:title`,
          content: title,
        },
        {
          property: `og:description`,
          content: metaDescription,
        },
        {
          property: `og:type`,
          content: `website`,
        },
        {
          name: `twitter:card`,
          content: `summary`,
        },
        {
          name: `twitter:creator`,
          content: author || ``,
        },
        {
          name: `twitter:title`,
          content: title,
        },
        {
          name: `twitter:description`,
          content: metaDescription,
        },
      ].concat(meta)}
    />
  );
};
