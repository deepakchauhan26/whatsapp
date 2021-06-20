import React, {useState} from "react";
import './App.css';
import Login from './Components/Login';
import Sidebar from './Components/Sidebar';
import Chat from './Components/Chat';
import { BrowserRouter as Router, Switch ,Route  } from "react-router-dom";
import { useStateValue } from "./StateProvider";

function App() {
  const [user, dispatch] = useStateValue();
  return (
    <div className="app">
    {!user ? (
      <Login/>
    ) : (
      <div className="app__body">
   <Router>
   <Switch>
   <Route path="/rooms/:roomId">
    <Sidebar/>
    <Chat/>
    </Route>
    <Route path="/">
      <Chat/>
    </Route>
    </Switch>
    </Router>
      </div>
    )}
   
    </div>
    
  );
}
export default App;
