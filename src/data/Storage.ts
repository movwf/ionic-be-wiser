import { Storage, Drivers } from "@ionic/storage";
import MockData from "./MockData";

let storage: any = null;

type Key = string | number;
type Value = string | number;
interface IUserList {
  uuid: string;
  name: string;
  age: number;
}

export const defaultUserDataKey = "default";
// User id list
const userList: IUserList[] = [{ uuid: "default", name: "Sharon", age: 48 }];

// Interface for mock data
export interface IUserData {
  cell: string;
  dob: { date: string; age: number };
  email: string;
  gender: string;
  id: { name: string; value: string };
  location: {
    city: string;
    coordinates: { latitude: string; longitude: string };
    country: string;
    postcode: string;
    state: string;
    street: { number: number; name: string };
    timezone: { offset: string; description: string };
  };
  login: {
    uuid: string;
    username: string;
    password: string;
    salt: string;
    md5: string;
    sha1: string;
    sha256: string;
  };
  name: {
    title: string;
    first: string;
    last: string;
  };
  nat: string;
  phone: string;
  picture: {
    large: string;
    medium: string;
    thumbnail: string;
  };
  registered: {
    date: string;
    age: number;
  };
}

// Create IndexedDB storage
// Append first default value
export const createStore = (name = "_wiser") => {
  storage = new Storage({
    name,
    driverOrder: [Drivers.IndexedDB],
  });

  storage.create();
  // Init data
  set(defaultUserDataKey, JSON.stringify(MockData));
};

// Set a key - value pair in IndexedDB
export const set = (key: Key, val: Value) => {
  storage.set(key, val);
};

// Get value by key
export const get = async (key: Key) => {
  return (await storage) !== null ? storage.get(key) : {};
};

// Remove key-value pair
export const remove = async (key: Key) => {
  await storage.remove(key);
};

// Empty whole IndexedDB
export const clear = async () => {
  await storage.clear();
};

// Append incoming data through websocket into data list to frequently push to list page data state
export const appendUserData = (data: IUserData) => {
  // Append uuid to user list to profiles page list
  userList.push({
    uuid: data.login.uuid,
    name: data.name.first,
    age: data.dob.age,
  });

  console.log("Websocket Data : ", data);

  // Append new db entry
  set(data.login.uuid, JSON.stringify(data));
};

// Converted data getter from stringified value
export const getUserData = (uuid: string) => {
  get(uuid).then((data) => {
    return JSON.parse(data);
  });
};

// Getter for in case
export const getUserList = () => {
  return userList;
};

// State updating callback
export const updateDataListState = (cb: any, updateFrequency: number) => {
  let passIndex = 1; // For tracking the recursive part

  let prevState: IUserList[] = [userList[0]];

  const updateInterval = setInterval(() => {
    console.log("Append(state) : ", userList[passIndex]);

    prevState = [...prevState, userList[passIndex]];
    cb(prevState);

    passIndex++;

    if (passIndex === userList.length) clearInterval(updateInterval);
  }, updateFrequency);
};
