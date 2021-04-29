import { StatusBar } from 'expo-status-bar';
import React, { useState } from 'react';
import { StyleSheet, View, TextInput, Button, Text, ScrollView, FlatList } from 'react-native';
import GoalItem from './components/GoalItem';
import GoalInput from './components/GoalInput';

export default function App() {
  const [courseGoals, setCourseGoals] = useState([]);
  const [isAddMode, setIsAddMode] = useState(false);

  const addGoalHandler = goalName => {
    // this way, it guarantees the latest list of goals
    setCourseGoals(currentGoals => [...currentGoals, { id: Math.random().toString(), value: goalName }]);
    setIsAddMode(false);
  }

  const removeGoalHandler = goalId => {
    setCourseGoals(currentGoals => {
      return currentGoals.filter((goal) => goal.id !== goalId);
    });
  }

  const cancelGoalHandler = () => {
    setIsAddMode(false);
  }

  return (
    <View style={ styles.screen }>
      <Button title="Add New Goal" onPress={() => setIsAddMode(true)}/>
      {/* input area  */}
      <GoalInput visible={isAddMode} onAddGoal={addGoalHandler} onCancelGoal={cancelGoalHandler}/>
      {/* lists of goals */}
      <FlatList 
        data={courseGoals}
        renderItem={itemData => <GoalItem id={itemData.item.id} onDelete={removeGoalHandler} value={itemData.item.value}/>}/>
    </View>
  );
}

const styles = StyleSheet.create({
  // name of the javascript Object, it can be any name
  screen: {
    padding: 50
  }
});
