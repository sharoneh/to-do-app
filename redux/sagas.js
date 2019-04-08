import { takeEvery, select, put, call, delay } from 'redux-saga/effects';
import {
  APP_MOUNT,
  SET_TASKS_FROM_STORAGE,
  ADD_TASK,
  DELETE_TASK,
  COMPLETE_TASK
} from './AppReducer';
import { getTasksFromStorage, saveTasksToStorage } from './AppReducer';

function* getStorage() {
  const tasks = yield call(getTasksFromStorage)
  if (!tasks) return
  
  yield put({
    type: SET_TASKS_FROM_STORAGE,
    payload: tasks
  })
}

function* saveToStorage() {
  yield delay(500)

  const { tasks } = yield select()
  if (!tasks || !tasks.length) return

  yield call(saveTasksToStorage, tasks)
}

export function* mainSaga() {
  yield takeEvery(APP_MOUNT, getStorage)

  yield takeEvery([
    ADD_TASK,
    DELETE_TASK,
    COMPLETE_TASK
  ], saveToStorage)
}