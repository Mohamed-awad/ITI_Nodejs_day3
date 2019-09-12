const express = require('express');
const PORT = process.env.PORT || 3000;
const app = express();

const mongoose = require('mongoose');
const user_model = require('./model/user');
const post_model = require('./model/post');

require('./mongo-config');

const user_router = require('./routers/user_router');
const post_router = require('./routers/post_router');

app.use('/users', user_router);
app.use('/posts', post_router);


app.use(express.urlencoded());



app.listen(3000, ()=>{
    console.log("server start");
});
