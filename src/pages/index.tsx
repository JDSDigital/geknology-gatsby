import * as React from "react";
import { Link } from "gatsby";
import { StaticImage } from "gatsby-plugin-image";
import { Layout, Seo } from "components/layout";
import { Container, Typography } from "@material-ui/core";

const IndexPage = () => (
  <Layout>
    <Seo title="Home" />
    <Container>
      <Typography variant="h1">Hi people</Typography>
      <Typography>Welcome to your new Gatsby site.</Typography>
      <Typography>Now go build something great.</Typography>
      <StaticImage
        src="../images/gatsby-astronaut.png"
        width={300}
        quality={95}
        formats={["auto", "webp", "avif"]}
        alt="A Gatsby astronaut"
        style={{ marginBottom: `1.45rem` }}
      />
    </Container>
  </Layout>
);

export default IndexPage;
