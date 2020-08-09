import { createStore } from "./objects";

describe("Test a objetos", () => {
  test("Agregar un item a store", () => {
    const store = createStore();
    store.addItem({
      name: "Eisten",
      id: 10,
      country: "Peru",
    });
    expect(store.getStore()[0]).toEqual({
      name: "Eisten",
      id: 10,
      country: "Peru",
    });
  });
  test("Buscar un item por el id", () => {
    const store = createStore();
    store.addItem({
      name: "Eisten",
      id: 10,
      country: "Peru",
    });
    expect(store.getById(10)).toEqual({
      name: "Eisten",
      id: 10,
      country: "Peru",
    });
    expect(store.getById(10)).toMatchObject({
      name: "Eisten",
    });
    expect(store.getById(10)).toHaveProperty("name", "Eisten");
  });
});
