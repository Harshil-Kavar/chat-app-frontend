import { Avatar, AvatarGroup, Box, Stack } from "@mui/material";
import React from "react";
import { transformImage } from "../../lib/Features";

interface AvatarCardPropTyeps {
  avatar: any[];
  max?: number;
}
const AvatarCard = ({ avatar, max = 4 }: AvatarCardPropTyeps) => {
  return (
    <Stack direction={"column"} spacing={0.5}>
      <AvatarGroup max={max} sx={{position:"relative"}}>
        <Box width={"5rem"} height={"3rem"}>
          {avatar.map((i, index) => {
            return (
              <Avatar
                key={Math.random() * 100}
                src={transformImage(i,100)}
                alt={`avatar ${index}`}
                sx={{
                  width: "3rem",
                  height: "3rem",
                  position: "absolute",
                  left: {
                    xs: `${0.5 + index}rem`,
                    sm: `${index}rem`,
                  },
                }}
              />
            );
          })}
        </Box>
      </AvatarGroup>
    </Stack>
  );
};

export default AvatarCard;
