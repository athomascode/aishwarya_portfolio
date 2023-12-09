import React from "react";
import "../../index.css";
import { skillsList } from "./utils/utils";
import { Wrapper } from "./styleComponents/style";
import Profile from "./components/Profile";

export default function Home() {
  return (
    <Wrapper>
      <Profile list={skillsList} />        
    </Wrapper> 
  )
}