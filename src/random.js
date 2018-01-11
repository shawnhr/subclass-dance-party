var makeRandomDancer = function(top, left, timeBetweenSteps) {
	makeDancer.call(this, top, left, timeBetweenSteps);
    // this.$node = $('<span class="random"><img src="images/' +Math.floor(Math.random() + 1 * 38 + '.gif"></span>'));
     //$("body").css({'background': 'url(images/' +'bg'+ Math.floor(Math.random() + 1 * 38) + '.gif'+')' +' center'}); 
    this.$node = $('<span class="random"><img src="images/' +Math.floor(Math.random() * 68 ) + '.gif'+'"'+ '></span>');
    //console.log(a);
    this.setPosition(this.top, this.left)
};
  makeRandomDancer.prototype = Object.create(makeDancer.prototype);
  makeRandomDancer.prototype.constructor = makeRandomDancer;

  makeRandomDancer.prototype.step = function() {
  	makeDancer.prototype.step.call(this);

  	//this.$node.toggle()
  };