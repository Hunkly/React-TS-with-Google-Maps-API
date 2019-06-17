import * as React from "react";
import { Route, BrowserRouter } from "react-router-dom";

import pages from "../pages";

const routes = (
    <BrowserRouter>
        <Route exact={true} path="/" component={pages.Login} />
        <Route path="/main" component={pages.Main} />
        <Route path="/about" component={pages.About} />
    </BrowserRouter>
);

export default routes;

