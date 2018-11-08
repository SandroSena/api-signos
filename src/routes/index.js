const server = require("../server").default;
const signo = require("./signo").default;

exports.initRoutes = function() {
  server.use("/signo", signo);
};
