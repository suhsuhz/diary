import { all } from 'redux-saga/effects';
import { saga as diarySaga } from './diarySaga';

export default function* rootSaga() {
    yield all([
        diarySaga()
    ]);
}