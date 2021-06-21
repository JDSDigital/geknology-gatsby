import * as React from "react";
import { GatsbyImage } from "gatsby-plugin-image";
import { Layout, Seo } from "components/layout";
import { graphql } from "gatsby";
import { useStaticQuery } from "gatsby";
import { makeStyles } from "@material-ui/core";

const IndexPage: React.FC = () => {
  const classes = useStyles();
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
      <GatsbyImage
        image={image.childImageSharp.gatsbyImageData}
        alt=""
        className={classes.banner}
      />
    </Layout>
  );
};

export default IndexPage;

const useStyles = makeStyles({
  banner: {
    height: "500px",
    objectFit: "cover",
    backgroundPosition: "bottom",
  },
});
