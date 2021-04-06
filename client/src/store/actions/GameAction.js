export function setFetchBoard (payload) {
  return { type: 'board/setFetchBoard', payload}
}
export function setLoadingBoard (payload) {
  return { type: 'loading/setLoadingBoard', payload}
}
export function setErrorBoard (payload) {
  return { type: 'error/setErrorBoard', payload}
}
export function setFetchBoardInitial (payload) {
  return { type: 'board/setFetchBoardInitial', payload}
}

export function fetchBoard () {
  return (dispatch) => {
    dispatch(setLoadingBoard(true))
    fetch('https://sugoku.herokuapp.com/board?difficulty=easy')
      .then(res => res.json())
      .then(board => {
        dispatch(setFetchBoard(board.board))
        dispatch(setFetchBoardInitial(board.board))
      })
      .catch(err => dispatch(setErrorBoard(err)))
      .finally(() => dispatch(setLoadingBoard(false)))
  }
}

export function solveSelfBoard (payload) {
  return (dispatch) => {
    const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
    const encodeParams = (params) => 
      Object.keys(params)
      .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
      .join('&');

    dispatch(setLoadingBoard(true))
    fetch('https://sugoku.herokuapp.com/solve', {
      method: 'POST',
      body: encodeParams(payload),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(res => res.json())
      .then(data => {
        console.log(data)
        dispatch(setFetchBoard(data.solution))
      })
      .catch(err => dispatch(setErrorBoard(err)))
      .finally(() => dispatch(setLoadingBoard(false)))
  }
}

export function submitBoard (payload) {
  return (dispatch) => {
    dispatch(setLoadingBoard(true))
    fetch()
  }
}
