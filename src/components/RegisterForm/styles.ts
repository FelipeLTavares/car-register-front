import { styled } from "@stitches/react";

export const Container = styled("div", {
  width: 500,
  minHeight: 500,
  margin: "auto",
});

export const Form = styled("form", {
  margin: "auto",
  borderRadius: 25,
  display: "flex",
  flexDirection: "column",
  alignItems: "center",
  border: "1px dashed blue",
  paddingTop: 10,
  paddingBottom: 40,
});

export const Title = styled("h2", {
  fontSize: 32,
  margin: 32,
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

export const AgeSelect = styled("select", {
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

export const Submit = styled("input", {
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
