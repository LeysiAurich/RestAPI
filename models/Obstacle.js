const mongoose= require('mongoose');
const Schema= mongoose.Schema;

const ObstacleSchema= new Schema({
  posx:{type:String},
  posy:{type:String}
});

module.exports = User=mongoose.model('Obstacle',ObstacleSchema);