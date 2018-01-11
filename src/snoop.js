

var makeRapDancer = function(top, left, timeBetweenSteps) {
	makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="turtle"><img src="images/turtle.gif"></span>');
    this.setPosition(this.top, this.left)
};
  makeRapDancer.prototype = Object.create(makeDancer.prototype);
  makeRapDancer.prototype.constructor = makeRapDancer;

  makeRapDancer.prototype.step = function() {
  	makeDancer.prototype.step.call(this);
  	//this.$node.toggle();
  	//this.$node.slideUp(200)
//   	constructor() 
//     super($('<span class="snoop"><img src="images/snoop.gif"></span>'));
  

  };
