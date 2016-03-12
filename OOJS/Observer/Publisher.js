function Publisher(){
    this.lstSubscribers = [];
    this.subscriberCount = 0;
    this.value_a = 0;
    this.value_b = 0;
    this.value_c = 0;
}

Publisher.prototype.register = function (newSubscriber) {
    var index = this.lstSubscribers.indexOf(newSubscriber);
    if(index<0){
        this.subscriberCount++;
        this.lstSubscribers.push(newSubscriber);
    }
}

Publisher.prototype.unregister = function (newSubscriber) {
    var index = this.lstSubscribers.indexOf(newSubscriber);
    if(index>-1){
        this.subscriberCount--;
        this.lstSubscribers.splice(index, 1);
    }
}

Publisher.prototype.notify = function () {
    for(var index in this.lstSubscribers){
        console.log("Notified: ");
        this.lstSubscribers[index].update(this.value_a, this.value_b, this.value_c);
    }
}

Publisher.prototype.update_a = function (new_a) {
    this.value_a = new_a;
    this.notify();
}

Publisher.prototype.update_b = function (new_b) {
    this.value_b = new_b;
    this.notify();
}

Publisher.prototype.update_c = function (new_c) {
    this.value_c = new_c;
    this.notify();
}