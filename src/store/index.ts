import {createBrowserHistory, History} from "history";
import { applyMiddleware, compose, createStore, Store } from "redux";
import { routerMiddleware } from "connected-react-router";
import createRootReducer from "../reducers";

export const history: History = createBrowserHistory();

// tslint:disable-next-line:typedef
export default function configureStore(preLoadedState: object) {
    const store: Store = createStore(
        createRootReducer(history), // root reducer with router state
        preLoadedState,
        compose(
            applyMiddleware(
                routerMiddleware(history), // for dispatching history actions
                // ... other middlewares ...
            ),
        ),
    );

    return store;
}
