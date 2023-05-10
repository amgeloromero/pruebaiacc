import app from "../src/app";
import request from "supertest";

describe("Index Routes", () => {
  it("welcome", async () => {
    const res = await request(app).get("/");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual({ message: "****** Bienvenido api test iacc *******" });
  });


});
