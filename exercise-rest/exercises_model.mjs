import mongoose from 'mongoose';
import 'dotenv/config';

mongoose.connect(
    process.env.MONGODB_CONNECT_STRING,
    { useNewUrlParser: true }
);

const db = mongoose.connection;


/**
 * Define the schema. Using required and min for validation as well as function for the date.
 */
 const exerciseSchema = mongoose.Schema({
    name: { type: String, required: true },
    reps: { type: Number, required: true, min: 1},
    weight: { type: Number, required: true, min: 1},
    unit: { type: String, required: true },
    date: { type: String, required: true, validate: function isDateValid(date) {
        const format = /^\d\d-\d\d-\d\d$/;
        return format.test(date);
    }}
});

const opts = { runValidators: true}

/**
 * Compile the model from the schema. This must be done after defining the schema.
 */
const Exercise = mongoose.model("Exercise", exerciseSchema);

// Create exercise based on the information provided.
const createExercise = async (name, reps, weight, unit, date) => {
    const exercise = new Exercise({name: name, reps: reps, weight: weight, unit: unit, date: date});
    return exercise.save();
}

// Returns all the exercises.
const findExercise = async (filter) => {
    const query = Exercise.find(filter);
    return query.exec();
}

// Find an exercise using the id.
const findExerciseById = async (_id) => {
    const query = Exercise.findById(_id);
    return query.exec();
}

// Updates an exercise depending on the entered information. ID is required for it to work. All areas must have something entered. Runvalidators checks that.
const replaceExercise = async (_id, name, reps, weight, unit, date) => {
    const result = await Exercise.updateOne({_id:_id}, {name: name, reps: reps, weight: weight, unit: unit, date: date}, { runValidators: true, context: 'query' });
    return result.modifiedCount;
}
// Deletes an exercise depending on the conditions entered. Will delete all users that match the condition.
const deleteById = async (_id) => {
    const result = await Exercise.deleteOne({_id:_id});
    return result.deletedCount;
}


export {createExercise, findExercise, findExerciseById, replaceExercise, deleteById};


// The open event is called when the database connection successfully opens
db.once("open", () => {
    console.log("Successfully connected to MongoDB using Mongoose!");
});