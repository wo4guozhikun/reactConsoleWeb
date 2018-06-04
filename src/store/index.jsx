import { combineReducers } from "redux";

const initTodoState = [];
const initProductState = {
  index:0,
  show:false
};

function todos(state = initTodoState, action) {
  switch (action.type) {
    case "ADD_TODO":
      return [...todos, action.payload];
    default:
      return state;
  }
}

function proIndex(state = initProductState, action = {}) {
    switch (action.type) {
        case "ADD_PRODUCTINDEX":
        return{
          ...state,
          ...action.payload
        };
        default:
          return state;
      }
}


const todoApp = combineReducers({
  todos,
  proIndex
});

export default todoApp;
