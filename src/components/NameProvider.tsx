import { createContext, ReactNode } from "react";
import useName from "../hooks/useName";

interface NameContextType {
  name: string;
  setName: (name: string) => void;
}

export const NameContext = createContext<NameContextType | null>(null);

function NameProvider({ children }: { children: ReactNode }) {
  const { name, setName } = useName();

  return (
    <NameContext.Provider value={{ name, setName }}>
      {children}
    </NameContext.Provider>
  );
}

export default NameProvider;
