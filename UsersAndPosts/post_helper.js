const user_model = require('./model/user');
const post_model = require('./model/post');

const list_posts = (req, res) => {
    post_model.find({}, (err, data) => {
        if(!err)
            res.send(data);
        else
            res.send("error");
    });
};

const get_post = (req, res) => {
    post_model.findById(req.params.id,(err, data) =>{
        if(!err)
            res.send(data);
        else
            res.send("error");
    });
};

const add_post = (req, res) => {
    const new_post = new post_model({
        title: 'uuuuuuuuuu',
        body: 'IIIIIIIIIIIIITTTTTTTIIIIIII',
        user_id: "5c59c7b12e1324292d6410b6"
    });
    new_post.save((err) => {
        if(!err)
            res.send('post was saved');
        else
            res.send("error can not save post");
    });
};

const get_post_user = (req, res) => {
    post_model.findById(req.params.id, (err, data) => {
        if(!err){
            user_model.findById(data.user_id, (err, data) =>{
                res.send(data);
            });
        }
        else
            res.send("error");
    });
};

const post_helper = {
    list_posts: list_posts,
    get_post: get_post,
    add_post: add_post,
    get_post_user: get_post_user,
};

module.exports = post_helper;