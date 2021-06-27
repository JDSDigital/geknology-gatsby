import * as React from "react";
import { Layout, Seo } from "components/layout";
import { Typography } from "@material-ui/core";
import { graphql, PageProps } from "gatsby";
import { FC } from "react";
import { Banner } from "components/banner";
import { ImageQueryData } from "models/images";

const SupportPage: FC<PageProps<ImageQueryData>> = ({ data }) => (
  <Layout title="Soporte técnico">
    <Banner image={data.image}>
      <Typography variant="h1">Support Page</Typography>
    </Banner>
  </Layout>
);

export default SupportPage;

export const query = graphql`
  query SupportPageQuery {
    image: file(relativePath: { eq: "mac-rainbow.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
