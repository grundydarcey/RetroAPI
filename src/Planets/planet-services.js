const PlanetsService = {
  getAllPlanets(knex) {
    return knex
      .select('*')
      .from('planets');
  },

  //maybe comment insertplanets out
  insertPlanets(knex, newPlanet) {
    return knex
      .insert(newPlanet)
      .into('planets')
      .returning('*')
      .then(rows => {
        return rows[0];
      });
  },

  

};

module.exports = PlanetsService;