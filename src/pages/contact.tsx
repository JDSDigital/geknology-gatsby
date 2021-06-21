import * as React from "react";
import { Layout, Seo } from "components/layout";
import { Container, Typography } from "@material-ui/core";

const IndexPage = () => (
  <Layout>
    <Seo title="Contacto" />
    <Container>
      <Typography variant="h1">Contacto</Typography>
    </Container>
  </Layout>
);

export default IndexPage;
