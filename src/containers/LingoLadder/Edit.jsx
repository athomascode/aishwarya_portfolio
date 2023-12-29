import React, { useEffect } from "react";
import Button from 'react-bootstrap/Button';
import { Form, Field } from "react-final-form";
import { useNavigate, useParams } from "react-router-dom";
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

export default function Edit() {
  const { id } = useParams();
  const { wordDetails, actions } = useWords();

  useEffect(() => {
    actions.getWordDetailsforId(parseInt(id, 10));
  }, [])

  const { required } = useValidation();
  const navigate = useNavigate();

  const onSubmit = (values) => {
    actions.updateWordDetailsforId(parseInt(id, 10), values); 
    navigate('/lingoladder');
  }

  return (
    <div>
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
            initialValues={wordDetails}
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
    </div>
  )
}