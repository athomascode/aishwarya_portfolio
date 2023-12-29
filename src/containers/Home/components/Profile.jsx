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
import { FlexRow, FlexCol, WrapperContainer } from "../../../components/Div";
import { colors } from "../../../utils/colors";
import LingoLadderIcon from "../../../assets/lingoladder_icon.svg";
import Timeline from '@mui/lab/Timeline';
import TimelineItem from '@mui/lab/TimelineItem';
import TimelineSeparator from '@mui/lab/TimelineSeparator';
import TimelineConnector from '@mui/lab/TimelineConnector';
import TimelineContent from '@mui/lab/TimelineContent';
import TimelineOppositeContent from '@mui/lab/TimelineOppositeContent';
import TimelineDot from '@mui/lab/TimelineDot';
import LaptopMacIcon from '@mui/icons-material/LaptopMac';
import ArrowRightIcon from '@mui/icons-material/ArrowRight';
import Typography from '@mui/material/Typography';

function Profile(props) {
  const { skillslist, info } = props;
  const navigate = useNavigate();

  const handleClick = () => {
    navigate('/lingoladder');
  };

  return (
    <ProfileSection>
      <WrapperContainer>
        <FlexRow justifycon="center" height="100vh" align="center">
          <Col>
            <ProfileName>{info.name}</ProfileName>  
            <Heading ff="'Acme', sans-serif" mb="1rem">
              {info.role}
            </Heading>
            <ProfileSummary>{info.summary}</ProfileSummary> 
          </Col>
        </FlexRow> 
      </WrapperContainer>
      <WrapperContainer style={{background: colors.black }}>
        <FlexRow justifycon="center">
          <Heading padding="3rem" color={colors.white}>My Skills</Heading>
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
      </WrapperContainer>
      <WrapperContainer>
        <FlexRow justifycon="center">
          <Heading padding="3rem">Work Experience</Heading>
          <Timeline position="alternate">
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                align="right"
                variant="body2"
                color="text.secondary"
              >
                07/2020 – 02/2023
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <LaptopMacIcon sx={{ color: colors.orange}}/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                 Senior Software Developer
                </Typography>
                <Typography variant="subtitle1" fontWeight={"500"} gutterBottom>Cognizant Technology Solutions India Pvt. Ltd</Typography>
                <Typography variant="body2"><span style={{fontWeight: "500"}}>Crafting Efficiency: </span>Custom modules, Seamless integrations and Secure operations—Empowering Asset shipment Invoicing and Technical excellence.</Typography>
              </TimelineContent>
            </TimelineItem>
            <TimelineItem>
              <TimelineOppositeContent
                sx={{ m: 'auto 0' }}
                variant="body2"
                color="text.secondary"
              >
                12/2017 – 06/2020
              </TimelineOppositeContent>
              <TimelineSeparator>
                <TimelineConnector />
                <TimelineDot>
                  <LaptopMacIcon sx={{ color: colors.orange}}/>
                </TimelineDot>
                <TimelineConnector />
              </TimelineSeparator>
              <TimelineContent sx={{ py: '12px', px: 2 }}>
                <Typography variant="h6" component="span">
                 Software Developer
                </Typography>
                <Typography variant="subtitle1" fontWeight={"500"} gutterBottom>Cognizant Technology Solutions India Pvt. Ltd</Typography>
                <Typography variant="body2"><span style={{fontWeight: "500"}}>From Trainee to Tech Enthusiast: </span> My Journey through IT Asset Management, Automation, Hackathon Innovations and Powering Cloud VMs with Third-Party Tools!</Typography>
              </TimelineContent>
            </TimelineItem>
          </Timeline>
        </FlexRow>           
      </WrapperContainer>
      <WrapperContainer style={{background: colors.black }}>
        <FlexRow align="center" justifycon="center">
          <Heading padding="3rem" color={colors.white}>Personal Project</Heading>
          <ProjectBox>
          <SubHeading>LINGO LADDER</SubHeading>
          <IconImage src={LingoLadderIcon} alt="LingoLadderIcon" onClick={handleClick}/>
          <ProfileSummary>A real-time Japanese language learning tool</ProfileSummary>
          </ProjectBox>
        </FlexRow>
      </WrapperContainer>
    </ProfileSection> 
  )
}

export default Profile;
