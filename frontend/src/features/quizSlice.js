import { createSlice } from '@reduxjs/toolkit';

const initialState = {
  quizzes: [],
  currentQuizId: null,
  responses: {},
};

const quizSlice = createSlice({
  name: 'quiz',
  initialState,
  reducers: {
    fetchQuizzesSuccess: (state, action) => {
      state.quizzes = action.payload;
    },
    startQuiz: (state, action) => {
      state.currentQuizId = action.payload;
      state.responses = {};
    },
    submitAnswer: (state, action) => {
      const { questionId, selectedOption } = action.payload;
      state.responses = {
        ...state.responses,
        [questionId]: selectedOption,
      };
    },
  },
});

export const { fetchQuizzesSuccess, startQuiz, submitAnswer } = quizSlice.actions;
export default quizSlice.reducer;
