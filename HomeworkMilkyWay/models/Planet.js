let MilkyWayPlanets = [{
    id: 1,
    planetName: 'Venus',
    distanceToEarth: 200,
}, ];

const addNewPlanet = async({ planetName, distanceToEarth }) => {
    const newPlanet = {
        id: MilkyWayPlanets.length + 1,
        planetName: planetName,
        distanceToEarth: distanceToEarth,
    };

    MilkyWayPlanets.push(newPlanet);
};

const getPlanets = async() => {
    return MilkyWayPlanets;
};

const editPlanet = async({ id, planetName, distanceToEarth }) => {
    MilkyWayPlanets = MilkyWayPlanets.map((planet) => {
        if (planet.id === id) {
            return {
                id: planet.id,
                planetName,
                distanceToEarth,
            };
        }
        return planet;
    });
};

const deletePlanet = async(id) => {
    MilkyWayPlanets = MilkyWayPlanets.filter((planet) => planet.id !== id);
};

module.exports = {
    addNewPlanet,
    getPlanets,
    editPlanet,
    deletePlanet,
};