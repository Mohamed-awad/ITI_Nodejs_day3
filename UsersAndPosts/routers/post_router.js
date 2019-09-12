const express = require('express');

const post_router = express.Router()
const post_helper = require('../post_helper');

// middleware that is specific to this user router

post_router.get('/', (req, res, next) =>{
    post_helper.list_posts(req, res);
});

post_router.post('/add', (req, res, next) =>{
    post_helper.add_post(req, res);
});

post_router.get('/:id', (req, res, next) =>{
    post_helper.get_post(req, res);
});

post_router.get('/:id/user', (req, res, next) =>{
    post_helper.get_post_user(req, res);
});

module.exports = post_router;
