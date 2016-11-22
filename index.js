const {createStore} = require('redux')
const html = require('yo-yo')

const reducer = require('./reducer')
const template = require('./views/playerPosition')

const initialState = {
  playerPosition: [0, 0, 0, 0]
}

const {dispatch, getState, subscribe} = createStore(reducer, initialState)


const updateView = () => {
  const currentState = getState()
  const newView = template(currentState, dispatch)
  html.update(view, newView)
}

subscribe(updateView)

const view = template(initialState, dispatch)
document.body.appendChild(view)
