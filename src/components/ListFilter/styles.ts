import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: 360,
  minHeight: 500,
  margin: "20px auto",
  border: "1px dashed green",
  borderRadius: 14,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingBottom: 30,
});

export const AgeFilterContainer = styled("div", {
  width: "100%",
  display: "flex",
  alignItems: "center",
  input: {
    margin: "0 4%",
  },
});
