import request from "supertest";
import app from "../src/app";
import { pool } from "../src/db";

describe("Estudents Routes", () => {
  it("list of estudents", async () => {
    const res = await request(app).get("/api/estudiantes");
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
    const res = await request(app).post("/api/estudiantes").send({
      name: "ignacia dominguez",
      carrera: "enfermeria",
    });
    expect(res.statusCode).toEqual(201);
    expect(res.body).toEqual(
      expect.objectContaining({
        id: expect.any(Number),
        name: "ignacia dominguez",
        carrera: "enfermeria",
      })
    );
  });

  it("should get an student by id", async () => {
    const res = await request(app).get("/api/estudiantes/1");
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
    const res = await request(app).delete("/api/estudiantes/8");
    const POSSIBLE_VALUES = [204,404];
    expect(POSSIBLE_VALUES).toContain(res.statusCode);
    });

  afterAll(async () => {
    await pool.end();
  });
});
