const request = require("supertest");
const app = require("../src/app");
const { customAlphabet } = require("nanoid");

describe("POST /new-patient", () => {
  it("should POST a new user", async () => {
    const nanoid = customAlphabet('1234567890', 4);
    const patientId = nanoid(4);
    let patient = {
      id: patientId,
      name: "John",
      lastName: "Doe",
      identification: "007",
      priority: "3",
      entry_time: "2021-08-11 17:27:49",
    };
    const response = await request(app).post("/new-patient").send(patient);
    expect(response.error).toBe(false);
    expect(response.status).toBe(200);
  });
});
