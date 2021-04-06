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
export function setStatusBoard (payload) {
  return { type: 'status/setStatusBoard', payload}
}

export function fetchBoard (payload) {
  return (dispatch) => {
    console.log('masuk fetchboard')
    console.log(payload)
    dispatch(setLoadingBoard(true))
    fetch(`https://sugoku.herokuapp.com/board?difficulty=${payload}`)
      .then(res => res.json())
      .then(board => {
        console.log(board.board, 'ini hasil fetchboard')
        dispatch(setErrorBoard(null))
        dispatch(setStatusBoard(''))
        dispatch(setFetchBoard(board.board))
        dispatch(setFetchBoardInitial(board.board))
      })
      .catch(err => {
        console.log(err)
        dispatch(setErrorBoard(err))
      })
      .finally(() => dispatch(setLoadingBoard(false)))
  }
}

const encodeBoard = (board) => board.reduce((result, row, i) => result + `%5B${encodeURIComponent(row)}%5D${i === board.length -1 ? '' : '%2C'}`, '')
const encodeParams = (params) => 
  Object.keys(params)
    .map(key => key + '=' + `%5B${encodeBoard(params[key])}%5D`)
    .join('&');

export function solveSelfBoard (payload) {
  return (dispatch) => {
    console.log('masuk self board')
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
      .catch(err => {
        console.log(err)
        dispatch(setErrorBoard(err))
      })
      .finally(() => dispatch(setLoadingBoard(false)))
  }
}

export function submitBoard (payload) {
  return (dispatch) => {
    console.log('masuk submit')
    dispatch(setLoadingBoard(true))
    fetch('https://sugoku.herokuapp.com/validate', {
      method: 'POST',
      body: encodeParams(payload),
      headers: { 'Content-Type': 'application/x-www-form-urlencoded' }
    })
      .then(res => res.json())
      .then(res => {
        console.log(res, 'ini res dari submitboard')
        dispatch(setStatusBoard(res.status))
      })
      .catch(err => {
        console.log(err)
        dispatch(setErrorBoard(err))
      })
      .finally(() => dispatch(setLoadingBoard(false)))
  }
}
