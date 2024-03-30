import { createSlice } from '@reduxjs/toolkit';
import type { PayloadAction } from '@reduxjs/toolkit';
import { IQuestion, QUESTIONS } from '../../questions/questions';

interface ITeam {
  id: 1 | 2 | 3 | 4 | 5;
  name: string;
  score: number;
}

interface initialState {
  gameState: 'start' | 'teams' | 'question' | 'final';
  teams: Array<ITeam>,
  questions: Array<IQuestion>,
  intermediate: boolean,
  questionNumber: number;
}

const initialState: initialState = {
  gameState: 'start',
  teams: [
    {
      id: 1,
      name: '',
      score: 0,
    },
    {
      id: 2,
      name: '',
      score: 0,
    },
    {
      id: 3,
      name: '',
      score: 0,
    },
    {
      id: 4,
      name: '',
      score: 0,
    },
    {
      id: 5,
      name: '',
      score: 0,
    },
  ],
  questions: QUESTIONS,
  intermediate: false,
  questionNumber: 0
}

export const gameSlice = createSlice({
  name: 'gameSlice',
  initialState,
  reducers: {
    setGameState: (state, action: PayloadAction<'start' | 'teams' | 'question' | 'final'>) => {
      state.gameState = action.payload
    },
    setIntermediate: (state) => {
      state.intermediate = !state.intermediate
    },
    setTeamsName: (state, action: PayloadAction<ITeam>) => {
      state.teams[action.payload.id].name = action.payload.name
    },
    setTeamsScore: (state, action: PayloadAction<ITeam>) => {
      state.teams[action.payload.id].score = action.payload.score
    },
    setQuestionNumber: (state) => {
      state.intermediate = false
      state.questionNumber = state.questionNumber + 1
    },
  }
});

export const { setGameState, setTeamsName, setTeamsScore, setIntermediate, setQuestionNumber } = gameSlice.actions;
export default gameSlice.reducer;