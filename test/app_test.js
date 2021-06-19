/**
 * 
 * Testing routes using supertest
 * 
 */

//dependencies
const assert = require('assert')
const request = require('supertest')
const app = require('../app')

// Describe test cases
describe('app\'s routes tests', ()=>{
    it('should return list of data for a valid city', done => {
        //create a fake app using supertest
        request(app)
            .get('/forecast?city=ujjain&orderBy=asc')
            .end((err, response)=>{
                assert(response.status === 200)
                assert(response.body.length > 0)
                assert(response.body[0].hasOwnProperty('temp'))
                assert(response.body[0].hasOwnProperty('wind'))
                assert(response.body[0].hasOwnProperty('dt'))
                done()
            })
    })
})