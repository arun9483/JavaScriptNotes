function Subscriber(attachToPublisher){
    this.publisher = attachToPublisher;
}

Subscriber.prototype.update = function (a, b, c) {
    console.log("a: " + a);
    console.log("b: " + b);
    console.log("c: " + c);
}

Subscriber.prototype.set_a = function (updated_a) {
    this.publisher.update_a(updated_a);
}

Subscriber.prototype.set_b = function (updated_b) {
    this.publisher.update_b(updated_b);
}

Subscriber.prototype.set_c = function (updated_c) {
    this.publisher.update_c(updated_c);
}

Subscriber.prototype.getRegistered = function () {
    this.publisher.register(this);
}

Subscriber.prototype.getUnRegistered = function () {
    this.publisher.unregister(this);
}