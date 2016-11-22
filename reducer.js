const clone = require('clone')

module.exports = (state, action) => {
  const newState = clone(state)
  const {type, payload} = action
  switch(type){
    case 'MOVE_DOWN':
      newState.playerPosition[0] += payload
      return newState
    case 'MOVE_UP':
      newState.playerPosition[2] += payload
      return newState
    case 'MOVE_LEFT':
      newState.playerPosition[1] += payload
      return newState
    case 'MOVE_RIGHT':
      newState.playerPosition[3] += payload
      return newState
    default:
      return newState
  }
}
