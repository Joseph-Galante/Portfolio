import React from "react";
import Box from "@mui/material/Box";
import Chip from "../Chip";
import { FLEX_HORIZONTAL_LIST, HARD_SKILLS } from "../../shared/constants";

type Props = {
  skills: string[],
  sort?: boolean,
  mt?: string | number,
};

const SkillSet = ({ skills, sort = true, mt = 3 }: Props) => (
  <Box {...FLEX_HORIZONTAL_LIST} columnGap={1} rowGap={1.5} mt={mt}>
    {(sort ? skills.sort() : skills).map((skill) => (
      <Chip
        key={`scene-list-${skill}`}
        label={skill}
        color={HARD_SKILLS.includes(skill) ? "secondary" : "tertiary"}
      />
    ))}
  </Box>
);

export default SkillSet;
