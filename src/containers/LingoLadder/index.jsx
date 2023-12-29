import React, { useEffect } from "react";
import { useNavigate } from 'react-router-dom';
import Table from 'react-bootstrap/Table';
import styled from "styled-components";
import { MdPostAdd } from "react-icons/md";
import { TiDelete } from "react-icons/ti";
import { FaRegEdit } from "react-icons/fa";
import { useWords } from "./hooks/useWords";
import { MainWrapper, FlexRow, FlexCol } from "../../components/Div";
import { Heading, SubHeading } from "../../components/Text";


const AddIcon = styled(MdPostAdd)`
  cursor: pointer;
`;

const EditIcon = styled(FaRegEdit)`
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
      <Heading mb="1rem">Lingo Ladder</Heading>
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
                <th><SubHeading mt="20px">#</SubHeading></th>
                <th><SubHeading mt="20px">Japanese Word</SubHeading></th>
                <th><SubHeading mt="20px">Meaning</SubHeading></th>
                <th><SubHeading mt="20px">Notes</SubHeading></th>
                <th><SubHeading mt="20px">Actions</SubHeading></th>
              </tr>
            </thead>
            <tbody>
            { wordsList.length === 0 ? (
              <tr key="no-records">
                <td colSpan={6}><SubHeading mt="20px">There are no records to display !!</SubHeading></td>
              </tr>
            ) : (
              (wordsList || []).map((vocabulary, index) => (
              <tr key={vocabulary.id}>
                <td>{vocabulary.id}</td>
                <td>{vocabulary.word}</td>
                <td>{vocabulary.meaning}</td>
                <td><p style={{ whiteSpace: 'pre-line' }}>{vocabulary.notes}</p></td>
                <td>
                  <FlexRow>
                    <FlexCol justify="space-evenly">
                      <EditIcon size={20}  onClick={() => navigate(`/lingoladder/edit/${vocabulary.id}`)}/>
                      <DeleteIcon size={23} onClick={() => actions.deleteWordDetails(vocabulary.id)} />
                    </FlexCol>
                  </FlexRow>
                  </td>       
              </tr>
              ))
            )}
            </tbody>
          </Table> 
        </FlexCol>
      </FlexRow>
    </MainWrapper>
  )
}