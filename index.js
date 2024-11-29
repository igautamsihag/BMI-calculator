function calculateBMI(weight, height){
    return weight/(height*height);
}

$(".smt").click(function(){
    var weight = $("#weight-input").val();
    var height = $("#height-input").val();
    var BMI = calculateBMI(weight, height);
    $("h1").text("The BMI is : " + BMI.toFixed(2));
    $("#bmi-table").css("visibility", "visible");
    $(".refresh").css("visibility", "visible");
})


$(".refresh").click(function(){
    location.reload();
});