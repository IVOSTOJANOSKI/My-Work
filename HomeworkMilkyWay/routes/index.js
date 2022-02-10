const router = require('express').Router();
const {
    addNewPlanet,
    getAllPlanets,
    updatePlanet,
    deletePlanet,
} = require('../controllers/planets');

router.post('/planets', addNewPlanet);
router.get('/planets', getAllPlanets);
router.put('/planets', updatePlanet);
router.delete('/planets', deletePlanet);

router.use((req, res) => {
    res.status(404).json('Not Found.');
});

module.exports = router;