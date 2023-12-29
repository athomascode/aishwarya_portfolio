import React from "react";
import Button from 'react-bootstrap/Button';
import { Form, Field } from "react-final-form";
import { useNavigate } from 'react-router-dom';
import { IoArrowBackCircleSharp } from "react-icons/io5";
import styled from "styled-components";
import Input from "../../components/Input";
import { useValidation } from "../../utils/validate";
import { useWords } from "./hooks/useWords";
import { MainWrapper, FlexRow, FlexCol } from "../../components/Div";
import { Heading } from "../../components/Text";

const BackIcon = styled(IoArrowBackCircleSharp)`
  cursor: pointer;
`;

export default function Add() {
  const { required } = useValidation();
  const { actions } = useWords();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    actions.addWordDetails(values); 
    navigate('/lingoladder');
  }

  return (
    <MainWrapper className="mt-5">
      <Heading mb="1rem">Lingo Ladder</Heading>
      <FlexRow style={{marginLeft: "2rem"}}>
        <FlexCol justify="flex-start">
          <BackIcon size={30} onClick={() => navigate('/lingoladder')} />
        </FlexCol>
      </FlexRow>
      <FlexRow className="mt-4">
        <FlexCol justify="center">
          <Form
            onSubmit={onSubmit}
            render={({handleSubmit, form, submitting, pristine, values}) => (
              <form onSubmit={handleSubmit}>
                <div>
                  <Field
                    name="word"
                    component={Input}
                    type="text"
                    placeholder="あなた"
                    label="Japanese Word"
                    validate={required}
                  />
                </div>
                <div>
                  <Field
                    name="meaning"
                    component={Input}
                    type="text"
                    placeholder="You"
                    label="Meaning"
                    validate={required}
                  />
                </div>             
                <div>
                  <Field
                    name="notes"
                    component={Input}
                    type="textarea"
                    placeholder="あなたはだれですか"
                    label="Notes"
                  />
                </div>
                <div className="mt-3">
                  <Button variant="primary" type="submit" disabled={submitting || pristine} style={{padding: "0.5rem 4rem"}}>
                    Save
                  </Button>
                </div>
              </form>
            )}>
          </Form>
        </FlexCol>
      </FlexRow>   
    </MainWrapper>
  )
}