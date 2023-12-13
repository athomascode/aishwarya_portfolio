import styled from "styled-components";
import { colors } from "../../../utils/colors";

export const Wrapper = styled.div`
  text-align: center;
  display: flex;
  flex-direction: column;
  min-height: 100vh;
  margin: 0;
`;

export const ProfileSection = styled.div`
  padding: 5px;
  flex: 1;
`;

export const ProfileName = styled.h1`
  font-weight: 700;
  font-size: 4rem;
  margin-top: 2rem;
  margin-bottom: 1rem;
  font-family: 'Satisfy', cursive;
  color: rgba(0, 126, 117, 0.904);
`;

export const ProfileSummary = styled.p`
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  font-weight: 600;
`;

export const SkillsSection = styled.div`
  margin: 40px;
  margin-left: 15%;
  margin-right: 15%;
  background:  rgba(38, 65, 63, 0.356);
  border-radius: 20px; 
`;

export const SkillsList = styled.div`
  display: flex;
  flex-wrap: wrap;
  justify-content: center;
  margin: 0 5% 0 5%;
`;

export const Skill = styled.h2`
  padding: 1rem 2rem;
  margin: 0 1.5rem 1.5rem 1.5rem;
  font-size: 1rem;
  background-color: rgba(0, 0, 0, 0.568);
  border-radius: 5px;
  font-weight: 400;
  color: ${colors.white};
`;