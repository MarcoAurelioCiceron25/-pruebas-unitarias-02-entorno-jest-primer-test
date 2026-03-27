import request from "supertest";
import app from "../src/app";

describe("GET /tareas", () => {
  it("Debe responder con un arreglo de tareas", async () => {
    const response = await request(app).get("/tareas");

    // Código de estado correcto
    expect(response.status).toBe(200);

    // Respuesta es un arreglo
    expect(Array.isArray(response.body)).toBe(true);

    // Al menos una tarea
    expect(response.body.length).toBeGreaterThan(0);

    // Propiedades esperadas
    expect(response.body[0]).toHaveProperty("titulo");
    expect(response.body[0]).toHaveProperty("completada");
    expect(response.body[0]).toHaveProperty("descripcion");
  });
});
