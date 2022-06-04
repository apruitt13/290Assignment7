import 'dotenv/config';
import * as exercises from './exercises_model.mjs';
import express from 'express';

const PORT = process.env.PORT;

const app = express();

app.use(express.json());

/**
 * Create a new exercise
 */
app.post('/exercises', (req, res) => {
    exercises.createExercise(req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
    .then(exercise => {
        res.status(201).json(exercise)
    })
    .catch(error => {
        console.error(error);
        res.status(400).json({Error: 'Request failed'})
    })
});


/**
 * Retrives the exercise corresponding to the ID provided.
 */
 app.get('/exercises/:_id', (req, res) => {
    const exerciseId = req.params._id;
    exercises.findExerciseById(exerciseId)
        .then(exercise => { 
            if (exercise !== null) {
                res.json(exercise);
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }         
         })
        .catch(error => {
            res.status(400).json({ Error: 'Request failed' });
        });

});

/**
 * Retrieves all exercises.  
 */
 app.get('/exercises', (req, res) => {
    let filter = {};
    exercises.findExercise(filter, '', 0)
        .then(exercise => {
            res.send(exercise);
        })
        .catch(error => {
            console.error(error);
            res.send({ Error: 'Request failed' });
        });

});

/**
 * Update the exercise whose id is provided in the path parameter and set
 * its name, reps, weight, unit, date to the values provided in the body.
 */
 app.put('/exercises/:_id', (req, res) => {
    if (Object.keys(req.body).length != 5){
        res.status(400).json({ Error: 'Request failed' });
        return}
    exercises.replaceExercise(req.params._id, req.body.name, req.body.reps, req.body.weight, req.body.unit, req.body.date)
        .then(numUpdated => {
            if (numUpdated === 1) {
                res.json({ _id: req.params._id, name: req.body.name, reps: req.body.reps, weight: req.body.weight, unit: req.body.unit, date: req.body.date })
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.status(400).json({ Error: 'Request failed' });
        });
});

/**
 * Delete the exercise whose id is provided in the query parameters
 */
 app.delete('/exercises/:_id', (req, res) => {
    exercises.deleteById(req.params._id)
        .then(deletedCount => {
            if (deletedCount === 1) {
                res.status(204).send();
            } else {
                res.status(404).json({ Error: 'Resource not found' });
            }
        })
        .catch(error => {
            console.error(error);
            res.send({ error: 'Request failed' });
        });
});

app.listen(PORT, () => {
    console.log(`Server listening on port ${PORT}...`);
});