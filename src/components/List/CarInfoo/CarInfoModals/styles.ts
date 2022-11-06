import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: "90%",
  padding: 10,
  background: "#F8FAFC",
  display: "flex",
  gap: 10,
  justifyItems: "flex-start",
  alignItems: "flex-start",
  flexDirection: "column",
  borderRadius: "0 0 10px 10px",
});

export const Info = styled("p", {
  fontSize: 14,
});

export const Options = styled("div", {
  width: "100%",
  display: "flex",
  justifyContent: "space-between",
});

export const Option = styled("p", {
  height: 23,
  "&:hover": {
    fontWeight: "bold",
    cursor: "pointer",
  },
  variants: {
    mode: {
      edit: {
        textAlign: "start",
        color: "blue",
      },
      delete: {
        textAlign: "end",
        color: "red",
      },
    },
  },
});
