var triangleASide;
var triangleBSide;
var triangleCSide;

var semiPerimeter;

var trianglePerimeter;

function triangle(){
    triangleASide = Number(document.getElementById("triangleASide").value);
    triangleBSide = Number(document.getElementById("triangleBSide").value);
    triangleCSide = Number(document.getElementById("triangleCSide").value);

    semiPerimeter = (triangleASide + triangleBSide + triangleCSide)/2;

    trianglePerimeter = Math.sqrt(semiPerimeter * 
                                    (semiPerimeter - triangleASide) * 
                                    (semiPerimeter - triangleBSide) * 
                                    (semiPerimeter - triangleCSide));

    document.getElementById("trianglePerimeter").innerHTML = trianglePerimeter;
}