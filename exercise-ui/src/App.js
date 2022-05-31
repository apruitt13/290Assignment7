import './App.css';
import React from 'react';
import { BrowserRouter as Router, Route } from 'react-router-dom';
import HomePage from './pages/HomePage';
import AddExercisePage from './pages/AddExercisePage';
import EditExercisePage from './pages/EditExercisePage';
import {useState} from 'react';
import { Link } from 'react-router-dom';

function App() {
  const [exerciseToEdit, setExerciseToEdit] = useState();

  return (
    <div className="App">

      <Router>
        <div className="App-header">
          <nav class = "Navigation">
            <o1>
              <Link to = "/">Home</Link>
                &nbsp;
              <Link to = "/add-exercise">Add</Link>
            </o1>

          </nav>
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
      </Router>
    </div>
  );
}

export default App;