import React from "react";
import { Col, Row } from "react-bootstrap";
import { Heading } from "../../../components/Text";
import { 
  ProfileSection, 
  ProfileName, 
  ProfileSummary, 
  SkillsSection, 
  SkillsList, 
  Skill, 
} from "../styleComponents/style";

function Profile(props) {
  const { list } = props;
  return (
    <ProfileSection>
      <Row className="justify-content-center">
        <Col>
          <ProfileName>
            Hi , I'm Aishwarya Thomas.
          </ProfileName>  
          <Heading ff="'Acme', sans-serif">
            SOFTWARE DEVELOPER
          </Heading>  
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <ProfileSummary>
            .Net Web Developer with 5+ years experience in C#, MSSQL, JavaScript, HTML and CSS in Agile environments
            and with all stages of development life cycle of dynamic web projects.
          </ProfileSummary>
        </Col>
      </Row>
      <Row className="justify-content-center">
        <Col>
          <SkillsSection>
            <Heading fw="700" padding="20px" color="#000000b9">My Skills</Heading>
            <SkillsList>
              {list.map((skill, index) => (
              <Skill key={`${index}-${skill}`}>{skill}</Skill>
              ))}
            </SkillsList>
          </SkillsSection>
        </Col>
      </Row>
    </ProfileSection> 
  )
}

export default Profile;