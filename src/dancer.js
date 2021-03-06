// Creates and returns a new dancer object that can step
var makeDancer = function(top, left, timeBetweenSteps) {

  //var dancer = {};
  // use jQuery to create an HTML <span> tag
  //dancer.$node = $('<span class="dancer"></span>');

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.$node = this.$node || $('<span class="dancer"><img src="images/200.gif"></span>');
  this.step();
  this.setPosition(top, left);
};

  makeDancer.prototype.step = function() {
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step

    setTimeout(this.step.bind(this), this.timeBetweenSteps);

  };

  makeDancer.prototype.setPosition = function(top, left) {
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  makeDancer.prototype.lineUp = function() {
  this.setPosition(400, this.left);
 };
  //makeDancer.prototype.teamUp = function() {
    //$(this).css("animation-name", "move2");
    //$(this).css("animation-duration", "2s");
  //};
makeDancer.prototype.resume = function() {
  this.setPosition(this.top, this.left);
};
  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body
  //dancer.setPosition(top, left);

  //return dancer;
