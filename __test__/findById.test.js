const request = require('supertest');
const app = require('../src/app');

describe('GET /patients/:id', () => {
  it('should get a patient whith this id', async () => {
    const response = await request(app).get('/patients/1');
    expect(response.error).toBe(false);
    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();
    expect(response.body.id).toBe(1);
  });
});
