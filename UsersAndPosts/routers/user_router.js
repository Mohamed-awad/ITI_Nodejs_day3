const express = require('express');

const user_router = express.Router()
const user_helper = require('../user_helper');

// middleware that is specific to this user router

user_router.get('/', (req, res, next) =>{
    user_helper.list_users(req, res);
});

user_router.post('/', (req, res, next) =>{
    user_helper.add_user(req, res);
});

user_router.get('/:id', (req, res, next) =>{
    user_helper.get_user(req, res);
});

user_router.put('/:id', (req, res, next) =>{
    user_helper.update_user(req, res);
});

user_router.delete('/:id', (req, res, next) =>{
    user_helper.delete_user(req, res);
});

user_router.get('/:id/posts', (req, res, next) =>{
    user_helper.get_user_posts(req, res);
});

user_router.get('/:id/posts/add', (req, res, next) =>{
    user_helper.add_user_post(req, res);
});

module.exports = user_router;
