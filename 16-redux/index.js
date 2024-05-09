// 1. importing redux
const redux = require("redux");

// 6.intial value of store
const INTINAL_VALUE = {
  counter: 1,
};

// 3.creating reducer  -> 8. passing intinal value
const reducer = (store = INTINAL_VALUE, action) => {
  const newStore = store;
  if (action.type === "INCREMENT") {
    newStore.counter = newStore.counter + 1;
  } else if (action.type === "DEC") {
    newStore.counter = newStore.counter - 1;
  } else if (action.type === "ADD") {
    newStore.counter = newStore.counter + action.payload.add;
  }
  return newStore;
};

// 2.creating store (Javascript)
const store = redux.createStore(reducer);

// 4. creating a subscriber (can be a function , component)
const subscriber = () => {
  const state = store.getState();
  console.log(state);
};

store.subscribe(subscriber);

// 5. dispatching action
store.dispatch({ type: "INCREMENT" });
store.dispatch({ type: "DEC" });
store.dispatch({
  type: "ADD",
  payload: {
    add: 8,
  },
});
