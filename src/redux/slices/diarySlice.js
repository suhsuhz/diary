import { createSlice } from "@reduxjs/toolkit";

const initialState = {
    writingDiary: {
        id: '',
        emotion: '',
        date: '',
        substance: ''
    },
    selectedDiary: {
        // id: '',
        // emotion: '',
        // date: '',
        // substance: ''
    },
    diaryList: [
        //{
        // id: number
        // date: YYYY-mm-dd
        // substance: text
        // emotion: number
        //}
    ],
    lastId: 0, // unique id를 임시로 만들기 위해서

    // saga
    resetDiarySaga: {
        pending: false,
        data: null,
        error: null
    }
};

const diarySlice = createSlice({
    name: 'diary',
    initialState,
    reducers: {
        createDiary: (state, action) => {
            const diaryData = action.payload;
            state.diaryList.push({
                id: state.lastId + 1,
                emotion: diaryData.emotion,
                date: diaryData.date,
                substance: diaryData.substance
            });
            state.lastId++;
        },
        updateDiary: (state, action) => {
            const diaryData = action.payload;

            /* const selectedDiaryIndex = state.diaryList.indexOf(state.diaryList.filter(
                (diary) => diary.id == diaryData.id
            )); */

            return {
                ...state,
                diaryList: state.diaryList.map(
                    (diary) => diary.id == diaryData.id ? {
                        ...diaryData
                    } : diary
                )
                //diaryList,[selectedDiaryIndex]: diaryData
            }
        },
        deleteDiary: (state, action) => {
            const targetDiaryId = action.payload;
            return {
                ...state,
                diaryList: state.diaryList.filter((diary) => {
                    return diary.id !== targetDiaryId;
                })
            }
        },
        updateSelectedDiary: (state, action) => {
            const selectedDiaryId = action.payload;

            const diaryData = state.diaryList.filter((diary) =>
                diary.id == selectedDiaryId
            );
            state.selectedDiary = diaryData[0];
        },
        updateWritingDiary: (state, action) => {
            state.writingDiary.id = state.selectedDiary.id;
            state.writingDiary.emotion = state.selectedDiary.emotion;
            state.writingDiary.date = state.selectedDiary.date;
            state.writingDiary.substance = state.selectedDiary.substance;
        },
        resetSelectedDiary: (state, action) => {
            state.selectedDiary = {};
        },
        selectedEmotion: (state, action) => {
            state.writingDiary.emotion = action.payload;
        },
        selectedDate: (state, action) => {
            state.writingDiary.date = action.payload;
        },
        resetWritingDiary: (state, action) => {
            state.writingDiary.id = '';
            state.writingDiary.emotion = '';
            state.writingDiary.date = '';
            state.writingDiary.substance = '';
        },
        // resetDiaryWritingSaga
        resetWritingSagaRequested: (state, action) => {
            state.resetDiarySaga = {
                ...state.resetDiarySaga,
                pending: true,
                data: null,
                error: null
            }
        },
        resetWritingSagaSucceeded: (state, action) => {
            state.resetDiarySaga = {
                ...state.resetDiarySaga,
                pending: false,
                data: action.payload
            }

        },
        resetWritingSagaFailed: (state, action) => {
            state.resetDiarySaga = {
                ...state.resetDiarySaga,
                pending: false,
                error: action.payload
            }
        },
    }
});

export const {
    createDiary,
    updateDiary,
    deleteDiary,
    updateSelectedDiary,
    updateWritingDiary,
    resetSelectedDiary,
    selectedEmotion,
    selectedDate,
    resetWritingDiary,
    // resetDiaryWritingSaga
    resetWritingSagaRequested,
    resetWritingSagaSucceeded,
    resetWritingSagaFailed
} = diarySlice.actions;

export default diarySlice.reducer;