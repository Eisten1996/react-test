import { createStore } from "./arrays";

describe("Haciendo pruebas a listas / Arrays", () => {
  test("Probando agregar una nueva fruta", () => {
    const store = createStore();
    store.addFruit("fresa");
    expect(store.getfruits()).toStrictEqual(["fresa"]);
  });
  test("Probando agregar dos nuevas frutas", () => {
    const store = createStore();
    store.addFruit("fresa");
    store.addFruit("melon");
    expect(store.getfruits()).toStrictEqual(["fresa", "melon"]);
  });
  test("Probando si contiene fruta especifica", () => {
    const store = createStore();
    store.addFruit("manzana");
    store.addFruit("pera");
    store.addFruit("banana");
    expect(store.getfruits()).toContain("pera");
    expect(store.getfruits()).not.toContain("naranja");
  });
  test("Probando la longitud del array", () => {
    const store = createStore();
    store.addFruit("manzana");
    store.addFruit("pera");
    store.addFruit("banana");
    expect(store.getfruits()).toHaveLength(3);
  });
  test("Probando agregar un objeto con informacion de frutas", () => {
    const store = createStore();
    store.addFruit({
      name: "fruta",
      price: 12,
    });
    expect(store.getfruits()).toContainEqual({
      name: "fruta",
      price: 12,
    });
  });
});
