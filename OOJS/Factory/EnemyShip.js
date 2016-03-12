function EnemyShip (name) {
    this.name = name;
    this.damagingCapability = 10;
}

EnemyShip.prototype.getName = function () {
    return this.name;
}

EnemyShip.prototype.setName = function (name) {
    this.name = name;
}

EnemyShip.prototype.getDamagingCapability = function () {
    return this.damagingCapability;
}

EnemyShip.prototype.setDamagingCapability = function (damagingCapability) {
    this.damagingCapability = damagingCapability;
}

EnemyShip.prototype.hitEnemy = function (name) {
    console.log(this.getName() + " has hit enemy with " +this.getDamagingCapability() + " damaging capability.");
}


