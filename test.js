const fetch = require("node-fetch");
const fs = require("fs");

fetch("https://randomuser.me/api/?results=100")
    .then((response) => response.json())
    .then((data) => fs.writeFileSync("employees.json", JSON.stringify(data)))
    .catch((err) => console.log(err));
