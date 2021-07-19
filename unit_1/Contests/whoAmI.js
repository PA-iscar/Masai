//* assignment_7_2    week 3 day 4
//? Q2 WHOM AM I ?

// 3 sides - Triangle 
// 4 sides - Quadrilateral
// 5 sides - Pentagon 
// 6 sides - Hexagon 
// 7 sides - Heptagon 
// 8 sides - Octagon 
// 9 sides - Nonagon 
// 10 sides - Decagon
var sides = 98;
switch(sides) {
    case 0:
    case 1:
    case 2:
        console.log("Not a polygon");
        break;
    case 3:
        console.log("Triangle");
        break;
    case 4:
        console.log("Quadrilateral");
        break;
    case 5:
        console.log("Pentagon");
        break;
    case 6:
        console.log("Hexagon");
        break;
    case 7:
        console.log("Heptagon");
        break;
    case 8:
        console.log("Octagon");
        break;
    case 9:
        console.log("Nonagon");
        break;
    case 10:
        console.log("Decagon");
        break;
    default:
        console.log("Too many sides.");
}