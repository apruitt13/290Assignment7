import React from 'react';
import { Link } from 'react-router-dom';
import ExerciseList from '../components/ExerciseList';
import { useState, useEffect } from 'react';
import { useHistory } from 'react-router-dom';

function HomePage({setExerciseToEdit}) {

    const [exercises, setExercises] = useState([]);
    const history = useHistory()

    {/**Updating the list when a delete occurs. Happens with the react button on the home page. */}
    const onDelete = async _id => {
        const response = await fetch(`/exercises/${_id}`, {method: 'DELETE'})
        if(response.status === 204){
            const newExercise = exercises.filter(e => e._id !== _id)
            setExercises(newExercise)
        }else {
            console.error(`Failed to delete exercise with _id = ${_id}, status code = ${response.status}`)
        }
    }

    {/** Where to go when the edit button is pushed. */}
    const onEdit = exercise => {
        setExerciseToEdit(exercise);
        history.push("/edit-exercise")
    }
    
    {/** Loading all of the exercises. */}
    const loadExercises = async () => {
        const response = await fetch('/exercises');
        const data = await response.json();
        setExercises(data);
    }

    useEffect(() => {
        loadExercises();
    }, []);

    return (
        <>
            {/** Header and react elementes. */}
            <h4>List of Exercise</h4>
            {<ExerciseList exercises={exercises} onDelete = {onDelete} onEdit={onEdit}></ExerciseList> }
                        
        </>
    );
}

export default HomePage;