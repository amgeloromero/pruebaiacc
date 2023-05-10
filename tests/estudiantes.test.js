import request from "supertest";
import app from "../src/app";
import { pool } from "../src/db";

describe("Estudents Routes", () => {
  it("list of estudents", async () => {
    const res = await request(app).get("/api/estudiante");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.arrayContaining([
        expect.objectContaining({
          id: expect.any(Number),
          name: expect.any(String),
          carrera: expect.any(String),
        }),
      ])
    );
  });

  it("should create a new estudents", async () => {
    const res = await request(app).post("/api/estudiante").send({
      name: "ignacia dominguez",
      carrera: "enfermeria",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: "pedro gonzales",
        carrera: "ingeniero en construccion",
      })
    );
  });

  it("should get an student by id", async () => {
    const res = await request(app).get("/api/estudiante/1");
    expect(res.statusCode).toEqual(200);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: 1,
        name: expect.any(String),
        carrera: expect.any(String),
      })
    );
  });

  it("delete an student by id", async () => {
    const res = await request(app).delete("/api/estudiante/1");
    expect(res.statusCode).toEqual(204);
  });

  afterAll(async () => {
    await pool.end();
  });
});
