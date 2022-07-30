var circleRadius;
var circleArea;
var circleLength;

function circle(){
    circleRadius = Number(document.getElementById("circleRadius").value);

    circleArea = Math.pow(circleRadius, 2)*Math.PI;
    circleLength = 2 * circleRadius * Math.PI;

    document.getElementById('circleArea').innerHTML = circleArea;
    document.getElementById('circleLength').innerHTML = circleLength;

}