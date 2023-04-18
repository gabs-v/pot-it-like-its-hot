const mongoose = require('mongoose');

const PlantSchema = new mongoose.Schema({
    plantName: {
        type: String,
        required: [true, "Type of Plant is required"],
        minLength: [2, "Type of plant must be 2 or more characters"]
    },
    datePlanted: {
        type: Date,
        required: [true, "Must have a date that plant was planted"]
    },
    waterCare: {
        type: String,
        required: [true, "Plant must have a water routine"]
    },
    sunlight: {
        type: String,
        required: [true, "Plant must have a sunlight care routine"]
    },
    idealTemp: {
        type: Number,
        required: [true, "Plant must have ideal temperatures"]
    },
    notes: {
        type: String,
        required: [false],
        minLength: [3, "Notes must be at least 3 characters long"]
    },
    observations: {
        type: String,
        required: [false],
        minLength: [3, "Observations must be at least 3 characters long"]
    },
    outcome: {
        type:String,
        required: [false],
        minLength: [3, "Outcomes must be at least 3 characters long"]
    }

}, { timestamps: true});

const Plant = mongoose.model("Plant", PlantSchema);
module.exports = Plant;