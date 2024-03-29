import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import {useState} from 'react';
import { Link } from 'react-router-dom';
import {BsClipboardData} from 'react-icons/bs'

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">
      <Router>
        {/** The header for all of the pages. */}      
        <header> <h1>Exercise Tracker <BsClipboardData/></h1> 
        <p>Add, edit and delete workouts to better track your performance</p>
        <hr/>
        </header>
    
        <div className="App-header">
          
          {/** Navigation links for all pages.*/}
          <nav class = "Navigation">
            <o1><Link to = "/"> Home </Link></o1>
            &nbsp;&nbsp;
            <o1><Link to = "/add-exercise"> Add </Link></o1>
            <hr/>
          </nav>

          {/** Setting the route path for all pages.*/}
          <Route path="/" exact>
            <HomePage  setExerciseToEdit = {setExerciseToEdit}/>
          </Route>
          <Route path="/add-exercise" exact>
            <AddExercisePage />
          </Route>
          <Route path="/edit-exercise" exact>
            <EditExercisePage exerciseToEdit = {exerciseToEdit}/>
          </Route>
          </div>
          {/** The footer for all pages with copyright. */}
          <footer> <p>© 2022 Adam Pruitt</p> </footer>
      </Router>
    </div>
  );
}

export default App;