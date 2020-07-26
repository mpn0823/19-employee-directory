import { createContext } from "react";

const Context = createContext({
    filter: "",
    order: "ascending",
});

export default Context;
