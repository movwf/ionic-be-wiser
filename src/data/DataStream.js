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

  console.log("Socket : ", socket);

  socket.on("userList", (data) => {
    cb(data.results[0]);
  });

  setTimeout(() => {
    closeSocket();
    console.log("Socket closed." + socket);
  }, timeout);
};

// Kill socket
export const closeSocket = () => {
  socket.close();
};
