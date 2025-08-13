import { createContext } from "react";

export const UserContext = createContext<{ username: string }>({
  username: "",
});
