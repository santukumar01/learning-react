import { Children, createContext } from "react";
import { useReducer } from "react";

export const TodoContex = createContext([]);

// below is the reducer(also a pure function) which takes action and cur_state then return the new state
const todoReducer = (curtodo, action) => {
  let newTodoItem = curtodo;
  if (action.type === "ADD_ITEM") {
    newTodoItem = [
      ...curtodo,
      {
        todo: action.payload.todo,
        date: action.payload.date,
      },
    ];
  }

  if (action.type === "DELETE_ITEM") {
    console.log(action.payload.item);
    newTodoItem = curtodo.filter((item) => item !== action.payload.item);
  }

  return newTodoItem;
};

// below is the wrapper function
const TodoContexProvider = ({ children }) => {
  const [todo, dispacthedAction] = useReducer(todoReducer, []);

  const handleAdd = (inputTodo, inputDate) => {
    // creating an Action Object
    const addNewItem = {
      type: "ADD_ITEM",
      payload: {
        todo: inputTodo,
        date: inputDate,
      },
    };
    dispacthedAction(addNewItem);
  };

  const handleDelete = (curtodo) => {
    // creting action object
    const deleteItem = {
      type: "DELETE_ITEM",
      payload: {
        item: curtodo,
      },
    };
    dispacthedAction(deleteItem);
  };

  return (
    <TodoContex.Provider
      value={{ todo: todo, handleAdd: handleAdd, handleDelete: handleDelete }}
    >
      {children}
    </TodoContex.Provider>
  );
};

export default TodoContexProvider;
