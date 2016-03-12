function EnemyShipFactory(){
    
}

EnemyShipFactory.prototype.createEnemyShip = function (typeOfShip, name) {
    var newShip = null;
    switch (typeOfShip) {
        case "U":
            newShip = new UFOEnemyShip(name);
            break;
        case "R":
            newShip = new  RocketEnemyShip(name);
            break;
        default:
            break;
    }
    return newShip;  
};