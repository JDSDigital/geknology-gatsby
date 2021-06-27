import * as React from "react";
import { Layout, Seo } from "components/layout";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import { Banner } from "components/banner";
import { Typography } from "@material-ui/core";

const IndexPage: React.FC = () => {
  const { image } = useStaticQuery(graphql`
    query {
      image: file(relativePath: { eq: "mac-white.jpg" }) {
        childImageSharp {
          gatsbyImageData(layout: FULL_WIDTH)
        }
      }
    }
  `);

  return (
    <Layout>
      <Seo title="Home" />
      <Banner image={image}>
        <Typography variant="h1">Geknology Techno Services</Typography>
      </Banner>
    </Layout>
  );
};

export default IndexPage;
