var rect = require('./Rectangle');

function solveRectangle (l,b) {
    console.log("solving for rectangel with l = "+ l + " and b = " + b);

    // when error occurs
    if(l <= 0 || b <= 0) {
        console.log("rectangle dimentions should be greater than zero : l = "+ l + " and b = " +b);
    
    }
    //this is the else block when there is no error
    else {
        console.log("The area of rectangle is " + rect.area(l,b));
        console.log("The perimeter of the rectangle is "+ rect.perimeter(l,b));
    }

    
}

solveRectangle(2,3);
solveRectangle(0,4);
solveRectangle(-2, 3);