function UFOEnemyShip (name) {
    EnemyShip.call(this, name);
    this.damagingCapability = 20;
    this.enemyKilled = 100;
}

UFOEnemyShip.prototype = Object.create(EnemyShip.prototype);
UFOEnemyShip.prototype.constructor = UFOEnemyShip;

UFOEnemyShip.prototype.operate = function () {
    console.log(this.getName() + "UFO is operated. It will destroy " + this.getEnemyKilled() + " enemies simultaneously.");
}
                
UFOEnemyShip.prototype.getEnemyKilled = function () {
    return this.enemyKilled;    
}
