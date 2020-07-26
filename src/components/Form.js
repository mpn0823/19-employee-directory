import React from "react";

const Form = (props) => {
    return (
        <form
            onSubmit={(event) => event.preventDefault()}
            onChange={props.handleInput}>
            <input type="text" id="filter" placeholder="filter by country" />
            <select id="order">
                <option value="ascending">ascending</option>
                <option value="descending">descending</option>
            </select>
        </form>
    );
};

export default Form;
