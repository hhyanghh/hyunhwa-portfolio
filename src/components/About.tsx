import React from "react";
import CustomContainer from "./common/CustomContainer";
import { grey } from "@mui/material/colors";

const About = () => {
  return (
    <CustomContainer bgColor={grey[400]} containerColor={grey[600]}>
      <div>About</div>
    </CustomContainer>
  );
};

export default About;
