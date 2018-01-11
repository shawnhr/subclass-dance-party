$(document).ready(function() {
  window.dancers = [];



$('.remove').on('click', function() {
  var rm = window['removeAll'];
  var remove = new rm(300, 400, 400);
  //console.log(remove.$node[0]);
  $('body').append(remove.$node[0]);

  //$(remove).slideUp(200);

  for(let dancer of window.dancers){
    $(dancer.$node).remove();
  }
});

$('.lineUp').on('click', function() {
    for(let dancer of window.dancers){
      dancer.lineUp();
    }
  })

  $('.resume').on('click', function(){
    for(let dancer of window.dancers){
      dancer.resume();
    }
  })

  $('.teamUp').on('click', function(){
    for(let dancer of window.dancers){
      dancer.teamUP();
    }
  })

  $('body').on('mouseover', '.pikachu', function(event) {
    $(this).css("animation-name", "move");
    $(this).css("animation-duration", "2s");

  })
   $('body').on('mouseover', '.turtle', function(event) {
    $(this).css("animation-name", "zoom");
    $(this).css("animation-duration", "2s");

  })
    $('body').on('mouseover', '.fire', function(event) {
    $(this).css("animation-name", "rotation");
    $(this).css("animation-duration", "2s");

  })
    $('body').on('mouseover', '.mew', function(event) {
    $(this).css("animation-name", "popup");
    $(this).css("animation-duration", "2s");

  })
    $('body').on('mouseover', '.bulbasaur', function(event) {
    $(this).css("animation-name", "move");
    $(this).css("animation-duration", "2s");

  })


     // $("body").on('mouseover', 'span', function(event) {
     //  $(this).toggleClass('flip');
 $('.rand_bg').on('click', function(){
  //var images = ['bg17.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif', 'bg18.gif' ];
 //$("body").css({'background': 'url(images/' + images[Math.floor(Math.random() * images.length)] + ')' +' center'});
 $("body").css({'background': 'url(images/' +'bg'+ Math.floor(Math.random() * 38) + '.gif'+')' +' center'});
 $("body").css({'background-size': 'cover'});
 })

  let rotate = {};
  $('body').on('click', 'img', function() {
    rotate[this] = rotate[this] || 90;
    $(this).css({'transform': 'rotate(' + rotate[this] + 'deg)'});
    if (rotate[this] === 360) {

      rotate[this] = -90;
          console.log(rotate[this])

    }
    rotate[this] += 90;
  });



  $('.addDancerButton').on('click', function(event) {
    /* This function sets up the click handlers for the create-dancer
     * buttons on dancefloor.html. You should only need to make one small change to it.
     * As long as the "data-dancer-maker-function-name" attribute of a
     * class="addDancerButton" DOM node matches one of the names of the
     * maker functions available in the global scope, clicking that node
     * will call the function to make the dancer.
     */

    /* dancerMakerFunctionName is a string which must match
     * one of the dancer maker functions available in global scope.
     * A new object of the given type will be created and added
     * to the stage.
     */
    var dancerMakerFunctionName = $(this).data('dancer-maker-function-name');
    // get the maker function for the kind of dancer we're supposed to make
    var dancerMakerFunction = window[dancerMakerFunctionName];

    // make a dancer with a random position

    var dancer = new dancerMakerFunction(
      $("body").height() * Math.random(),
      $("body").width() * Math.random(),
      Math.random() * 1000
    );
    $('body').append(dancer.$node);
    window.dancers.push(dancer);
  });

   $('.heart').on('click', function() {
    for(let dancer1 of window.dancers){
       var x1 = dancer1.$node.position().top;
       var y1 = dancer1.$node.position().left;
       for(let dancer2 of window.dancers){
       var x2 = dancer2.$node.position().top;
       var y2 = dancer2.$node.position().left;
       }
      var distance = Math.sqrt((x2 - x1)^2 + (y2 - y1)^2);
      console.log(distance, '<-- distance');
      if (distance < 20) {
        //rotate();
        //dancer.$node.toggle();
        //console.log(dancer.$node.css("left"),"<--left")
        //this.$node.removeClass("slide");
        //this.setPosition(dancer.top, dancer.left);
        dancer1.$node.addClass('heart')
        dancer2.$node.addClass('heart')

      }
    }
  });



   //  var position = $(this).position(); //{top: #, left:#} ...
   //  var x1 = position.left;
   //  var y1 = position.top;

   //  window.dancers.forEach(function(dancer) {
   //    var surrPosition = dancer.$node.position();
   //    //console.log(surrPosition);
   //    var x2 = surrPosition.left;
   //    var y2 = surrPosition.top;

   //    var distance = Math.sqrt((x2 - x1)^2 + (y2 - y1)^2);
   //    console.log(distance, '<-- distance');
   //    if (distance < 20) {
   //      //rotate();
   //      //dancer.$node.toggle();
   //      console.log(dancer.$node.css("left"),"<--left")
   //      //this.$node.removeClass("slide");
   //      //this.setPosition(dancer.top, dancer.left);

   //    }
   //  })
   // })



});

