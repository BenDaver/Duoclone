import { View, Text, TextInput, Image, StyleSheet } from 'react-native'
import React,  { useState } from 'react';
import Button from '../Button';
import styles from './styles';
import WordOption from '../WordOption';


const FillInTheBlank = ( {question, onCorrect, onWrong} ) => { 
    const onButtonPress = () => {
      
    };
    
  return (
    <>
            <Text style={styles.title}>Complete the sentence</Text>
            <View style={styles.row}>

                <Text>Words words</Text>
                <View style={styles.blank}></View>
            </View>

            <View style={styles.optionsContainer}>
                <WordOption />
                <WordOption />                
            </View>
        <Button text="Check" onPress={onButtonPress} disabled={true} />

    </>

  );
};

export default FillInTheBlank