import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import pages from "../pages";

const routes = (
    <BrowserRouter>
        <Route exact={true} path="/" component={pages.Login} />
        <Route exact={true} path="/main" component={pages.Main} />
    </BrowserRouter>
);

export default routes;

