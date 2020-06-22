const {getArrayInput} = require("../../build/src");

const chai = require('chai');
const expect = chai.expect;

describe('Get weather and time', () => {
  it('should return weather', async () => {
    // const response = await getArrayInput('')
  });

  it('should return an error if the input is not an array', async () => {
    let response = await getArrayInput('sds')
    expect(response).to.exist
    expect(response).to.be.an('object')
    expect(response).to.have.property('error')
    expect(response).to.have.property('httpCode')
    expect(response.error).to.be.true
    expect(response.httpCode).to.equal(400)
  });

  it('should return an error if empty parameter was passed', async () => {
    let response = await getArrayInput()
    expect(response).to.exist
    expect(response).to.be.an('object')
    expect(response).to.have.property('error')
    expect(response).to.have.property('httpCode')
    expect(response.error).to.be.true
    expect(response.httpCode).to.equal(400)
  });

  it('should return an error if empty array was pass', async () => {
    let response = await getArrayInput([])
    expect(response).to.exist
    expect(response).to.be.an('object')
    expect(response).to.have.property('error')
    expect(response).to.have.property('httpCode')
    expect(response.error).to.be.true
    expect(response.httpCode).to.equal(400)
  });

  it('should return an array of current time and weather', async (done) => {
    const keys = ['london', 'lagos']

    return new Promise(async (resolve, reject) => {
      try {
        const response = await getArrayInput(keys);
        expect(response).to.exist
        expect(response).to.be.an('object')
        expect(response).to.have.property('data')
        expect(response.data).to.be.an('array')
        // expect(response.data[0]).to.be.an('object')
        // expect(response.data[0]).to.have.property('location')
        // expect(response.data[0]).to.have.property('current_time')
        // expect(response.data[0]).to.have.property('weather')
        // expect(response.data[0]).to.have.property('main')
        resolve(response);
        done()
      } catch (error) {
        done(error)
      }
    })


  });

  it('should return error is city or zip code is not correct', async () => {
    let response = await getArrayInput(['32323llw']);
    expect(response).to.exist
    expect(response).to.throw(new Error('City not found'));
    done();
  });
})
