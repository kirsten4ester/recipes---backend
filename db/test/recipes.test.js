const should = require('chai').should();
const expect = require('chai').expect;
const supertest = require('supertest');

const api = supertest('http://localhost:5000'); 

// testing 
describe("GET /recipes", function () {
    it("should return a 200 response", function(done) {
        api.get("/recipes")
        .set("Accept", "application/json")
        .expect(200, done)
    });

    it ('should return an array', function(done) {
        api.get("/recipes")
        .set("Accept", "application/json")
        .end(function(error, response) {
            expect(response.body).to.be.an('array');
            done();
        })
    });

    it ("should return an array of objects that have a field called 'name'", function(done) {
        api.get("/recipes")
        .set("Accept", "application/json")
        .end(function(error, response) {
            expect(response.body[0]).to.have.property('name');
            done();
        })
    })
});