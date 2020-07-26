import React from "react";

const Card = ({
    employee: { picture },
    employee: { name },
    employee: { location },
}) => (
    <div className="card">
        <img src={picture.large} alt="" width="100%"></img>
        <p>
            {name.last}, {name.first}
        </p>
        <p>
            {location.city}, {location.state}, {location.country}
        </p>
    </div>
);

export default Card;
