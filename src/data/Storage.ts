import { Storage, Drivers } from "@ionic/storage";

let store: any = null;
type Key = string | number;
type Value = string | number;

export const createStore = (name = "_wiser") => {
  store = new Storage({
    name,
    driverOrder: [Drivers.IndexedDB, Drivers.LocalStorage],
  });

  store.create();
};

export const set = (key: Key, val: Value) => {
  store.set(key, val);
};

export const get = async (key: Key) => {
  return await store.get(key);
};

export const remove = async (key: Key) => {
  await store.remove(key);
};

export const clear = async () => {
  await store.clear();
};

// TODO : Person data object initiate
