/* eslint-disable quotes */
//const { expect } = require('chai');
const knex = require('knex');
const supertest = require('supertest');
const app = require('../src/app');
const { makePlanets } = require('./planets.fixtures');

describe('Planets Endpoints', function() {
  let db;
  before('make knex instance', () => {
    db = knex({
      client: 'pg',
      connection: process.env.TEST_DB_URL,
    });
    app.set('db', db);
  });
  after('disconnect from db', () => db.destroy());
  before('clean the table', () => db('planets').truncate());
  afterEach('cleanup', () => db('planets').truncate());

  describe(`GET /api/planets`, () => {
    context(`Given no planets`, () => {
      it(`responds with 200 and an empty list`, () => {
        return supertest(app)
          .get('/api/planets')
          .expect(200, []);
      });
    });

    context('Given there are planets in the database', () => {
      const testPlanets = makePlanets();
      beforeEach('insert planets', () => {
        return db
          .into('planets')
          .insert(testPlanets);
      });

      it('responds with 200 and all of the planets', () => {
        return supertest(app)
          .get('/api/planets')
          .expect(200, testPlanets);
      });
    });
  });

  describe(`GET /api/planets/:planetId`, () => {
    context('Given no planets', () => {
      it(`responds with 404`, () => {
        const planetId = 123456;
        return supertest(app)
          .get(`/api/planets/${planetId}`)
          .expect(404, { error: { message: `Planet doesn't exist`} });
      });
    });

    context('Given there are planets in the database', () => {
      const testPlanets = makePlanets();
      beforeEach('insert planets', () => {
        return db
          .into('planets')
          .insert(testPlanets);
      });
      it('responds with 200 and the specified planet', () => {
        const planetId = 2;
        const expectedPlanet = testPlanets[planetId - 1];
        return supertest(app)
          .get(`/api/planets/${planetId}`)
          .expect(200, expectedPlanet);
      });
    });
  });
});