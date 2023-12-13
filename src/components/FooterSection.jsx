import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";

const Footer = styled.footer`
  text-align: center;
  background-color:#e62e00;
  padding: 25px;
  color: ${colors.white};
  font-size: small;
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