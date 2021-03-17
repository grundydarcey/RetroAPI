const PlanetsService = {
  getAllPlanets(knex) {
    return knex
      .select('*')
      .from('planets');
  },

  getById(knex, id) {
    return knex
      .from('planets')
      .select('*')
      .where('id', id)
      .first();
  }
};

module.exports = PlanetsService;