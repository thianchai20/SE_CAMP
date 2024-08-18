const router = require("express").Router();
const {getTodos,addTodos,editTodos,deleteTodos} = require("../Controllers/todo")

router.get("/todos",getTodos)
router.post("/todos",addTodos)
router.put("/todos",editTodos)
router.delete("/todos",deleteTodos)

module.exports = router;