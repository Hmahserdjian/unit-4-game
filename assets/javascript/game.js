var num = (4, 5, 11, 20);

var magicRocks = $("#rocks");
var numRan = num[Math.round(Math.random()+ 4)];

var goalScore = 75;
$("#score").text(goalScore);

for (var i = 0; i < num.length; i++) {

    var shineyRocks = $("<img>");


    shineyRocks.addClass("rocks");


    shineyRocks.attr("src", "assets/images/download.jpg", "assets/images/2013-10-Blue-Crystal-Abstract.jpg", "assets/images/safe_image_1_dfd63a86-36a6-4376-98c2-fc4f62258150_1024x1024.jpg", "assets/images/stock-vector-purple-crystal-cluster-vector-design-576295027.jpg");


    shineyRocks.attr("data-rocksvalue", num[i]);


    magicRocks.append(shineyRocks);
};


magicRocks.on("click", ".shineyRocks", function () {


    var rocks = ($(this).attr("data-rocksvalue"));
    rocks = parseInt(rocks);

    counter += shineyRocks;


    alert("New score: " + counter);
});

var counter = 0;
$("#rocks").on("click", ".Pic1", function () {

    counter += numRan;
    alert("Your new score is " + counter);

    if (counter === goalScore) {


        alert("You win!");
    } else if (counter >= goalScore) {

        alert("You lose!!");
    }

});