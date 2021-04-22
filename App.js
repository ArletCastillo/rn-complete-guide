import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text } from 'react-native';

export default function App() {
  const [enteredGoal, setEnteredGoal] = useState('');
  const [courseGoals, setCourseGoals] = useState([]);

  // function goalInputHandler(enteredText) {
  //   setEnteredGoal(enteredText);
  // }
  const goalInputHandler = (enteredText) => {
    setEnteredGoal(enteredText);
  }

  const addGoalHandler = () => {
    // this way, it guarantees the latest list of goals
    setCourseGoals(currentGoals => [...currentGoals, enteredGoal]);
  }

  return (
    <View style={ styles.screen }>
      {/* input area  */}
      <View style={ styles.inputContainer }>
        <TextInput 
          placeholder="Course Goal" 
          style={ styles.input } 
          // not adding a parenthesis to the function call tells react native to run it only on every key stroke
          onChangeText={ goalInputHandler }
          value={ enteredGoal }/>
        <Button title="ADD" onPress={ addGoalHandler }/>
      </View>
      {/* lists of goals */}
      <View>
        {courseGoals.map((goal) => (
          <View key={goal} style={styles.listItem}>
            <Text>{goal}</Text>
          </View>
        ))}
      </View>
    </View>
  );
}

const styles = StyleSheet.create({
  // name of the javascript Object, it can be any name
  screen: {
    padding: 50
  },
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
  },
  listItem: {
    padding: 10,
    marginVertical: 10,
    backgroundColor: '#ccc',
    borderColor: 'black',
    borderWidth: 1
  }
});
