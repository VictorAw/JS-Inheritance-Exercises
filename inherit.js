Function.prototype.inherits = function(Superclass){
  function Surrogate (){}
  Surrogate.prototype = Superclass.prototype;
  this.prototype = new Surrogate();
  this.prototype.constructor = this;
}


function MovingObject(){
  this.speed = 1.0;
}
MovingObject.prototype.move = function(){
  console.log("Moving");
}

function Ship(){
  let _super = this.__proto__.__proto__.constructor.bind(this);
  _super();
}

Ship.inherits(MovingObject);
const ship = new Ship();
console.log(ship.speed);
ship.move();
