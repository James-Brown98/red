const test = require('tape')
const reducer = require('../reducer');

test('can change the value of playerPosition', (t) =>{
  const state = {
    playerPosition: [0, 0, 0, 0]
  }

  const expected = {
    playerPosition: [1, 0, 0, 0]
  }

  const actual = reducer(state, {type:'MOVE_DOWN', payload:[1,0,0,0]})

  t.deepEquals(actual, expected, 'position moves down 1')

  t.end()
})

test('can change the value of playerPosition', (t) =>{
  const state = {
    playerPosition: [0, 0, 0, 0]
  }

  const expected = {
    playerPosition: [0, 0, 2, 0]
  }

  const actual = reducer(state, {type:'MOVE_UP', payload:[0,0,2,0]})

  t.deepEquals(actual, expected, 'position moves up 2')

  t.end()
})
