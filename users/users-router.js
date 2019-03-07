const router = require("express").Router();
// gonna need some middleware here eventually

const Users = require("../users/users-model");

router.get("/", (req, res) => {
  Users.find()
    .then(users => {
      res.json(users);
    })
    .catch(err => res.send(err));
});

module.exports = router;
