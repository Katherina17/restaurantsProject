const mongoose = require('mongoose');

const RestaurantSchema = mongoose.Schema({
    id: {
        type: String,
        require: true,
    },
    name: {
        type: String,
        require: true,
    },
    description: {
        type: String,
        require: true,
    },
    deliveryTime: {
        type: String,
        require: true,
    },
    rate: {
        type: String,
        require: true,
    },
    delivery: {
        type: String,
        require: true,
    },
    img: {
        type: String,
        require: true,
    },
    scheduleFrom: {
        type: String,
        require: true,
    },
    scheduleTo: {
        type: String,
        require: true,
    },
    schedule: {
        type: String,
        require: true,
    },
    cuisines: {
        type: Array,
        require: true,
        cuisine: {
            type: String,
            require: true,
            dishes: {
                type: Array ,
                require: true,
                category: {
                    type: String,
                    require: true
                },
                dish: {
                    type: String,
                    require: true
                },
                price: {
                    type: String,
                    require: true
                },
                weight: {
                    type: String,
                    require: true
                },
                img: {
                    type: String,
                    require: true
                },
                description: {
                    type: String,
                    require: true
                }
            }
        }
    },
})

module.exports = mongoose.model('Restaurant', RestaurantSchema)