import { styled } from "@stitches/react";

export const ItemContainer = styled("div", {
  width: "90%",
  marginTop: 20,
});

export const Item = styled("div", {
  width: "100%",
  height: 50,
  paddingLeft: 10,
  background: "lightgray",
  fontWeight: "bold",
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
  background: "#F8FAFC",
  display: "none",
  gap: 10,
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
  fontSize: 14,
});
