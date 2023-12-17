import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styled from "styled-components";
import { MdPostAdd } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { useWords } from "./hooks/useWords";
import { MainWrapper, FlexRow, FlexCol } from "../../components/Div";
import { Heading } from "../../components/Text";


const AddIcon = styled(MdPostAdd)`
  cursor: pointer;
`;

const DeleteIcon = styled(TiDelete)`
  cursor: pointer;
`;

export default function LingoLadder() {
  const { wordsList, actions } = useWords();
  const navigate = useNavigate();

  useEffect(() => {
    actions.getWordsList();
  }, [])

  return (
    <MainWrapper className="mt-5">
      <Heading ff="'Acme', sans-serif" mb="1rem">Lingo Ladder</Heading>
      <FlexRow width="95vw">
        <FlexCol justify="flex-end">
          <AddIcon size={35} onClick={() => navigate('/lingoladder/new')} />
        </FlexCol>
      </FlexRow>
      <FlexRow className="mt-4">
        <FlexCol>
          <Table responsive striped bordered hover style={{width: "90vw"}}>
            <thead>
              <tr>
                <th>#</th>
                <th>Word</th>
                <th>Hiragana/Katakana</th>
                <th>Notes</th>
                <th>Actions</th>
              </tr>
            </thead>
            <tbody>
              {(wordsList || []).map((vocabulary, index) => (
                <tr>
                  <td>{vocabulary.id}</td>
                  <td>{vocabulary.word}</td>
                  <td>{vocabulary.writing}</td>
                  <td><p style={{ whiteSpace: 'pre-line' }}>{vocabulary.notes}</p></td>
                  <td><DeleteIcon size={20} onClick={() => actions.deleteWordDetails(vocabulary.id)} /></td>       
                </tr>
              ))}    
            </tbody>
          </Table> 
        </FlexCol>
      </FlexRow>
    </MainWrapper>
  )
}