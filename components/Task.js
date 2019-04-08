import React from 'react';
import { View, Text } from 'react-native';
import { Button, Divider, Icon, CheckBox } from 'react-native-elements';
import { connect } from 'react-redux';
import { DELETE_TASK, COMPLETE_TASK } from '../redux/AppReducer';

const Task = ({ children, index, deleteTask, complete, completeTask }) => {
  return (
    <>
      <Divider />

      <View style={styles.container}>
        <CheckBox
          checked={complete}
          onPress={() => completeTask(index)}
        />

        <Text
          style={{
            ...styles.text,
            textDecorationLine: complete ? 'line-through' : 'none'
          }}
        >{children}</Text>
  
        <Button
          icon={<Icon name="close" color="white" size={15} />}
          buttonStyle={styles.button}
          containerStyle={styles.buttonContainer}
          onPress={() => deleteTask(index)}
        />
      </View>
    </>
  )
}

const styles = {
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'flex-start',
    position: 'relative',
    width: '100%'
  },
  text: {
    fontSize: 17,
    marginVertical: 10
  },
  button: {
    backgroundColor: '#ddd',
    height: 20,
    width: 20,
    borderRadius: 10,
    padding: 0,
    marginRight: 12
  },
  buttonContainer: {
    position: 'absolute',
    right: 0
  }
}

const mapDispatchToProps = dispatch => {
  return {
    deleteTask: index => dispatch({ type: DELETE_TASK, payload: index }),
    completeTask: index => dispatch({ type: COMPLETE_TASK, payload: index })
  }
}

export default connect(null, mapDispatchToProps)(Task)