
  // random number shown at the start of the game should be between 19 - 120
$(document).ready(function(){
  var random_number= Math.floor((Math.random() * 100) + 19);
 // $('.random_number').css( "color", "red" );


  

// all variables set to 0

  var yourWins= 0,
      yourLosses= 0,
      total_score=0;
  

//computer randomly selects a value between 1-12 for each crystal
  
  var purple_crystal = Math.floor((Math.random() * 12) + 1);
  var white_crystal = Math.floor((Math.random() * 12) + 1);
  var green_crystal = Math.floor((Math.random() * 12) + 1);
  var pink_crystal = Math.floor((Math.random() * 12) + 1);



 //  game begins
    var beg_game = function (){
      total_score = 0;
      random_number = Math.floor((Math.random() * 100) + 19);

// this will reset clear the history of the random number each time the game is completed
    
     $('.random_number').empty();

// this will display the random number each game

     $('.random_number').append(random_number  + " " + "is the random number");
      updateAddition();
    } 

// updates score based on users clicks
    
    $('#purple_crystal').on("click",function(){
      total_score = total_score + purple_crystal;
      game();
    })

    $('#white_crystal').on("click",function(){
      total_score = total_score + white_crystal;
      game();
    })

    $('#green_crystal').on("click",function(){
      total_score = total_score + green_crystal;
      game();
    })

    $('#pink_crystal').on("click",function(){
      total_score = total_score + pink_crystal;
      game();
    })

//displays alert if user wins or losses and restarts game

  var game = function (){
    if (total_score == random_number) {
      yourWins = yourWins + 1;
      alert("You win!");
      beg_game();
    } else if (total_score > random_number) {
      yourLosses = yourLosses + 1;
      alert("You lost!");
      beg_game();
    } else {
      updateAddition();
    }
  }

//to update wins and losses counter
  var updateAddition = function () {
    $('.total_score').empty();
    $('.total_score').append(total_score);

    $('#yourWins').empty();
    $('#yourWins').append(yourWins);

    $('#yourLosses').empty();
    $('#yourLosses').append(yourLosses);
  }



  $('.random_number').append(random_number + " " + "<span>is the random number</span>");
  $('.total_score').append(total_score);
  //can alternatively use the code below instead of span
  //$('.random_number span').css( "font-weight", "bold" );
});
  
