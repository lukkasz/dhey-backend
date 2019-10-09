const request = require('supertest')
const app = require('../app');

test('Should return Unauthorized', async () => {
  await request(app).post('/encoder').send({
    inputString: 'XXAA'
  }).expect(401)
})

test('Should return encoded string "X3Y4Z2Q1X2" for the input string "XXXYYYYZZQXX"', async () => {
  const response = await request(app)
  .post('/encoder')
  .set('authorization', 'xyz0987654321')
  .send({
    inputString: 'XXXYYYYZZQXX'
  })
  .expect(200)
  
  expect(response.body).toMatchObject({
    encodedString: 'X3Y4Z2Q1X2'
  })
})