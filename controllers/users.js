const mongoose= require('mongoose');
const User = require('../models/User');


const findAllUsers =(req, res)=>{
    User.find((err,users)=>{
        err&& res.status(500).send(err.message);
        res.status(200).json(users);
    })
}

const findById=(req,res)=>{
    User.findById(req.params.id,(err,user)=>{
        err&& res.status(500).send(err.message);
        res.status(200).json(user);
    })
}

const addUser =(req, res)=>{

    let user= new User({
        name: req.body.name,
    });

    user.save((err,usr)=>{
        err&& res.status(500).send(err.message);
        res.status(200).json(usr);
    });
};

const findByIdAndDelete=(req,res)=>{
    User.findByIdAndDelete(req.params.id,(err,user)=>{
        err&& res.status(500).send(err.message);
        res.status(200).json(user);
    })
};

 
const AUser = (req,res)=>{

  let id =  req.params.id
  let update= req.body

  User.findByIdAndUpdate(id,update,(err,UserUpdate)=>{
    err&& res.status(500).send(err.message);
    res.status(200).json("Usuario Actualizado");
  })
   
};

    
module.exports = {findAllUsers,findById,addUser,findByIdAndDelete,AUser};

