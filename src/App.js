import React, { useState, Fragment } from "react";
import employees from "./employees.json";
import { v4 as uuid } from "uuid";

// Components
import Form from "./components/Form";
import Card from "./components/Card";

const App = () => {
    const [state, setState] = useState({
        filter: "",
        order: "ascending",
    });

    // Update app state whenever user provides input
    const handleInput = () => {
        setState({
            filter: document.getElementById("filter").value,
            order: document.getElementById("order").value,
        });
    };

    // Compare function to sort employee objects alpabetically by country
    const strCompare = (a, b) =>
        a.location.country.localeCompare(b.location.country);

    return (
        <Fragment>
            <Form handleInput={handleInput} />
            <div className="container">
                <div className="row">
                    {employees
                        .filter(
                            (employee) =>
                                employee.location.country.slice(
                                    0,
                                    state.filter.length
                                ) === state.filter
                        )
                        .sort((a, b) =>
                            state.order === "ascending"
                                ? strCompare(a, b)
                                : strCompare(b, a)
                        )
                        .map((employee) => (
                            <Card employee={employee} key={uuid()} />
                        ))}
                </div>
            </div>
        </Fragment>
    );
};

export default App;
