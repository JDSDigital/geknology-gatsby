import * as React from "react";
import { Layout, Seo } from "components/layout";
import { Typography } from "@material-ui/core";
import { graphql, PageProps } from "gatsby";
import { FC } from "react";
import { Banner } from "components/banner";
import { ImageQueryData } from "models/images";

const ContactPage: FC<PageProps<ImageQueryData>> = ({ data }) => (
  <Layout title="Contacto">
    <Banner image={data.image}>
      <Typography variant="h1">Contact Page</Typography>
    </Banner>
  </Layout>
);

export default ContactPage;

export const query = graphql`
  query ContactPageQuery {
    image: file(relativePath: { eq: "keyboard-black.jpg" }) {
      childImageSharp {
        gatsbyImageData(layout: FULL_WIDTH)
      }
    }
  }
`;
