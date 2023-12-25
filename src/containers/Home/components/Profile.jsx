import React from "react";
import { Container, Col, Row } from "react-bootstrap";
import { useNavigate } from 'react-router-dom';
import { Heading, SubHeading } from "../../../components/Text";
import { IconImage } from "../../../components/Img";
import { 
  ProfileSection, 
  ProfileName, 
  ProfileSummary, 
  SkillBox,
  SkillSubBox,
  ProjectBox
} from "../styleComponents/style";
import { FlexRow, FlexCol } from "../../../components/Div";
import LingoLadderIcon from "../../../assets/lingoladder_icon.svg";

function Profile(props) {
  const { skillslist, info } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/lingoladder');
  };

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
          <Heading padding="20px">MY SKILLS</Heading>
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
      <Container>
        <FlexRow align="center" justifycon="center" margin="10px">
          <Heading padding="20px">PERSONAL PROJECT</Heading>
          <ProjectBox>
          <SubHeading>Lingo Ladder</SubHeading>
          <IconImage src={LingoLadderIcon} alt="LingoLadderIcon" onClick={handleClick}/>
          <ProfileSummary>A real-time Japanese language learning tool</ProfileSummary>
          </ProjectBox>
        </FlexRow>
      </Container>
    </ProfileSection> 
  )
}

export default Profile;
