import React from 'react';
import { View } from 'react-native';
import { Card, Input, Button, Icon } from 'react-native-elements';
import Task from './components/Task';

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          containerStyle={styles.card.container}
          titleStyle={styles.card.title}
          title="To do List"
        >
          <Input />
          
          <Button
            containerStyle={styles.button}
            icon={<Icon name="add" color="white" />}
            title="Add task"
          />

          <Task />
          <Task />
          <Task />
          <Task />
        </Card>
      </View>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#efefef',
    flex: 1
  },
  card: {
    container: {
      marginVertical: 50,
    },
    title: {
      textTransform: 'uppercase'
    }
  },
  button: {
    marginVertical: 20
  }
}