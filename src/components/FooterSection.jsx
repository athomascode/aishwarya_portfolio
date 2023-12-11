import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";

const Footer = styled.footer`
  text-align: center;
  background-color:rgba(0,0,0, 0.62);
  padding: 25px;
  color: ${colors.cornsilk};
  font-size: x-small;
  flex-shrink: 0;
`;

function FooterSection() {
  return (
    <Footer>
      © Copyright 2023 by Aishwarya Thomas
    </Footer>
  )
}

export default FooterSection;