import logo from './logo.svg';
import AllUsers from './AllUsers';
import axios from 'axios';
import './App.css';
import {BrowserRouter as Router, Route, Link} from 'react-router-dom';
import {Routes} from 'react-router-dom';
import { useState } from 'react';
import UserData from './UserData';

function App() {


  return (
    <div>

              <Router>
                      
                      <Routes >
                        
                        <Route path="/" element={<div><AllUsers/> </div>}></Route>
                        <Route path="/users/:id" element={<div><UserData/> </div>}></Route>
                        {/* <Route path="/user" element=<div> <UserData/><div>></Route> */}
                        

                      </Routes>
              </Router>
        
    </div>
  );
}

export default App;
