import styled from "styled-components";

export const Heading = styled.h1`
  font-family: ${props => props.ff ? props.ff : "unset"};
  font-weight: ${props => props.fw ? props.fw : "700"};
  font-size: ${props => props.fs ? props.fs : "2rem"};
  margin-bottom: ${props => props.mb ? props.mb : "0px"};
  padding: ${props => props.padding ? props.padding : "0px"};
  text-align: ${props => props.textAlign ? props.textAlign : "center"};
  color: ${props => props.color ? props.color : "unset"};
`;


export const SubHeading = styled.h4`
  font-family: ${props => props.ff ? props.ff : "unset"};
  font-weight: ${props => props.fw ? props.fw : "600"};
  font-size: ${props => props.fs ? props.fs : "1.1rem"};
  margin-bottom: ${props => props.mb ? props.mb : "20px"};
  padding: ${props => props.padding ? props.padding : "0px"};
  text-align: ${props => props.textAlign ? props.textAlign : "center"};
  color: ${props => props.color ? props.color : "unset"};
  margin-top: ${props => props.mt ? props.mt : "unset"};
`;