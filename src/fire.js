var makeFireDancer = function(top, left, timeBetweenSteps) {
  //var blinkyDancer = makeDancer(top, left, timeBetweenSteps);
  makeDancer.call(this, top, left, timeBetweenSteps);
  this.$node = $('<span class="fire"><img src="images/giphy-7.gif"></span>');
  this.setPosition(this.top, this.left);
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function

  //var oldStep = blinkyDancer.step;
  makeFireDancer.prototype = Object.create(makeDancer.prototype);
  makeFireDancer.prototype.constructor = makeFireDancer;

  makeFireDancer.prototype.step = function() {
    makeDancer.prototype.step.call(this);
    this.$node.toggle('jump');

  };