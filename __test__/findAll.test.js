jest.mock('../src/repository/patient-repository');
const service = require('../src/service/find_all_patients');

describe('GET /patients', () => {
  it('should get a list of the patients', async () => {
    const response = await service.findAllPatients();

    expect(response.patients).not.toBeNull();
    expect(response.patients).not.toBeUndefined();
    expect(response.patients.length).toBe(1);
    expect(Array.isArray(response.patients)).toBe(true);
  });
});
