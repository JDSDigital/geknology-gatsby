import { ISharpGatsbyImageArgs } from "gatsby-plugin-image";

export type ImageQueryData = {
  image: {
    childImageSharp: ISharpGatsbyImageArgs;
  };
};
