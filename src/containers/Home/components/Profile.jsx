import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { Heading, SubHeading } from "../../../components/Text";
import { 
  ProfileSection, 
  ProfileName, 
  ProfileSummary, 
  SkillBox,
  SkillSubBox
} from "../styleComponents/style";
import { FlexRow, FlexCol } from "../../../components/Div";

function Profile(props) {
  const { skillslist, info } = props;
  return (
    <ProfileSection>
      <Row className="justify-content-center">
        <Col>
          <ProfileName>{info.name}</ProfileName>  
          <Heading ff="'Acme', sans-serif" mb="1rem">
            {info.role}
          </Heading>  
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <ProfileSummary>{info.summary}</ProfileSummary>
        </Col>
      </Row>
      <Container>
        <FlexRow>
          <Heading padding="20px">My Skills</Heading>
          {skillslist.map((category,index) => (
            <FlexCol xs={12} md={3}>
              <SkillBox>
                <SubHeading key={`${index}`-`${category}`}>{category.name}</SubHeading>
                {category.skills.map((skill,index) => (
                  <SkillSubBox>
                    <SubHeading fw="400" fs="0.9rem" mb="0px" key={`${index}`-`${skill}`}>
                      {skill}
                    </SubHeading>
                  </SkillSubBox>
                ))}
              </SkillBox>
            </FlexCol>
          ))}
        </FlexRow>
      </Container>
    </ProfileSection> 
  )
}

export default Profile;
