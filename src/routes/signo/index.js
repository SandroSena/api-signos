const router = require("express").Router();
const signoController = require("../../controllers/signoController");

router.get("/", (req, res, next) => {
  const { name, birthdate } = req.query;
  const starSign = signoController.getSigno(birthdate)      

  res.status(200).send({ name, birthdate, starSign });
});

exports.default = router;
