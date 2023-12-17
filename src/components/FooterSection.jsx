import React from "react";
import styled from "styled-components";
import { colors } from "../utils/colors";

const Footer = styled.footer`
  text-align: center;
  background-color:${colors.black};
  padding: 25px;
  color: ${colors.white};
  font-size: small;
  flex-shrink: 0;
  margin-top: ${props => props.mt ? props.mt : "2rem"};
`;

function FooterSection(props) {
  const { mt } = props;

  return (
    <Footer mt={mt}>
      © Copyright 2023 by Aishwarya Thomas
    </Footer>
  )
}

export default FooterSection;