import { put, takeLeading } from 'redux-saga/effects';
import {
    resetWritingDiary,
    resetWritingSagaRequested,
    resetWritingSagaSucceeded,
    resetWritingSagaFailed
} from '../slices/diarySlice';

function* resetDiarySaga() {
    try {
        yield put(resetWritingDiary());
        yield put(resetWritingSagaSucceeded('seecceeded'));
    } catch (error) {
        yield put(resetWritingSagaFailed(error));
    }
}

export function* saga() {
    yield takeLeading(resetWritingSagaRequested, resetDiarySaga);
}