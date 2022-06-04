import React, { useState } from 'react';
import { useHistory } from "react-router-dom";

export const AddExercisePage = () => {
    {/** All the items needed to add a new exercise. Weight is automatically set to lbs. */}
    const [name, setName] = useState('');
    const [reps, setReps] = useState('');
    const [weight, setWeight] = useState('');
    const [unit, setUnit] = useState('lbs');
    const [date, setDate] = useState('');

    const history = useHistory();

    {/** Adds a new exercises using post. */}
    const addExercise = async () => {
        const newExercise = {name, reps, weight, unit, date}
        const response = await fetch ('/exercises', {
            method: 'POST',
            body: JSON.stringify(newExercise),
            headers: {
                'Content-Type': 'application/json',
            }
        });
        if(response.status === 201){
            alert("Successfully added the exercise")
        }else{
            alert(`Failed to add exercise, status code = ${response.status}`);
        }
        history.push("/");
    
    };

    return (
        <div>
            {/** Table used to enter the data for adding a new exercise. */}
            <h4>Add Exercise</h4>
            <hr/>
            <input
                type="text"
                placeholder="Enter exercise here"
                value={name}
                onChange={e => setName(e.target.value)} />
            <input
                type="number"
                value={reps}
                placeholder="Enter reps here"
                onChange={e => setReps(e.target.value)} />
            <input
                type="number"
                placeholder="Enter weight here"
                value={weight}
                onChange={e => setWeight(e.target.value)} />
            <select name = "weight" onChange={e => setUnit(e.target.value)}>
                <option value={'lbs'}> lbs</option>
                <option value={'kgs'}> kgs</option>
            </select>
            <input
                type="text"
                placeholder="Enter date here"
                value={date}
                onChange={e => setDate(e.target.value)} />
            <button
                onClick={addExercise}
            >Add</button>
        </div>
    );
}

export default AddExercisePage;