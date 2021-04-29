import React, { useState } from 'react';
import { View, TextInput, Button, StyleSheet, Modal } from 'react-native';

const GoalInput = props => {
    const [enteredGoal, setEnteredGoal] = useState('');

    // function goalInputHandler(enteredText) {
    //   setEnteredGoal(enteredText);
    // }
    const goalInputHandler = (enteredText) => {
        setEnteredGoal(enteredText);
    }

    const addGoalHandler = () => {
        props.onAddGoal(enteredGoal);
        setEnteredGoal('');
    }

    const cancelGoalHandler = () => {
        props.onCancelGoal();
        setEnteredGoal('');
    }

    return (
        <Modal visible={props.visible} animationType="slide">
            <View style={ styles.inputContainer }>
                <TextInput 
                    placeholder="Course Goal" 
                    style={ styles.input } 
                    // not adding a parenthesis to the function call tells react native to run it only on every key stroke
                    onChangeText={ goalInputHandler }
                    value={ enteredGoal }/>
                    <View style={ styles.buttonContainer }>
                        <View style={ styles.button }><Button title="CANCEL" color="red" onPress={ cancelGoalHandler }/></View>
                        <View style={ styles.button }><Button title="ADD" onPress={ addGoalHandler }/></View>
                    </View>
            </View>
        </Modal>
    );
};

const styles = StyleSheet.create({
    inputContainer: {
        flex: 1,
        justifyContent: 'center', 
        alignItems: 'center'
    },
    input: {
        width: '80%', 
        borderBottomColor: 'black', 
        borderBottomWidth: 1, 
        padding: 10,
        marginBottom: 20
    },
    buttonContainer: {
        flexDirection: 'row',
        justifyContent: 'space-between',
        width: '60%'
    },
    button: {
        width: '40%'
    }
});

export default GoalInput;