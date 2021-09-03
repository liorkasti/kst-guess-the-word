import { createStore } from 'redux'
import reducers from "./reducers/reducers";

const store = createStore(reducers);
console.log("store: ", store);

export default store;
