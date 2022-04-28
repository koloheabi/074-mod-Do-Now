


$("button").click(function() {
    let name = $(".question1").val();
    let faveRide = $(".question2").val();
    let times = $(".question3").val();
    //Write code below!
    $(".prediction").append(name+ "," + " your favorite Disneyland ride is " + faveRide + "!");
$(".question3").append(name + " you have been to Disneyland " + times+ " in your life " );
    $(".prediction").append( " you've rode it " + times + " times !");
});