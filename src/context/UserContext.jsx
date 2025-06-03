// UserContext.js
import React, { createContext, useEffect, useState } from 'react';
import { io } from 'socket.io-client';

export const context = createContext();

function UserContext({ children }) {
  const serverUrl = "http://localhost:3000";
  const [socket, setSocket] = useState(null);

  useEffect(() => {
    const newSocket = io(serverUrl); // Connect to server
    setSocket(newSocket);

    return () => newSocket.close(); // Cleanup on unmount
  }, [serverUrl]);

  const value = {
    serverUrl,
    socket,
  };

  return (
    <context.Provider value={value}>
      {children}
    </context.Provider>
  );
}

export default UserContext;
