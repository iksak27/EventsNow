import mongoose from 'mongoose'

// const reviewSchema = mongoose.Schema({
//     name: {
//         type: String,
//         required:true
//     },
//     rating: {
//         type: Number,
//         required:true
//     },
//     comment: {
//         type: String,
//         required:true
//     }
// }, {
//     timestamps: true
// })

const eventSchema = mongoose.Schema({
    user: {
        type: mongoose.Schema.Types.ObjectId,
        required: true,
        ref: 'User'
    },
    name: {
        type: String,
        required: true
    },
    image: {
        type: String,
        required: true
    },
    shortdescription: {
        type: String,
        required: true
    },
    description: {
        type: String,
        required: true
    },
    price: {
        type: Number,
        required: true
    },
    followers: {
        type: Number,
        required: true,
        default: 0
    },
    numTickets: {
        type: Number,
        required: true
    },
        // reviews: [reviewSchema]
}, {
    timestamps: true
})

const Event = mongoose.model('Events', eventSchema)
export default Event