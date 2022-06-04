import React from 'react';
import { MdDeleteForever, MdEdit } from 'react-icons/md'

/** The row element for react All the information for individual exercises with the edit and delete options. */
function Exercise({ exercise, onDelete, onEdit }) {
    return (
        <tr>
            <td>{exercise.name}</td>
            <td>{exercise.reps}</td>
            <td>{exercise.weight}</td>
            <td>{exercise.unit}</td>
            <td>{exercise.date}</td>
            <td><MdEdit onClick={() => onEdit(exercise)}/></td>
            <td>< MdDeleteForever onClick={ () => onDelete(exercise._id)}/></td>
        </tr>
    );
}

export default Exercise;
