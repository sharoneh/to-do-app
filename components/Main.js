import React from 'react';
import { Card, Input, Button, Icon } from 'react-native-elements';
import Task from './Task';
import { connect } from 'react-redux';
import { changeInputValue, addTask } from '../redux/AppReducer';

const Main = ({ inputValue, changeInputValue, tasks, addTask }) => {
  return (
    <Card
      containerStyle={styles.container}
      titleStyle={styles.title}
      title="To do List"
    >
      <Input
        value={inputValue}
        onChangeText={changeInputValue}
      />
      
      <Button
        containerStyle={styles.button}
        icon={<Icon name="add" color="white" />}
        title="Add task"
        onPress={addTask}
      />

      <>
        {tasks.map((task, index) => (
          <Task
            key={`task#${index}`}
            index={index}
            complete={task.complete}
          >{task.name}</Task>
        ))}
      </>
    </Card>
  )
}

const styles = {
  container: {
    marginVertical: 50,
  },
  title: {
    textTransform: 'uppercase'
  },
  button: {
    marginVertical: 20
  }
}

const mapStateToProps = state => {
  const { inputValue, tasks } = state
  return { inputValue, tasks }
}

export default connect(mapStateToProps, { changeInputValue, addTask })(Main)