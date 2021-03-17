const express = require('express');
const xss = require('xss');
const path = require('path');
const PlanetsService = require('./planet-services');
const PlanetsRouter = express.Router();

const serializePlanet = planet => ({
  id: planet.id,
  planet_name: xss(planet.planet_name),
  next_enter_date: planet.next_enter_date,
  next_exit_date: planet.next_exit_date,
  second_enter_date: planet.second_enter_date,
  second_exit_date: planet.second_exit_date,
  third_enter_date: planet.third_enter_date,
  third_exit_date: planet.third_exit_date,
  fourth_enter_date: planet.fourth_enter_date,
  fourth_exit_date: planet.fourth_exit_date,
  fifth_enter_date: planet.fifth_enter_date,
  fifth_exit_date: planet.fifth_exit_date,
  sixth_enter_date: planet.sixth_enter_date,
  sixth_exit_date: planet.sixth_exit_date,
  seventh_enter_date: planet.seventh_enter_date,
  seventh_exit_date: planet.seventh_exit_date,
  eighth_enter_date: planet.eighth_enter_date,
  eighth_exit_date: planet.eighth_exit_date,
  ninth_enter_date: planet.ninth_enter_date,
  ninth_exit_date: planet.ninth_exit_date,
  tenth_enter_date: planet.tenth_enter_date,
  tenth_exit_date: planet.tenth_exit_date,
  eleventh_enter_date: planet.eleventh_enter_date,
  eleventh_exit_date: planet.eleventh_exit_date,
  twelfth_enter_date: planet.twelfth_enter_date,
  twelfth_exit_date: planet.twelfth_exit_date,
  thirteenth_enter_date: planet.thirteenth_enter_date,
  thirteenth_exit_date: planet.thirteenth_exit_date,
  fourteenth_enter_date: planet.fourteenth_enter_date,
  fourteenth_exit_date: planet.fourteenth_exit_date,
  fifteenth_enter_date: planet.fifteenth_enter_date,
  fifteenth_exit_date: planet.fifteenth_exit_date,
  sixteenth_enter_date: planet.sixteenth_enter_date,
  sixteenth_exit_date: planet.sixteenth_exit_date,
  seventeenth_enter_date: planet.seventeenth_enter_date,
  seventeenth_exit_date: planet.seventeenth_exit_date,
  eighteenth_enter_date: planet.eighteenth_enter_date,
  eighteenth_exit_date: planet.eighteenth_exit_date,
});

PlanetsRouter
  .route('/')
  .get((req, res, next) => {
    const knexInstance = req.app.get('db');
    PlanetsService.getAllPlanets(knexInstance)
      .then(planets => {
        res.json(planets.map(serializePlanet));
      })
      .catch(next);
  })

module.exports = PlanetsRouter;