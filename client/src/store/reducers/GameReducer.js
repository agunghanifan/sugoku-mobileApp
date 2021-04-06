const initialstate = {
  boardDisplay: {
    board: []
  },
  boardInitial: {
    board: []
  },
  status: '',
  loading: false,
  errorBoard: null,
  dataDifficulty: [
    { 
      difficulty: 'easy' 
    },
    { 
      difficulty: 'medium'
    },
    {
      difficulty: 'hard'
    },
    { 
      difficulty: 'random' 
    }
  ]
}

export default function GameReducer (state = initialstate, action) {
  switch (action.type) {
    case 'board/setFetchBoard':
      console.log(action.payload)
      return { ...state, boardDisplay: { ...state.boardDisplay, board: action.payload}}
    case 'error/setErrorBoard':
      return { ...state, errorBoard: action.payload}
    case 'loading/setLoadingBoard':
      return { ...state, loading: action.payload}
    case 'board/setFetchBoardInitial':
      return { ...state, boardInitial: { ...state.boardDisplay, board: action.payload}}
    case 'status/setStatusBoard':
      return { ...state, status: action.payload}
    default: 
      return state
  }
}