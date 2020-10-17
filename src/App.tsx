import React, {Component} from 'react';
import './App.css';
import {BrowserRouter,Route,Switch} from 'react-router-dom';
import Dashboard from './components/Dashboard';
import Create from './components/Create';
import Issues from './components/Issues';
import Error from './components/Error';
import IssueInfo from './components/IssueInfo';








class App extends Component{
  render(){
    return(
      <BrowserRouter>
      <div className="route">
        <Switch>
          <Route path="/" component={Dashboard}exact/>
          <Route path="/create" component={Create}/>
          <Route path="/issues" component={Issues}/>
          <Route path="/issueinfo" component={IssueInfo}/>
          <Route component={Error}/>
        </Switch>
      </div>
      </BrowserRouter>
    );
  }
}


export default App;
