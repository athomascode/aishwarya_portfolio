import { useState } from "react";

export const useWords = () => {
  const [wordsList, setWordsList] = useState([]);

  const addWordDetails = (values) => {
    const currentWordDetails = JSON.parse(localStorage.getItem('wordDetails')) || [];
    const wordsCount = currentWordDetails.length;
    values.id = wordsCount+1;
    currentWordDetails.push(values);
    localStorage.setItem('wordDetails', JSON.stringify(currentWordDetails));
  }

  const getWordsList = () => {
    const currentWordDetails = JSON.parse(localStorage.getItem('wordDetails')) || [];
    setWordsList(currentWordDetails);
  }

  const deleteWordDetails = (id) => {
    const currentWordDetails = JSON.parse(localStorage.getItem('wordDetails')) || [];
    let newWordList = currentWordDetails.filter(value => value.id !== id);
    for(let i=0;  i < newWordList.length; i++) {
      newWordList[i].id = i+1;
    }
    localStorage.setItem('wordDetails', JSON.stringify(newWordList));
    setWordsList(newWordList);
  }

  return {
    wordsList,
    actions: {
      addWordDetails,
      getWordsList,
      deleteWordDetails,
    }
  }
};