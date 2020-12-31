const request = require('supertest');
const app = require('../src/app');

describe("app", () => {
    describe("Test the root path", () => {
        test("It should response the GET method", (done) => {
            return request(app)
                .get("/")
                .expect('Content-Type', /text\/html/)
                .expect(200, done);
        });
    });

    describe("Test the resource path", () => {
        test("It should response the GET method", (done) => {
            return request(app)
                .get("/owner")
                .set('Accept', 'application/json')
                .expect('Content-Type', /json/)
                .expect(200, done);
        });
    });

    describe("Test the error handling", () => {
        test("It should handle 404 status code", (done) => {
            return request(app)
                .get("/error")
                .expect('Content-Type', /text\/html/)
                .expect(404, done);
        });
    });
});
