const user_model = require('./model/user');
const post_model = require('./model/post');

const list_users = (req, res) => {
    user_model.find({}, (err, data) => {
        if(!err)
            res.send(data);
        else
            res.send("error");
    });
};

const add_user = (req, res) => {
    const new_user = new user_model({
        first_name: 'mohamed',
        last_name: 'awad',
        age: 23,
        email: 'awadmohamed233@gmail.com',
        phone: '01111451253',
    });
    new_user.save((err) => {
        if(!err)
            res.send('user was saved');
        else
            res.send("error can not save user");
    });
};

const get_user = (req, res) => {
    user_model.findById(req.params.id,(err, data) =>{
        if(!err)
            res.send(data);
        else
            res.send("error");
    });
};


const update_user = (req, res) => {
    user_model.update({_id: req.params.id}, {
        first_name: 'medo',
        age: 30,
    }, (err, data) => {
        if(!err, data)
        {
            res.send("user updated successfully");
        }
        else
            res.send("error can not update user");
    });
};

const delete_user = (req, res) => {
    user_model.deleteOne({_id: req.params.id}, (err) => {
        if(!err)
        {
            res.send("user deleted successfully");
        }
        else
            res.send("error can not delete user");
    });
};

const get_user_posts = (req, res) => {
    post_model.find({user_id: req.params.id}, (err, data) => {
        if(!err)
            res.send(data);
        else
            res.send("error");
    });
};

const add_user_post = (req, res) => {
    const new_post = new post_model({
        title: 'my post',
        body: 'posttttttttttsss',
        user_id: req.params.id
    });
    new_post.save((err) => {
        if(!err)
            res.send('user was saved');
        else
            res.send("error can not save user");
    });
};

const user_helper = {
    list_users: list_users,
    add_user: add_user,
    get_user: get_user,
    update_user: update_user,
    delete_user: delete_user,
    get_user_posts: get_user_posts,
    add_user_post: add_user_post,
};

module.exports = user_helper;