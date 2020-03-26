const express = require('express');
const router = express.Router();

const DBHelper = require('../DBHelper');
const sql = require('../sqlMap')

router.post('/addTodo', (req, res) => {
    let sqlStr = sql.todo.add;
    let params = req.body;
    let conn = new DBHelper().getConn();
    conn.query(sqlStr, [params.text, params.isComplete, params.isEdit], (err, result) => {
        if (err) {
            res.json(err);
        } else {
            res.json(err);
        }
    });
    conn.end();
})