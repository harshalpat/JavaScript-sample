var rect = {
    perimeter: (s,y) => (2*s*y),
    area: (s,y) => (s*y)
};

function solveRectangle (l,b) {
    console.log("solving for rectangel with l = "+ l + " and b = " + b);

    if(l <= 0 || b <= 0) {
        console.log("rectangle dimentions should be greater than zero : l = "+ l + " and b = " +b);
    
    }
    else {
        console.log("The area of rectangle is " + rect.area(l,b));
        console.log("The perimeter of the rectangle is "+ rect.perimeter(l,b));
    }

    
}

solveRectangle(2,3);
solveRectangle(0,4);
solveRectangle(-2, 3);