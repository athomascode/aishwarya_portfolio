import React from "react";
import { skillsList, profileInfo } from "./utils/utils";
import { MainWrapper } from "../../components/Div";
import { BackgroundWrapper } from "./styleComponents/style";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <MainWrapper>
      <BackgroundWrapper>
        <Profile 
          skillslist={skillsList}
          info={profileInfo}
        />
      </BackgroundWrapper>
    </MainWrapper>
  )
}