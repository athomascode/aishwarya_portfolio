import styled from "styled-components";
import { Row, Col, Container } from "react-bootstrap";

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
  justify-content: ${props => props.justifycon ? props.justifycon : "unset"};
  width: ${props => props.width ? props.width : "unset"};
  height: ${props => props.height ? props.height : "unset"};
  margin: ${props => props.margin ? props.margin : "unset"};
`;

export const FlexCol = styled(Col)`
  display: flex;
  flex: 1;
  justify-content: ${props => props.justify ? props.justify : "center"};
`;

export const WrapperContainer = styled(Container)`
  min-height: ${props => props.height ? props.height : "100vh"};
  align-items: ${props => props.align ? props.align : "center"};
  justify-content: ${props => props.justifycon ? props.justifycon : "center"};
  max-width: 100vw;
  display: flex;
  padding: 2rem 0rem;
`;
