

var makeMewDancer = function(top, left, timeBetweenSteps) {
	makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="mew"><img src="images/mew.gif"></span>');
    this.setPosition(this.top, this.left)
};
  makeMewDancer.prototype = Object.create(makeDancer.prototype);
  makeMewDancer.prototype.constructor = makeMewDancer;

  makeMewDancer.prototype.step = function() {
  	makeDancer.prototype.step.call(this);
  	this.$node.toggle();
  	//this.$node.slideUp(200)
//   	constructor() 
//     super($('<span class="snoop"><img src="images/snoop.gif"></span>'));
  

  };
