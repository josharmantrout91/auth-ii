const jwt = require("jsonwebtoken");
const secrets = require("../secret/secrets");

module.exports = (req, res, next) => {
  const token = req.headers.authorization;

  if (token) {
    jwt.verify(token, secrets.jwtSecret, (err, decodedToken) => {
      if (err) {
        console.log(err);
        res.status(403).json("Access Denied");
      } else {
        req.decodedJwt = decodedToken;
        console.log("decoded token", req.decodedJwt);
        next();
      }
    });
  } else {
    res.status(401).json("You shall not pass!");
  }
};
