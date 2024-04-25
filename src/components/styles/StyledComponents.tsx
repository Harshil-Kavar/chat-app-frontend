import { styled } from "@mui/material";
import { Link as LinkComponent } from "react-router-dom";
import { colorGray, colorMattBlack } from "../../constants/Color";

export const VisuallyHiddenInput = styled("input")({
  border: 0,
  clip: "rect(0 0 0 0)",
  height: 1,
  margin: -1,
  overflow: "hidden",
  padding: 0,
  position: "absolute",
  whiteSpace: "nowrap",
  width: 1,
});

export const MasterInputBox = styled("input")({
  width: "100%",
  height: "100%",
  border: "none",
  outline: "none",
  padding: "0 3rem",
  borderRadius: "1.5rem",
  backgroundColor: colorGray,
});

export const Link = styled(LinkComponent)({
  textDecoration: "none",
  color: "black",
  padding: "1rem",
  whiteSpace: "nowrap",
  ":hover": {
    backgroundColor: "rgba(0,0,0,0.1)",
  },
});
export const AdminLinkComponent = styled(LinkComponent)({
  textDecoration: "none",
  borderRadius: "2rem",
  color: "black",
  padding: "1rem 2rem",
  whiteSpace: "nowrap",
  ":hover": {
    color: "rgba(0,0,0,0.54)",
  },
});

export const SearchField = styled("input")({
  padding: "1rem 2rem",
  width: "20vmax",
  border: "none",
  outline: "none",
  borderRadius: "1.5rem",
  backgroundColor: colorGray,
  fontSize: "1.1rem",
});

export const CurveButton = styled("button")({
  borderRadius: "1.5rem",
  padding: "1rem 2rem",
  border: "none",
  outline: "none",
  cursor:"pointer",
  width: "20vmax",
  backgroundColor: colorMattBlack,
  color:"white",
  fontSize: "1.1rem",
  ":hover":{
    backgroundColor:"rgba(0,0,0,0.8)"
  }
});
