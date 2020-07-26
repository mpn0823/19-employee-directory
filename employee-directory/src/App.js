import React, { useState } from "react";
import results from "./employees.json";
import { v4 as uuid } from "uuid";

const App = () => {
    // Define the state
    const [state, setState] = useState({
        master: results,
        viewable: results,
    });
    // Create context wrapper
    const Context = React.createContext({
        master: [],
        viewable: [],
    });

    // EventHandler
    const handleFilter = (event) => {
        const newViewable = state.master.filter(
            (x) => x.location.country === event.target.value
        );
        setState({
            ...state,
            viewable: newViewable,
        });
    };

    // const handleSortOrder = () =>

    return (
        <div className="row">
            {state.viewable.map((employee) => (
                <div className="col-sm" key={uuid()}>
                    <EmployeeCard
                        image={employee.picture.large}
                        firstName={employee.name.first}
                        lastName={employee.name.last}
                        location={employee.location}
                        email={employee.email}
                        phone={employee.phone}
                        cell={employee.cell}
                    />
                </div>
            ))}
        </div>
    );
};

export default App;
