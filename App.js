import React, { useState, useEffect } from 'react';
import { 
  View,
  Alert,
  ActivityIndicator,
 } from 'react-native'; 
import AsyncStorage from '@react-native-async-storage/async-storage';

import styles from './App.styles';

import ImageMultipleChoiceQuestions from './src/components/ImageMultipleChoiceQuestion/ImageMultipleChoiceQuestion';
import OpenEndedQuestion from './src/components/OpenEndedQuestion';
import FillInTheBlank from './src/components/FillInTheBlank';

import Header from './src/components/Header';
import questions from './assets/data/allQuestions';

const App = () => {

  const [currentQuestionIndex, setCurrentQuestionIndex] = useState(0)
  const [currentQuestion, setCurrentQuestion] = useState(questions[currentQuestionIndex]);

  const [lives, setLives] = useState(5);
  const [hasLoaded, setHasLoaded] = useState(false);

  useEffect (() => {
    if (currentQuestionIndex >= questions.length) {
      Alert.alert("U won!");
      setCurrentQuestionIndex(0);
    } else {
    setCurrentQuestion(questions[currentQuestionIndex]);
    }
  }, [currentQuestionIndex]);

  useEffect (() => {
    loadData();
  }, []);

  useEffect (() => {
    if (hasLoaded) {
    saveData();
    }
  }, [lives, currentQuestionIndex, hasLoaded]);

  const onCorrect = () => {
    setCurrentQuestionIndex(currentQuestionIndex + 1);
  };

  const restart = () => {
    setLives(5);
    setCurrentQuestionIndex(0);
  };

  const onWrong = () => {    
    if (lives <= 1) {
      Alert.alert("Game over", "Try again", [
        {
          text: 'Try again',
          onPress: restart,
        }
      ]);
    } else {
      Alert.alert("Wrong!");    
      setLives(lives - 1);
    } 
  };

  const saveData = async () => {
    await AsyncStorage.setItem('lives', lives.toString());
    await AsyncStorage.setItem('currentQuestionIndex', currentQuestionIndex.toString());

  };

  const loadData = async () => {
    const loadedLives = await AsyncStorage.getItem('lives');
    if (loadedLives) {
      setLives(parseInt(loadedLives));
    }
    const currentQuestionIndex = await AsyncStorage.getItem('currentQuestionIndex');
    if (currentQuestionIndex) {
      setCurrentQuestionIndex(parseInt(currentQuestionIndex));
    }

    setHasLoaded(true);
  };

  if (!hasLoaded) {
    return (<ActivityIndicator />)
  }


  return (
    <View style={styles.root}>
      <Header progress={currentQuestionIndex / questions.length} lives={lives}/>

      {/* {currentQuestion.type == "IMAGE_MULTIPLE_CHOICE" ? (<ImageMultipleChoiceQuestions
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong}
      />
       ) : null}
       {currentQuestion.type == "OPEN_ENDED" ? (<OpenEndedQuestion 
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong} 
        />
        ) : null} */}
        
        {currentQuestion.type == "FILL_IN_THE_BLANK" ? (<FillInTheBlank 
        question={currentQuestion}
        onCorrect={onCorrect}
        onWrong={onWrong} 
        />) : null }


    </View>
  )
};


export default App