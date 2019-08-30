import * as React from "react";
import * as ReactDOM from "react-dom";
import { Provider } from "react-redux";
import { ConnectedRouter } from "connected-react-router";
import {Route, Switch} from "react-router";
import pages from "./pages";

import configureStore, { history } from "./store";

import "./styles/index.scss";

const store: any = configureStore({});

ReactDOM.render(
    // tslint:disable-next-line:jsx-wrap-multiline
    <Provider store={store}>
        <ConnectedRouter history={history}>
            <Switch>
                <Route exact={true} path="/" component={pages.FrontPage} />
            </Switch>
        </ConnectedRouter>
    </Provider>,
    document.getElementById("app"),
);
