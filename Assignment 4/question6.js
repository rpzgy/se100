// Modify the code below:

// const amdPrices = [90.21, 89.15, 88.15, 87.12, 102.21, 100.12, 79.82]

// let data = ()
// for price in data:
// 	if price < 3:
//     data.push(price)

let data = []
let count = 0
let minPrice = amdPrices[0];
for (let price of amdPrices){
    if (price < minPrice){
  
        data.push(price)
    }
}
data.sort()

console.log(`The three lowest prices are ${data[0]}, ${data[1]}, and ${data[2]}`);