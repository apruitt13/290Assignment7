import React from 'react';
import Exercise from './Exercise';

/** The react element for the table. Takes in the exercises and the ability to delete or edit. */
function ExerciseList({ exercises, onDelete, onEdit }) {
    return (
        <table id="exercises">
            <thead>
                <tr>
                    <th>Name</th>
                    <th>Reps</th>
                    <th>Weight</th>
                    <th>Unit</th>
                    <th>Date:
                        <br/> 
                        mm-dd-yy</th>
                    <th>Edit</th>
                    <th>Delete</th>
                </tr>
            </thead>
            <tbody>
                {exercises.map((exercise, i) => <Exercise exercise={exercise}
                    onDelete = {onDelete}
                    onEdit={onEdit}
                    key={i} />)}
            </tbody>
        </table>
    );
}

export default ExerciseList;
