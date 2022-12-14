import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventRoutes.js'
import userRoutes from './routes/userRoutes.js'
import orderRoutes from './routes/orderRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()


app.get('/', (req, res) => {
    res.send('API is running...')
})
app.use(express.json())
app.use('/api/events', eventRoutes)
app.use('/api/users', userRoutes)
app.use('/api/orders', orderRoutes)
app.use(errorHandler)


const port = process.env.PORT || 5500