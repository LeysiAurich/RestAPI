const ObstacleController =require("../controllers/obstacle");
const express= require("express");

const router =express.Router();

router.get("/all",ObstacleController.findAllObstacles);
router.get("/:id",ObstacleController.findById);
router.post("/add",ObstacleController.addObstacle);
router.delete("/:id",ObstacleController.findByIdAndDelete);
router.put("/:id",ObstacleController.AObstacle);


module.exports =router;