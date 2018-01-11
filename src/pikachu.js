

var makeCuteDancer = function(top, left, timeBetweenSteps) {
  this.$node = $('<span class="pikachu"><img src="images/200.gif"></span>');
  makeDancer.call(this, top, left, timeBetweenSteps);
};
  makeCuteDancer.prototype = Object.create(makeDancer.prototype);
  makeCuteDancer.prototype.constructor = makeCuteDancer;

  makeCuteDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    //this.$node.toggle()
  };



