import React from 'react';
import { ScrollView } from 'react-native';
import { Card, Input, Button, Icon } from 'react-native-elements';
import Task from './Task';
import { connect } from 'react-redux';
import { CHANGE_INPUT_VALUE, ADD_TASK, APP_MOUNT } from '../redux/AppReducer';
class Main extends React.Component {
  componentDidMount() {
    this.props.appMount()
  }
  
  render() {
    return (
      <ScrollView contentContainerStyle={styles.scrollView}>
        <Card
          containerStyle={styles.container}
          titleStyle={styles.title}
          title="To do List"
        >
          <Input
            value={this.props.inputValue}
            onChangeText={this.props.changeInputValue}
          />
          
          <Button
            containerStyle={styles.button}
            icon={<Icon name="add" color="white" />}
            title="Add task"
            onPress={this.props.addTask}
          />
  
          <>
            {this.props.tasks.map((task, index) => (
              <Task
                key={`task#${index}`}
                index={index}
                complete={task.complete}
              >{task.name}</Task>
            ))}
          </>
        </Card>
      </ScrollView>
    )
  }
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
  },
  scrollView: {
    paddingBottom: 30
  }
}

const mapStateToProps = state => {
  const { inputValue, tasks } = state
  return { inputValue, tasks }
}

const mapDispatchToProps = dispatch => {
  return {
    changeInputValue: text => dispatch({ type: CHANGE_INPUT_VALUE, payload: text }),
    addTask: () => dispatch({ type: ADD_TASK }),
    appMount: () => dispatch({ type: APP_MOUNT }),
  }
}

export default connect(mapStateToProps, mapDispatchToProps)(Main)