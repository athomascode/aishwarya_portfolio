import React from "react";
import "../../index.css";
import { skillsList, profileInfo } from "./utils/utils";
import { Wrapper } from "./styleComponents/style";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <Wrapper>
      <Profile 
        skillslist={skillsList}
        info={profileInfo}
      />
    </Wrapper>
  )
}