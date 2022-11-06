import { styled } from "@stitches/react";

export const UpdateTitle = styled("h2", {
  width: "100%",
  fontSize: 18,
  textAlign: "center",
});

export const UpdateForm = styled("form", {
  width: "90%",
  padding: 10,
  background: "#F8FAFC",
  gap: 10,
  display: "flex",
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

export const UpdateLabel = styled("label", {
  fontSize: 16,
  fontWeight: "bold",
  alignSelf: "start",
});

export const UpdateInput = styled("input", {
  fontSize: 16,
  width: "100%",
  height: 32,
  background: "White",
  outline: "none",
  border: "none",
  borderRadius: 6,
  paddingLeft: 10,
});

export const UpdateSelect = styled("select", {
  fontSize: 16,
  width: "100%",
  height: 32,
  background: "white",
  outline: "none",
  border: "none",
  borderRadius: 6,
  paddingLeft: 16,
  option: {
    background: "#F8FAFC",
  },
});

export const UpdateButton = styled("input", {
  fontSize: 16,
  width: "100%",
  height: 40,
  margin: "10px 0",
  background: "#0048D9",
  outline: "none",
  border: "none",
  borderRadius: 6,
  paddingLeft: 16,
  color: "White",
  fontWeight: "bold",
  letterSpacing: 2,
  transition: "all ease 0.3s",
  "&:hover": {
    opacity: 0.6,
    cursor: "pointer",
  },
});

export const Close = styled("p", {
  height: 18,
  width: 18,
  borderRadius: "50%",
  background: "red",
  alignSelf: "end",
  textAlign: "center",
  fontSize: 12,
  color: "white",
  transition: "all ease 0.3s",
  "&:hover": {
    opacity: 0.6,
    cursor: "pointer",
  },
});
