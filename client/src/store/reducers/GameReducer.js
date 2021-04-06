const initialstate = {
  board: [],
  boardInitial: [],
  loading: false,
  errorBoard: null
}

export default function GameReducer (state = initialstate, action) {
  switch (action.type) {
    case 'board/setFetchBoard':
      return { ...state, board: action.payload}
    case 'error/setErrorBoard':
      return { ...state, errorBoard: action.payload}
    case 'loading/setLoadingBoard':
      return { ...state, loading: action.payload}
    default: 
      return state
  }
}