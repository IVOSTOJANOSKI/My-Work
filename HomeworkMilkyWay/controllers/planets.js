const MilkyWay = require('../models/Planet');

const addNewPlanet = async(req, res) => {
    const { planetName, distanceToEarth } = req.body;

    if (!planetName || !distanceToEarth) {
        return res.status(400).json('Missing song title or artist!');
    }

    try {
        await MilkyWay.addNewPlanet({ planetName, distanceToEarth });
        return res.status(200).json('Added new planet!');
    } catch (error) {
        return res.status(500).json(error);
    }
};

const getAllPlanets = async(req, res) => {
    try {
        const allPlanets = await MilkyWay.getPlanets();
        return res.status(200).json(allPlanets);
    } catch (error) {
        return res.status(500).json(error);
    }
};

const updatePlanet = async(req, res) => {
    const { id, planetName, distanceToEarth } = req.body;

    if (!id || !planetName || !distanceToEarth) {
        return res.status(400).json('Missing request data!');
    }

    try {
        await MilkyWay.editPlanet({ id, planetName, distanceToEarth });
        return res.status(200).json('Planet updated!');
    } catch (error) {
        return res.status(500).json(error);
    }
};

const deletePlanet = async(req, res) => {
    const { id } = req.body;

    if (!id) {
        return res.status(400).json('Gotcha');
    }

    try {
        await MilkyWay.deletePlanet(id);
        return res.status(200).json('Planet deleted succesfully');
    } catch (error) {
        return res.status(500).json(error);
    }
};

module.exports = {
    getAllPlanets,
    addNewPlanet,
    updatePlanet,
    deletePlanet,
};