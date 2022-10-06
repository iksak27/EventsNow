import express from 'express'
import { getEvents, getEventById } from '../controllers/eventController.js'

const router = express.Router()

// @desc Fetch all events
// @route GET /api/events
// @access Public

router.get('/', getEvents)

// @desc Fetch a specific event by the id
// @route GET /api/events/1
// @access Public

router.get('/:id', getEventById)

export default router