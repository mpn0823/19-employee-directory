import React, { Fragment, useState } from "react";
// import employees from "./employees.json";
// import { v4 as uuid } from "uuid";

// Components
import Form from "./components/Form";

// Utils
import Context from "./utils/Context";

const App = () => {
    const [state, setState] = useState({
        filter: "",
        order: "ascending",
    });

    const handleInput = (event) => {
        setState({
            filter: document.getElementById("filter").value,
            order: document.getElementById("order").value,
        });
    };

    return (
        <Context.Provider value={state}>
            <Fragment>
                <Form handleInput={handleInput} />
            </Fragment>
        </Context.Provider>
    );
};

export default App;
