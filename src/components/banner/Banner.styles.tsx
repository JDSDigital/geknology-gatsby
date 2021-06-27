import { Container, makeStyles, styled } from "@material-ui/core";

export const useBannerStyles = makeStyles({});

export const BannerRoot = styled("div")({
  backgroundColor: "black",
  position: "relative",

  "& [data-gatsby-image-wrapper]": {
    height: ({ size = "small" }: { size?: "small" | "large" }) => {
      if (size === "small") return "500px";
      if (size === "large") return "700px";
    },
    objectFit: "cover",
    backgroundPosition: "bottom",
  },
});

export const BannerContainer = styled("div")({
  display: "flex",
  alignItems: "flex-end",
  position: "absolute",
  top: 0,
  backgroundColor: "rgba(0,0,0,0.5)",
  width: "100%",
  height: "100%",
  color: "white",
  padding: "48px 0",
});
