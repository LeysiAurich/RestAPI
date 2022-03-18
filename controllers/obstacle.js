const mongoose= require('mongoose');
const Obstacle = require('../models/Obstacle');


const findAllObstacles =(req, res)=>{
    Obstacle.find((err,obstacle)=>{
        err&& res.status(500).send(err.message);
        res.status(200).json(obstacle);
    })
}

const findById=(req,res)=>{
    Obstacle.findById(req.params.id,(err,obstacle)=>{
        err&& res.status(500).send(err.message);
        res.status(200).json(obstacle);
    })
}

const addObstacle =(req, res)=>{

    let obstacle= new Obstacle({
        posx: req.body.posx,
        posy: req.body.posy,
    });

    obstacle.save((err,obs)=>{
        err&& res.status(500).send(err.message);
        res.status(200).json(obs);
    });
};

const findByIdAndDelete=(req,res)=>{
    Obstacle.findByIdAndDelete(req.params.id,(err,obstacle)=>{
        err&& res.status(500).send(err.message);
        res.status(200).json(obstacle);
    })
};

 
const AObstacle = (req,res)=>{

  let id =  req.params.id
  let update= req.body

  Obstacle.findByIdAndUpdate(id,update,(err,ObstacleUpdate)=>{
    err&& res.status(500).send(err.message);
    res.status(200).json("Obstaculo Actualizado");
  })
   
};

    
module.exports = {findAllObstacles,findById,addObstacle,findByIdAndDelete,AObstacle};

