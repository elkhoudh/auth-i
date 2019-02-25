require("dotenv").config();
const express = require("express");
const helmet = require("helmet");
const morgan = require("morgan");
const usersRoute = require("./users");
const loginRoute = require("./login");
const registerRoute = require("./register");

const server = express();

// Middleware
server.use(helmet());
server.use(morgan("dev"));

// Routers
server.use("/api/users", usersRoute);
server.use("/api/login", loginRoute);
server.use("/api/register", registerRoute);

// Server start
const port = process.env.PORT || 5000;

server.listen(port, () => console.log(`Listening on port ${port}`));
