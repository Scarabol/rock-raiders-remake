//base class for all vehicles; should not be instantiated on its own, as it has default properties and no image
makeChild("Vehicle","RygameObject");
Vehicle.prototype.update = function() {
};

function Vehicle(image, space, driver,maxHp) {
	RygameObject.call(this,0,0,10,10,image,gameLayer);
	this.space = space;
	this.setCenterX(space.centerX());
	this.setCenterY(space.centerY());
	this.driver = driver;
	this.maxHp = maxHp;
	this.hp = this.maxHp;
	//default parameters; child classes will overwrite these
	this.speed = 5;
	this.capacity = 3;
	this.drillSpeed = 6;
	this.hardRockDrillSpeed = 1;
	this.canDrill = true;
	this.canFly = false;
	this.canSwim = false;
	this.type = "vehicle";
}