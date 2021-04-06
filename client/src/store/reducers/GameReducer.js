const initialstate = {
  boardDisplay: { 
    board: []
  },
  boardInitial: { 
    board: []
  },
  loading: false,
  errorBoard: null
}

export default function GameReducer (state = initialstate, action) {
  switch (action.type) {
    case 'board/setFetchBoard':
      return { ...state, boardDisplay: { ...state.boardDisplay, board: action.payload}}
    case 'error/setErrorBoard':
      return { ...state, errorBoard: action.payload}
    case 'loading/setLoadingBoard':
      return { ...state, loading: action.payload}
    case 'board/setFetchBoardInitial':
      return { ...state, boardInitial: { ...state.boardInitial, board: action.payload}}
    default: 
      return state
  }
}