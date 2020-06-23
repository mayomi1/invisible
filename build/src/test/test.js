"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
const { getArrayInput } = require('../../src');
const chai = require('chai');
const expect = chai.expect;
describe('Get weather and time', () => {
    it('should return an error if the input is not an array', async () => {
        const response = await getArrayInput('sds');
        expect(response).to.exist;
        expect(response).to.be.an('object');
        expect(response).to.have.property('error');
        expect(response).to.have.property('httpCode');
        expect(response.error).to.be.true;
        expect(response.httpCode).to.equal(400);
    });
    it('should return an error if empty parameter was passed', async () => {
        const response = await getArrayInput();
        expect(response).to.exist;
        expect(response).to.be.an('object');
        expect(response).to.have.property('error');
        expect(response).to.have.property('httpCode');
        expect(response.error).to.be.true;
        expect(response.httpCode).to.equal(400);
    });
    it('should return an error if empty array was pass', async () => {
        const response = await getArrayInput([]);
        expect(response).to.exist;
        expect(response).to.be.an('object');
        expect(response).to.have.property('error');
        expect(response).to.have.property('httpCode');
        expect(response.error).to.be.true;
        expect(response.httpCode).to.equal(400);
    });
    it('should return an array of current time and weather', async (done) => {
        const keys = ['New York', 10005];
        return new Promise(resolve => {
            getArrayInput(keys).then((result) => {
                expect(result).to.exist;
                expect(result).to.be.an('object');
                expect(result).to.have.property('data');
                expect(result.data).to.be.an('array');
                expect(result.data[0]).to.be.an('object');
                expect(result.data[0]).to.have.property('location');
                expect(result.data[0]).to.have.property('current_time');
                expect(result.data[0]).to.have.property('weather');
                expect(result.data[0]).to.have.property('main');
                resolve();
            });
            done();
        });
    });
    it('should return error is city or zip code is not correct', async (done) => {
        return new Promise(resolve => {
            getArrayInput(['32323llw']).then((result) => {
                expect(result).to.have.property('error');
                expect(result.httpCode).to.equal(404);
                resolve();
            });
            done();
        });
    });
});
//# sourceMappingURL=test.js.map