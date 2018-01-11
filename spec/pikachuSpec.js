describe('pikachu', function() {

  var pikachu, clock;
  var timeBetweenSteps = 100;

  beforeEach(function() {
    clock = sinon.useFakeTimers();
    pikachu = new makeCuteDancer(10, 20, timeBetweenSteps);
  });

  it('should have a jQuery $node object', function() {
    expect(pikachu.$node).to.be.an.instanceof(jQuery);
  });

  it('should not have a step function that makes its node blink', function() {
    sinon.spy(pikachu.$node, 'toggle');
    pikachu.step();
    expect(pikachu.$node.toggle.called).to.be.false;
  });

  describe('dance', function() {
    it('should call step at least once per second', function() {
      sinon.spy(pikachu, 'step');
      expect(pikachu.step.callCount).to.be.equal(0);
      clock.tick(timeBetweenSteps); // ? it seems an extra tick is necessary...
      clock.tick(timeBetweenSteps);

      expect(pikachu.step.callCount).to.be.equal(1);

      clock.tick(timeBetweenSteps);
      expect(pikachu.step.callCount).to.be.equal(2);
    });
  });
});
