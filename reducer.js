// add code snippets from README
let state;

function changeState(state = {count: 0},action){
  switch(action.type){
    case 'INCREASE':
      return({...state,count: state.count+1})
    default:
      return state
  }
}

function dispacth(action){
  state = changeState(state,action)
  render()
}

function render(){
  let container = document.getElementById('container');
  container.textContent = state.count;
}

dispatch({type: '@@INIT'})

let button = document.getElementById('button');

button.addEventListener('click', () => {
  dispatch({type: 'INCREASE_COUNT'})
})
