const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82];

// Write your code below
// Defining a function

	
let maxRating = amdPrices[0];

for (let rating of amdPrices) {
    if (rating > maxRating) {
        maxRating = rating;
    }
}
console.log("AMD 52-week high is",maxRating);
