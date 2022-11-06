import { styled } from "@stitches/react";

export const Form = styled("form", {
  width: "100%",
  margin: "auto",
  borderRadius: 25,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 10,
});

export const Title = styled("h2", {
  fontSize: 28,
  margin: 16,
  marginBottom: 0,
  textAlign: "center",
});

export const Label = styled("label", {
  fontSize: 16,
  fontWeight: "bold",
  alignSelf: "start",
  marginLeft: "5%",
  marginTop: 20,
  marginBottom: 10,
});

export const Input = styled("input", {
  fontSize: 16,
  width: "92%",
  height: 48,
  background: "#F8FAFC",
  outline: "none",
  border: "none",
  borderRadius: 6,
  paddingLeft: 16,
});

export const Select = styled("select", {
  fontSize: 16,
  width: "92%",
  height: 48,
  background: "#F8FAFC",
  outline: "none",
  border: "none",
  borderRadius: 6,
  paddingLeft: 16,
  option: {
    background: "White",
  },
});

export const Button = styled("input", {
  fontSize: 16,
  width: "92%",
  height: 48,
  background: "#0048D9",
  outline: "none",
  border: "none",
  borderRadius: 6,
  paddingLeft: 16,
  margin: 24,
  color: "White",
  fontWeight: "bold",
  letterSpacing: 2,
  variants: {
    isDisabled: {
      disabled: {
        opacity: 0.5,
        cursor: "progress",
      },
    },
  },
});

export const LinkButton = styled("button", {
  fontSize: 16,
  width: "90%",
  height: 32,
  background: "transparent",
  border: "none",
  fontWeight: "bold",
  transition: "all ease 0.3",
  a: {
    textDecoration: "none",
    color: "blue",
    textDecorationLine: "underline",
    "&:hover": {
      opacity: 0.5,
    },
  },
});
