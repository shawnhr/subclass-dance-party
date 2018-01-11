

var removeAll = function(top, left, timeBetweenSteps) {
	makeDancer.call(this, top, left, timeBetweenSteps);
    this.$node = $('<span class="remove"><img src="images/ball.gif"></span>');
    this.setPosition(this.top, this.left)
};
  removeAll.prototype = Object.create(makeDancer.prototype);
  removeAll.prototype.constructor = removeAll;

  removeAll.prototype.step = function() {
  	makeDancer.prototype.step.call(this);
    this.$node.slideUp(1000);

  };

