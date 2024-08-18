const router = require("express").Router();
const {getTodos,addTodos,editTodos,deleteTodos} = require("../Controllers/todo")

router.get("/todo",getTodos)
router.post("/todo",addTodos)
router.put("/todo",editTodos)
router.delete("/todo",deleteTodos)

module.exports = router;