import * as React from "react";
import { Layout, Seo } from "components/layout";
import { graphql, PageProps } from "gatsby";
import { Banner } from "components/banner";
import { Typography } from "@material-ui/core";
import { ImageQueryData } from "models/images";

const IndexPage: React.FC<PageProps<ImageQueryData>> = ({ data }) => {
  return (
    <Layout title="Home">
      <Banner image={data.image}>
        <Typography variant="h1">Geknology Techno Services</Typography>
      </Banner>
    </Layout>
  );
};

export default IndexPage;

export const query = graphql`
  query IndexPageQuery {
    image: file(relativePath: { eq: "mac-white.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
