var squareSide;
var squarePerimeter;
var squareArea;

function square() {
    squareSide = Number(document.getElementById("squareSide").value);
    squareArea = Math.pow(squareSide, 2);
    squarePerimeter = squareSide * 4;

    document.getElementById("squareArea").innerHTML = squareArea;
    document.getElementById("squarePerimetr").innerHTML = squarePerimeter;
}