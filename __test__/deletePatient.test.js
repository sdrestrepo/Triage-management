const request = require('supertest');
const app = require('../src/app');

describe('DELETE /patients/:id', () => {
  it('should DELETE a patient whith this id', async () => {
    const response = await request(app).delete('/patients/96');
    expect(response.error).toBe(false);
    expect(response.status).toBe(200);
  });
});
