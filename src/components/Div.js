import styled from "styled-components";
import { Row, Col } from "react-bootstrap";

export const MainWrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
`;

export const FlexRow = styled(Row)`
  display: flex;
  align-items: ${props => props.align ? props.align : "unset"};
  width: ${props => props.width ? props.width : "unset"};
  margin-left: ${props => props.ml ? props.ml : "0px"};
`;

export const FlexCol = styled(Col)`
  display: flex;
  flex: 1;
  justify-content: ${props => props.justify ? props.justify : "center"};
`;
