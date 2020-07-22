import React from "react";

const EmployeeCard = (employee) => {
    return (
        <div className="card fluild">
            <img className="section media" src={employee.image} alt=""></img>
            <div>
                <p>
                    {employee.firstName} {employee.lastName}
                </p>
                <p>Contact Information</p>
                <ul>
                    <li>email: {employee.email}</li>
                    <li>phone: {employee.phone}</li>
                    <li>cell: {employee.cell}</li>
                </ul>
            </div>
        </div>
    );
};

export default EmployeeCard;
