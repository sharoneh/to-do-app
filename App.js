import React from 'react';
import { View } from 'react-native';
import { Card, Input, Button, Icon, Divider, Text } from 'react-native-elements';

const Task = () => {
  return (
    <>
      <Divider />

      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          paddingHorizontal: 12
        }}
      >
        <Text
          style={{
            fontSize: 17,
            marginVertical: 10
          }}
        >hello world</Text>
  
        <Button
          icon={<Icon name="close" color="white" size={15} />}
          buttonStyle={{
            backgroundColor: '#ddd',
            height: 20,
            width: 20,
            borderRadius: 10,
            padding: 0
          }}
        />
      </View>
    </>
  )
}

export default class App extends React.Component {
  render() {
    return (
      <View style={styles.container}>
        <Card
          containerStyle={{
            marginVertical: 50,
          }}
          title="To do List"
          titleStyle={{
            textTransform: 'uppercase'
          }}
        >
          <Input />
          
          <Button
            containerStyle={{
              marginVertical: 20
            }}
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
  }
}