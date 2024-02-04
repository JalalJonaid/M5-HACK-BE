const express = require('express')

const routes = express.Router()

// const {
//     getSingleRoute,
// } = require('../queries/booking.js')

routes.get('/:id', async (req, res) => {
    const {id} = req.params;
    process.stdout.write(`GET Request received for route at id ${id}... `)
    const result = await getSingleRoute(id);
    if(result){
        console.log(`Found ${result.name}`)
        res.status(200).json({
            message: "OK",
            data: result
        })
    } else {
        console.log(`ERROR - No route found with id ${id}`)
        res.status(500).json({
            message: "No route found.",
            data: null
        })
    }
})

module.exports = bookings