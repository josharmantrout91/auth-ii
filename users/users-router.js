const router = require("express").Router();

const Users = require("../users/users-model");

const restricted = require("../auth/restricted-middelware");

router.get("/", restricted, (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
