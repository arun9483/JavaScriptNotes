
var  objFactory = new EnemyShipFactory();

var UFO = objFactory.createEnemyShip("U", "killerUFO");

if(UFO){
    UFO.setDamagingCapability(400);
    UFO.operate();
    UFO.hitEnemy();
}

var ROCKET = objFactory.createEnemyShip("R", "destroyerRocket");

if(ROCKET){
    ROCKET.setDamagingCapability(200);
    ROCKET.launch();
    ROCKET.hitEnemy();
}




