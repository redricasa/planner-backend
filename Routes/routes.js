const router = require("express").Router();
let Task = require("../Models/todo/todo.model");
// my TODO routes
// task add
router.post("/add", (req, res) => {
  res.json({'sam':'samri'})
  // TODO-----------
});
// task edit
router.put("/edit", (req, res) => {
  // res.render('index')
  // TODO-----------
});
// task delete
router.delete("/delete", (req, res) => {
  // res.render('index')
  // TODO-----------
});


// export routes
module.exports = router;
