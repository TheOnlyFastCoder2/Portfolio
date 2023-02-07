import { createContext } from "react";
export default createContext<[string, React.Dispatch<string>]>(['', () => {}])