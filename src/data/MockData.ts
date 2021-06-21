import { IUserData } from "./Storage";

const MockData: IUserData = {
  gender: "female",
  name: {
    title: "Ms",
    first: "Sharon",
    last: "Martin",
  },
  location: {
    street: {
      number: 7122,
      name: "Park Avenue",
    },
    city: "Birmingham",
    state: "West Glamorgan",
    country: "United Kingdom",
    postcode: "D76 5NL",
    coordinates: {
      latitude: "8.7920",
      longitude: "138.5511",
    },
    timezone: {
      offset: "+6:00",
      description: "Almaty, Dhaka, Colombo",
    },
  },
  email: "sharon.martin@example.com",
  login: {
    uuid: "d9ecb91e-b20f-415b-970d-a08a4bbff2b0",
    username: "ticklishostrich126",
    password: "427900",
    salt: "kb8euTeD",
    md5: "60548787783d66326af4109479de611a",
    sha1: "54bfd9d05b1cdd85aff5c915abc864f3a3189b0a",
    sha256: "5e37f966ef6ae3a1d094d15655888f6b2b397713a01137d0e915519c0f0bc926",
  },
  dob: {
    date: "1973-09-22T02:49:00.954Z",
    age: 48,
  },
  registered: {
    date: "2014-02-27T12:52:38.002Z",
    age: 7,
  },
  phone: "016977 28493",
  cell: "0757-170-954",
  id: {
    name: "NINO",
    value: "OT 94 48 68 T",
  },
  picture: {
    large: "https://randomuser.me/api/portraits/women/25.jpg",
    medium: "https://randomuser.me/api/portraits/med/women/25.jpg",
    thumbnail: "https://randomuser.me/api/portraits/thumb/women/25.jpg",
  },
  nat: "GB",
};

export const emptyMock: IUserData = {
  gender: "",
  name: {
    title: "",
    first: "",
    last: "",
  },
  location: {
    street: {
      number: 0,
      name: "",
    },
    city: "",
    state: "",
    country: "",
    postcode: "",
    coordinates: {
      latitude: "",
      longitude: "",
    },
    timezone: {
      offset: "",
      description: "",
    },
  },
  email: "",
  login: {
    uuid: "",
    username: "",
    password: "",
    salt: "",
    md5: "",
    sha1: "",
    sha256: "",
  },
  dob: {
    date: "",
    age: 0,
  },
  registered: {
    date: "",
    age: 0,
  },
  phone: "",
  cell: "",
  id: {
    name: "",
    value: "",
  },
  picture: {
    large: "",
    medium: "",
    thumbnail: "",
  },
  nat: "",
};

export default MockData;
