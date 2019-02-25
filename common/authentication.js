const jwt = require("jsonwebtoken");

const genToken = user => {
  return new Promise((res, rej) => {
    jwt.sign(user, "SECRET KEY", { expiresIn: "1h" }, (err, token) => {
      if (err) {
        rej(err);
      } else {
        res(token);
      }
    });
  });
};

module.exports = {
  genToken
};
