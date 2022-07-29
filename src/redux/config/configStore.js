import { createStore } from "redux";
import rootReducer from "../modules/todos";
const store = createStore(rootReducer);

export default store;
