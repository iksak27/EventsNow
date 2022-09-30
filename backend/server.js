import express from 'express'
import dotenv from 'dotenv'
import connectDB from './config/db.js'
import eventRoutes from './routes/eventRoutes.js'
import errorHandler from './middleware/errorMiddleware.js'

const app = express()
dotenv.config()
connectDB()


app.get('/', (req, res) => {
    res.send('API is running...')
})
app.use('/api/events', eventRoutes)
app.use(errorHandler)


const port = process.env.PORT || 5500
app.listen(port, console.log(`server is running in ${process.env.NODE_ENV} mode on port ${port}`))