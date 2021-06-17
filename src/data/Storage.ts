import { Storage, Drivers } from "@ionic/storage";

let storage: any = null;
type Key = string | number;
type Value = string | number;

export const createStore = (name = "_wiser") => {
  storage = new Storage({
    name,
    driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
  });

  storage.create();
};

export const set = (key: Key, val: Value) => {
  storage.set(key, val);
};

export const get = async (key: Key) => {
  return await storage.get(key);
};

export const remove = async (key: Key) => {
  await storage.remove(key);
};

export const clear = async () => {
  await storage.clear();
};

// TODO : Person data object initiate
