//create publisher/observer
var newPublisher = new Publisher();

//create subscribers
var sub_1 = new Subscriber(newPublisher);
sub_1.getRegistered();
sub_1.set_a(40);
sub_1.set_b(30);
sub_1.set_c(20);

var sub_2 = new Subscriber(newPublisher);
sub_2.getRegistered();
sub_2.set_c(120);

newPublisher.update_a(150);


