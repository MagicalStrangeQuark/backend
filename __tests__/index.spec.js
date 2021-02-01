const request = require('supertest');
const app = require('../src/routes');

describe("basic math operations", () => {
    it("should test that 1 + 1 === 2", () => {
        expect(1 + 1).toBe(2);
    });

    it("should test that true === true", () => {
        expect(true).toBe(true);
    });

    it("should test that false === false", () => {
        expect(false).toBe(false);
    });
});

describe("server.js", () => {
    it("/", async (done) => {
        const response = await request(app).get('/');

        expect(response.body).toMatchObject({});
        expect(response.status).toBe(200);

        done();
    });

    it("/users", async (done) => {
        const response = await request(app).get('/users');

        expect(response.body).toMatchObject({});
        expect(response.status).toBe(200);

        done();
    });
});