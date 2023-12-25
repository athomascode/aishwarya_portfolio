import { useState } from "react";

export const useWords = () => {
  const [wordsList, setWordsList] = useState([]);
  const [wordDetails, setWordDetails] = useState({});

  const addWordDetails = (values) => {
    const currentWordsList = JSON.parse(localStorage.getItem('wordsListStore')) || [];
    const wordsCount = currentWordsList.length;
    values.id = wordsCount+1;
    currentWordsList.push(values);
    localStorage.setItem('wordsListStore', JSON.stringify(currentWordsList));
  }

  const getWordsList = () => {
    const currentWordsList = JSON.parse(localStorage.getItem('wordsListStore')) || [];
    setWordsList(currentWordsList);
  }

  const deleteWordDetails = (id) => {
    const currentWordsList = JSON.parse(localStorage.getItem('wordsListStore')) || [];
    let newWordsList = currentWordsList.filter(value => value.id !== id);
    for(let i=0;  i < newWordsList.length; i++) {
      newWordsList[i].id = i+1;
    }
    localStorage.setItem('wordsListStore', JSON.stringify(newWordsList));
    setWordsList(newWordsList);
  }

  const getWordDetailsforId = (id) => {
    const currentWordsList = JSON.parse(localStorage.getItem('wordsListStore')) || [];
    const selectedWordDetails = currentWordsList.find(value => value.id === id);
    setWordDetails(selectedWordDetails);
  }

  const updateWordDetailsforId = (id, values) => {
    const currentWordsList = JSON.parse(localStorage.getItem('wordsListStore')) || [];
    const updatedWordsList = currentWordsList.map(item => {
      if(item.id === id) {
        return { ...item, ...values};
      }
      return item;
    });
    localStorage.setItem('wordsListStore', JSON.stringify(updatedWordsList));
  }

  return {
    wordsList,
    wordDetails,
    actions: {
      addWordDetails,
      getWordsList,
      deleteWordDetails,
      getWordDetailsforId,
      updateWordDetailsforId,
    }
  }
};