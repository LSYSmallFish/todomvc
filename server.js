const express = require('express');
const bodyParser = require('body-parser'); // 处理前端post过来的数据

const serveStatic = require('serve-static');
const path = require('path');

const router = require('./serve/api/todoApi');

const app=express()

app.use('/',serveStatic(path.join(__dirname,'/dist')))
app.use('/api/todo',router);
app.use(bodyParser.json());
//解析 x-www-form-urlencoded,extended为false时数据为String或Array,true则是所有数据
app.use(bodyParser.urlencoded({
    extended: true
}));



const port=process.env.PORT||8080
app.listen(port)