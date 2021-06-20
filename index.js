//6) The area of a rectangle is equal to its length x width.

//well I completed it looking at someone else's code but I still dont understand it yet 

function areaOfRectangle(length, width){
  let areaOfRectangle;
  if (width === undefined){
    areaOfRectangle = length * length;
    console.log('This is a square.');
  } else{
    areaOfRectangle = length * width;
    console.log(`The area is ${areaOfRectangle} cm^2.`);
  }
  return areaOfRectangle;
} 
//areaOfRectangle(5);
areaOfRectangle(5, 6);

//Define a function and the required parameters to calculate the area of a rectangle.
//The function should return the area, NOT print it.


//If only one argument is passed to the function, then the shape is a square. Modify your code to deal with this case.


//Call your area function, then use a template literal to print, “The area is ____ cm^2.”
