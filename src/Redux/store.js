import { createStore, applyMiddleware, compose } from "redux";
import reducer from "./reducers";
import thunk from "redux-thunk";
import { createBrowserHistory } from "history";
import { connectRouter, routerMiddleware } from "connected-react-router";

const composeEnhancers = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

export const history = createBrowserHistory({
  basename: process.env.PUBLIC_URL
});

const middleware = [routerMiddleware(history), thunk];

const store = createStore(
  connectRouter(history)(reducer), // new root reducer with router state
  composeEnhancers(applyMiddleware(...middleware))
);

export { store };
