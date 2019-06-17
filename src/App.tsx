import React from 'react';
import './App.css';
import {Provider} from "react-redux";
import Store from './store/store';
import routes from './routes';
const App: React.FC = () => {

    return (
    <Provider store={Store}>
            <div className="App">
                      {routes}
            </div>
    </Provider>
    );
  };


export default App;
