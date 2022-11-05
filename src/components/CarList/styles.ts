import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: 360,
  margin: "auto",
  padding: "20px 0",
  borderRadius: 16,
  display: "flex",
  justifyContent: "flex-start",
  alignItems: "center",
  flexDirection: "column",
});

export const ItemContainer = styled("div", {
  width: "90%",
  marginTop: 20,
});

export const Item = styled("div", {
  width: "100%",
  height: 50,
  paddingLeft: 10,
  background: "Blue",
  color: "White",
  display: "flex",
  alignItems: "center",
  borderRadius: 10,
  variants: {
    selected: {
      selected: {
        borderRadius: "10px 10px 0 0",
      },
    },
  },
});

export const Content = styled("div", {
  width: "100%",
  padding: 10,
  background: "Lightblue",
  display: "none",
  justifyItems: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  borderRadius: "0 0 10px 10px",
  variants: {
    selected: {
      selected: {
        display: "flex",
      },
    },
  },
});

export const Info = styled("p", {
  marginTop: 10,
});
