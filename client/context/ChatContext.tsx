"use client";

import { createContext, useContext, useState } from "react";

const ChatContext = createContext<any>(null);

export const ChatProvider = ({ children }: any) => {
  const [selectedUser, setSelectedUser] = useState<any>(null);

  return (
    <ChatContext.Provider value={{ selectedUser, setSelectedUser }}>
      {children}
    </ChatContext.Provider>
  );
};

export const useChat = () => useContext(ChatContext);
