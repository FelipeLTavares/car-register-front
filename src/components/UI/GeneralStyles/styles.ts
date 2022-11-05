import { styled } from "@stitches/react";

export const Form = styled("form", {
  width: "100%",
  margin: "auto",
  borderRadius: 25,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  paddingTop: 10,
  paddingBottom: 16,
});

export const Title = styled("h2", {
  fontSize: 28,
  margin: 16,
  textAlign: "center",
});

export const Label = styled("label", {
  fontSize: 16,
  fontWeight: "bold",
  alignSelf: "start",
  marginLeft: "5%",
  marginTop: 30,
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
  marginTop: 50,
  color: "White",
  fontWeight: "bold",
  letterSpacing: 2,
});
