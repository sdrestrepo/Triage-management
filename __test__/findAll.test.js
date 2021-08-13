const request = require('supertest');
const app = require('../src/app');

describe('GET /patients', () => {
  it('should get a patient whith this id', async () => {
    const response = await request(app).get('/patients');
    expect(response.error).toBe(false);
    expect(response.status).toBe(200);
    expect(response.body).not.toBeNull();
    expect(response.body.length).toBe(10);
    expect(Array.isArray(response.body)).toBe(true);
  });
});
