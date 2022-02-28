// C (create) of CRUD
const addNewSportist = async(newSportistInfo) => {
    const newSportist = {
        id: sportists.length + 1,
        name: newSportistInfo.name,
        sport: newSportistInfo.sport,
        age: newSportistInfo.age,
    };

    sportists.push(newSportist);
};

// R (read) of CRUD
const getAllSportists = async() => {
    return sportists;
};

// U (update) of CRUD
const updateSportist = async(sportistId, newInfoForSportist) => {
    sportists = sportists.map((sportist) => {
        if (sportist.id === sportistId) {
            return {
                id: sportist.id,
                name: newInfoForSportist.name,
                sport: newInfoForSportist.sport,
                age: newInfoForSportist.age,
            };
        } else {
            return sportist;
        }
    });
};

// D (delete) of CRUD
const deleteSportist = async(targetIdForDeletion) => {
    sportists = sportists.filter((sportist) => sportist.id !== targetIdForDeletion);
};

module.exports = {
    getAllSportists,
    addNewSportist,
    updateSportist,
    deleteSportist,
};

// if (someValue) {

// } else {
//     throw new Error()

// }