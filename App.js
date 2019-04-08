import React from 'react';
import { View } from 'react-native';
import Main from './components/Main';
import { Provider } from 'react-redux';
import store from './redux/store';

export default class App extends React.Component {
  render() {
    return (
      <Provider store={store}>
        <View style={styles.container}>
          <Main />
        </View>
      </Provider>
    );
  }
}

const styles = {
  container: {
    backgroundColor: '#efefef',
    flex: 1
  }
}