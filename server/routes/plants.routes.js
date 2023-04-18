const PlantController = require('../controllers/plants.controller');

module.exports = (app) => {
    app.get('/api/plants', PlantController.findAllPlants);
    app.get('/api/plants/:id', PlantController.findOnePlant);
    app.delete('/api/plants/:id', PlantController.deletePlant);
    app.put('/api/plants/:id', PlantController.updatePlant);
    app.post('/api/plants', PlantController.newPlant);
}