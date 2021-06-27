import { Container, Typography } from "@material-ui/core";
import { GatsbyImage } from "gatsby-plugin-image";
import React, { FC } from "react";
import { ComponentProps } from "react";
import { BannerContainer, BannerRoot } from "./Banner.styles";

type BannerOwnProps = ComponentProps<typeof BannerRoot>;
type BannerProps = BannerOwnProps & {
  image: any;
  size?: "small" | "large";
};

export const Banner: FC<BannerProps> = ({
  image,
  size = "small",
  children,
}) => {
  return (
    <BannerRoot size={size}>
      <GatsbyImage image={image.childImageSharp.gatsbyImageData} alt="" />
      <BannerContainer>
        <Container>
          <div>{children}</div>
        </Container>
      </BannerContainer>
    </BannerRoot>
  );
};
