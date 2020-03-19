import React, { useState } from "react";
import Home from "./Home"
import Search from "./Search"
import Sidebar from "./Sidebar"
import Collection from "./Collection"
import { SECTIONS } from '../lib/Api';
import { Route, Switch } from 'react-router-dom';

function Layout() {
  const [models, setModels] = useState([]);
  return (
    <div className="h-screen flex overflow-hidden bg-gray-100">
      <Sidebar items={SECTIONS} />
      <div className="flex flex-col w-0 flex-1 overflow-hidden">
        <Search />
        <Switch>
          <Route
            exact
            path={'/'}
            render={() => <Home />}
          />
          {/* <Route
                exact
                path={'/collection/:sectionname/:modelname/:id'}
                component={Item}
              />*/}
          <Route
            exact
            path={'/collection/:sectionname/:modelname'}
            component={Collection}
          />
        </Switch>

      </div>
    </div>
  );
}

export default Layout;