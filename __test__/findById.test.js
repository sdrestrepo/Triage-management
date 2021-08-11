const request = require("supertest");
const app = require("../src/app");

describe("GET /find-by-id/:id", () => {
    it("should get a patient whith this id", async () => {
        const response = await request(app).get("/find-by-id/1")
        expect(response.error).toBe(false)
        expect(response.status).toBe(200)
        expect(response.body.body).not.toBeNull()
        expect(response.body.body.id).toBe(1);

    })
})