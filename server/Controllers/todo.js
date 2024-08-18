const pool = require("../Config/connection");

exports.getTodos = async(req,res) => {
   try{
        const [result] = await pool.query("SELECT * FROM todos")
        res.status(200).send(result);
   }catch(err){
        res.status(500).send(err);
   }
}

exports.addTodos = async(req,res) => {

    const {label , status , description} = req.body

    try{
        const [result] = await pool.query("INSERT INTO todos (label,status,description) VALUES(?,?,?)" , [label,status,description])
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.editTodos = async(req,res) => {
    const {label , status , description,id} = req.body

    try{
        const [result] = await pool.query("UPDATE todos SET label = ?, status = ?, description = ? WHERE id = ?" , [label,status,description,id])
        res.status(200).send(result);
    }catch(err){
        res.status(500).send(err);
    }
}

exports.deleteTodos = async(req,res) => {

    const {id} = req.body

    try{
        const [result] = await pool.query("DELETE FROM todos WHERE id = ?",[id])
        res.status(200).send(result);
    }catch{
        res.status(500).send(err);
    }
}