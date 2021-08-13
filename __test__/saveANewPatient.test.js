const request = require('supertest');
const { customAlphabet } = require('nanoid');
const app = require('../src/app');

describe('POST /patients', () => {
  it('should POST a new user', async () => {
    const nanoid = customAlphabet('1234567890', 4);
    const patientId = nanoid(4);
    const patient = {
      id: patientId,
      name: 'John',
      lastName: 'Doe',
      identification: '007',
      priority: '3',
      entry_time: '2021-08-11 17:27:49',
    };
    const response = await request(app).post('/patients').send(patient);
    expect(response.error).toBe(false);
    expect(response.status).toBe(200);
  });
});
