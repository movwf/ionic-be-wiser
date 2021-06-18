import io from "socket.io-client";

const url = "https://wunder-provider.herokuapp.com";

let socket;

// Initialise socket
export const socketInit = () => {
  socket = io(url, { path: "/socket.io/", transports: ["websocket"] });
};

// Data stream
// Automatically closeable
export const getSocketData = (cb, timeout) => {
  if (!socket) return false;

  socket.on("userList", (data) => {
    cb(data.results[0]);
  });

  setTimeout(() => {
    closeSocket();
  }, timeout);
};

// Kill socket
export const closeSocket = () => {
  socket.close();
};
