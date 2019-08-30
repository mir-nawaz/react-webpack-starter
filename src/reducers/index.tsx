import { combineReducers } from "redux";
import { connectRouter, RouterState } from "connected-react-router";
import main, { IMainReducer } from "./MainReducer";

export interface IGlobalStore {
    router: RouterState;
    main: IMainReducer;
}

// tslint:disable-next-line:typedef
const createRootReducer = (history: any) => combineReducers({
    router: connectRouter(history),
    main, // rest of your reducers
});

export default createRootReducer;
