
var num = [1, 5, 10, 20]; 

var numRan = num[Math.round(Math.random())];

var goalScore = 75;
 $("#score").text(goalScore);


var counter = 0;
$("#rocks").on("click", ".Pic1", function() {

counter += numRan;
    alert("Your new score is " + counter)

    if (counter === goalScore) {
      

            alert("You win!");
          }
          else if (counter >= goalScore) {

            alert("You lose!!");
          }
      
       
      
});