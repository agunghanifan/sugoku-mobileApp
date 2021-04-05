export function setFetchBoard (payload) {
  return { type: 'board/setFetchBoard', payload}
}
export function setLoadingBoard (payload) {
  return { type: 'loading/setLoadingBoard', payload}
}
export function setErrorBoard (payload) {
  return { type: 'error/setErrorBoard', payload}
}

export function fetchBoard () {
  return (dispatch) => {
    console.log("masuk fetch")
    dispatch(setLoadingBoard(true))
    fetch('https://sugoku.herokuapp.com/board')
      .then(res => res.json())
      .then(board => {
        console.log(board.board)
        dispatch(setFetchBoard(board.board))
      })
      .catch(err => dispatch(setErrorBoard(err)))
      .finally(() => dispatch(setLoadingBoard(false)))
  }
}
