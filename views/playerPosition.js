const html = require('yo-yo')

module.exports = (state, dispatch) => {
  return html`
    <div id='player' tabindex='1' onkeyup=${(e) => checkKey(e) }>.</div>
  `
  function checkKey(e) {

    e = e || window.event;

    if (e.keyCode == '38') {
      // up arrow
      dispatch({type: 'MOVE_UP', payload:5})
      console.log(state.playerPosition);
    }
    else if (e.keyCode == '40') {
      // down arrow
      dispatch({type: 'MOVE_DOWN', payload:5})
      console.log(state.playerPosition);
    }
    else if (e.keyCode == '37') {
      // left arrow
      dispatch({type: 'MOVE_LEFT', payload:5})
      console.log(state.playerPosition);
    }
    else if (e.keyCode == '39') {
      // right arrow
      dispatch({type: 'MOVE_RIGHT', payload:5})
      console.log(state.playerPosition);
    }

  }
}
