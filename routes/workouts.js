const express = require('express')
const {
    createWorkout,
    getWorkouts,
    getWorkout,
    deleteWorkout,
    updateWorkout
} = require('../controllers/workoutController')

const router = express.Router()

//get all workout
router.get('/', getWorkouts)

// GET a single workout
router.get('/:id', getWorkout)

// Post a new workout
router.post('/', createWorkout)

// DELETE A workout
router.delete('/:id', deleteWorkout)

router.patch('/:id', updateWorkout)

module.exports = router