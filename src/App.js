import React from 'react';
import './App.css';
import { Route, Switch, Redirect } from "react-router-dom";
import ChooseRole from './containers/Registration/ChooseRole';
import Registration from './containers/Registration/Registration';

function App() {
  return (
    <div className="App">
      <header className="App-header">
        <p>
          Implement Header
        </p>
      </header>
      <main className="main">
          {" "}
          <Switch>
            <Route path="/register" component={Registration}/>
           {/* <Route path="/login" component={Login} /> */}
            <Route path="/chooseRole" component={ChooseRole} />
          </Switch>
        </main>
    </div>
  );
}

export default App;
