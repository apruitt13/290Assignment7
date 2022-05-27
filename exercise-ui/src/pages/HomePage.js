import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage() {
    const [exercises, setExercises] = useState([]);

    return (
        <>
            <h2>List of Exercise</h2>
            {<ExerciseList exercises={exercises}></ExerciseList> }
            {/* <Link to="/add-movie">Add an Exercise</Link> */}
        </>
    );
}

export default HomePage;