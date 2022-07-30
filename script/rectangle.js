var rectangleASide;
var rectangleBSide;
var rectanglePerimeter;
var rectangleArea;

function rectangle() {
    rectangleASide = Number(document.getElementById("rectangleASide").value);
    rectangleBSide = Number(document.getElementById("rectangleBSide").value);

    rectangleArea = rectangleASide * rectangleBSide;
    rectanglePerimeter = 2 * (rectangleASide + rectangleBSide);

    document.getElementById("rectangleArea").innerHTML = rectangleArea;
    document.getElementById("rectanglePerimeter").innerHTML = rectanglePerimeter;
}