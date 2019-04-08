import AppReducer from './AppReducer';
import { createStore, applyMiddleware } from 'redux';
import createSagaMiddleware from 'redux-saga';
import { mainSaga } from './sagas';

const sagaMiddleware = createSagaMiddleware()

export default createStore(AppReducer, applyMiddleware(sagaMiddleware))

sagaMiddleware.run(mainSaga)