import React from 'react';
import { View, Text } from 'react-native';
import { Button, Divider, Icon } from 'react-native-elements';

const Task = () => {
  return (
    <>
      <Divider />

      <View style={styles.container}>
        <Text style={styles.text}>hello world</Text>
  
        <Button
          icon={<Icon name="close" color="white" size={15} />}
          buttonStyle={styles.button}
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
    justifyContent: 'space-between',
    paddingHorizontal: 12
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
    padding: 0
  }
}

export default Task