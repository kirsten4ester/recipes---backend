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

// POST 
describe('POST /recipes', function() {
    before(function(done) {
        api.post("/recipes")
        .set("Accept", "application/json")
        .send({
            "name": "name",
            "ingredients": "ingredients",
            "instructions": "instructions"
        })
       .end(done) 
})

    it('should add a recipe object to the collection of recipes and return it', function (done) {
        api.get("/recipes")
        .set("Accept", "application/json")
        .end(function(error, response) {
            expect(response.body.length).to.equal(3);
            done()
        })
    })
});

describe('PUT /recipes', function() {
    let recipesUpdate

    before (function(done) {
        api.get("/recipes")
        .set("Accept", "application/json")
        .end(function(error, response) {
            recipesUpdate = response.body[0]
            done()
        })
    })
before (function(done) {
    api.put(`/recipes/${recipesUpdate._id}/edit`)
    .set("Accept", "application/json")
    .send({
        "_id": recipesUpdate._id,
        "name": "New Recipe",
        "ingredients": "New Ingredients",
        "instructions": "New Instructions"
    })
    .end (function(error, response) {
        done()
    })
})

it ("can update recipe by id", function (done) {
    api.get(`/recipes/${recipesUpdate._id}`)
    .set("Accept", "application/json")
    .end (function (error, response) {
        expect(response.body.name).to.equal("New Recipe")
        done()
    })
})
});

