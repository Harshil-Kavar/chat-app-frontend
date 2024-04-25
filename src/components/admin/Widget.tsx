import { Paper, Stack, Typography } from "@mui/material";
import React from "react";
import { colorMattBlack } from "../../constants/Color";

interface WidgetPropTypes {
  title: string;
  Icon?: any;
  value: any;
}

const Widget = ({ title, Icon, value }: WidgetPropTypes) => {
  return (
    <Paper
      elevation={3}
      sx={{
        padding: "2rem",
        margin: "2rem 0",
        borderRadius: "1.5rem",
        width: "20rem",
      }}
    >
      <Stack alignItems={"center"} spacing={"1rem"}>
        <Typography
          sx={{
            color: colorMattBlack,
            borderRadius: "50%",
            border: `5px solid ${colorMattBlack}`,
            width: "5rem",
            height: "5rem",
            display: "flex",
            justifyContent: "center",
            alignItems: "center",
          }}
        >
          {value}
        </Typography>
        <Stack alignItems={"center"}>
          {Icon}
          <Typography>{title}</Typography>
        </Stack>
      </Stack>
    </Paper>
  );
};

export default Widget;
