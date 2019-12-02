import React from 'react';
import './App.css'
import Login from './component/Login';
import { BrowserRouter as Router, Route } from 'react-router-dom'
import logo from './logo.svg'
import Register from './component/Register';
import Dashboard from './component/Dashboard';



function App() {
  return (
    <Router>
      <Route path='/' exact component={Login} />
      <Route path='/register/' exact component={Register} />
      <Route path='/analyticsdashboard/' exact component={Dashboard} />
    </Router>
    
  );
}

export default App;
