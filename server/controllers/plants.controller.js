const Plant = require ('../models/plants.model')

module.exports = {
    findAllPlants: (req,res) => {
        Plant.find({})
            .then((allPlants) => {
                res.json({plants: allPlants})
            })
            .catch((err) => console.log(err))
    },
    findOnePlant: (req, res) => {
        Plant.findOne({_id: req.params.id})
        .then(onePlant => {
            res.json({plant: onePlant})
        .catch((err) =>console.log(err))
        })
    },
    newPlant: (req, res) => {
        Plant.create(req.body)
        .then(newPlantEntry => {
            res.json({ plant: newPlantEntry })
        })
        .catch((err) => console.log(err))
    },
    updatePlant: (req,res) => {
        Plant.findOneAndUpdate({_id: req.params.id}, req.body,
            {new:true, runValidators:true})
            .then(updatedPlantEntry => {
                res.json({updatedPlantEntry})
            })
            .catch((err) => console.log(err))
    },
    deletePlant: (req,res) => {
        Plant.deleteOne({_id: req.params.id})
        .then(result => {
            res.json({result: result})
        })
        .catch((err) => console.log(err))
    }
}