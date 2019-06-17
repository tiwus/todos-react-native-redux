import { createStore, applyMiddleware } from "redux";
import { createLogger } from "redux-logger";
import thunk from "redux-thunk";

import rootReducers from "./reducers";

const middleware = applyMiddleware(thunk, createLogger());

const store = createStore(rootReducers, middleware);

export default store;
