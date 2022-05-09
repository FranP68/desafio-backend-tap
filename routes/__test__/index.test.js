const app = require('../../app');
const request = require('supertest');

describe('getGame', () => {
    it('Devuelve un nuevo Game. Espera statusCode 201', done => {
        request(app)
        .get('/game')
        .set('Accept', 'application/json')
        .expect('Content-Type', /json/)
        .expect(201, done);
    });
});