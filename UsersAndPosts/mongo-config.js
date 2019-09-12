const mongoose = require('mongoose');
const mongo_url = process.env.mongo_url || 'mongodb://localhost:27018/users_and_posts';

mongoose.connect(mongo_url, {
    autoReconnect: true,
    reconnectTries: Number.MAX_VALUE,
    useNewUrlParser: true
}, (err) =>{
    if(!err){
        console.log("db connected");
    }
});