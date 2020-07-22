import React, { useState, Fragment } from "react";
import results from "./employees.json";
import EmployeeCard from "./components/EmployeeCard";

const App = () => {
    const [state, setState] = useState(results);

    return (
        <Fragment>
            {state.results.map((employee) => (
                <EmployeeCard
                    image={employee.picture.large}
                    firstName={employee.name.first}
                    lastName={employee.name.last}
                    email={employee.email}
                    phone={employee.phone}
                    cell={employee.cell}
                />
            ))}
        </Fragment>
    );
};

export default App;
