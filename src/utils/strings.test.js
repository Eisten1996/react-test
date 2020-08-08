import { saluda, getId, despide } from "./strings";
describe("Pruebas de strings", () => {
  const saludo = saluda("Eisten");
  const id = getId("Eisten");
  const saludoDespide = despide();
  test("Probando la funcion saluda", () => {
    expect(saludo).toMatch("Hola soy");
    // expect(saludo).toMatch(/\d/);
  });
  test("Probando la funcion getId", () => {
    expect(id).toMatch(/\d{2}-\d{3}/);
  });
  test("Probando la funcion despide", () => {
    // expect(saludoDespide).toMatch("Bye");
    expect(saludoDespide).not.toMatch("Bye");
  });
});
