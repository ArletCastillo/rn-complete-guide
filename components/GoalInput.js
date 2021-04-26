import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    // function goalInputHandler(enteredText) {
    //   setEnteredGoal(enteredText);
    // }
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    return (
    <View style={ styles.inputContainer }>
        <TextInput 
          placeholder="Course Goal" 
          style={ styles.input } 
          // not adding a parenthesis to the function call tells react native to run it only on every key stroke
          onChangeText={ goalInputHandler }
          value={ enteredGoal }/>
        <Button title="ADD" onPress={ props.onAddGoal.bind(this, enteredGoal) }/>
    </View>);
};

const styles = StyleSheet.create({
    inputContainer: {
        flexDirection:'row', 
        justifyContent:'space-between', 
        alignItems:'center'
    },
    input: {
        width:'80%', 
        borderBottomColor:'black', 
        borderBottomWidth:1, 
        padding:10
    }
});

export default GoalInput;