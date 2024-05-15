// example script for hash generation
const bcrypt = require("bcryptjs");
const saltRounds = 10;
const password = "bunny123";

bcrypt
    .hash(password, saltRounds)
    .then((hash) => {
        console.log("Hash: ", hash);
    })
    .catch((err) => console.error(err.message));
