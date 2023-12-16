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
  color: ${colors.orange};
`;

export const ProfileSummary = styled.p`
  margin-left: 15%;
  margin-right: 15%;
  text-align: center;
  font-weight: 600;
`;

export const SkillBox = styled.div`
  flex: 1;
  border: 3px solid ${colors.orange};
  border-radius: 25px;
  padding: 20px;
  margin: 10px;
  text-align: center;
  background-color: ${colors.offwhite};
  cursor: pointer;
  transition: background-color 0.3s ease;

  &:hover {
    background-image: linear-gradient(90deg,${colors.orange},${colors.red});
    color: ${colors.white};
  }
`;

export const SkillSubBox =styled.div`
  border-radius: 5px;
  padding: 10px;
  margin: 10px;
  text-align: center;
  background-color: black;
  color: white;
`;
