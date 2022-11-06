import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: 360,
  margin: "20px auto",
  border: "2px solid gray",
  borderRadius: 14,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
});

export const AgeFilterContainer = styled("div", {
  width: "100%",
  display: "flex",
  gap: 10,
  alignItems: "center",
  select: {
    margin: "0 4%",
  },
});
