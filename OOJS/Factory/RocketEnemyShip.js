function RocketEnemyShip (name) {
    EnemyShip.call(this, name);
    this.damagingCapability = 20;
    this.distance = 30;
}

RocketEnemyShip.prototype = Object.create(EnemyShip.prototype);
RocketEnemyShip.prototype.constructor = RocketEnemyShip;

RocketEnemyShip.prototype.launch = function () {
    console.log(this.getName() + "rocket is launched. It will hit an enemy " + this.getDistance() + "km away from it.");
}
                
RocketEnemyShip.prototype.getDistance = function () {
    return this.distance;    
}