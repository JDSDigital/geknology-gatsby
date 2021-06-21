import * as React from "react";
import { Layout, Seo } from "components/layout";
import { Container, Typography } from "@material-ui/core";

const IndexPage = () => (
  <Layout>
    <Seo title="Soporte técnico" />
    <Container>
      <Typography variant="h1">Soporte técnico</Typography>
    </Container>
  </Layout>
);

export default IndexPage;
