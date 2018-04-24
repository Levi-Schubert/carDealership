/*our job is to produce the following reports for the dealership 
based on their total 2017 sales.

Total profit for 2017
In which month did they sell the most cars?
Which salesperson sold the most cars?
Which salesperson made the most profit?
Which model was the most popular?
Which bank provided the most loans to our customers?
*/
// let soldInMonth = [0,0,0,0,0,0,0,0,0,0,0,0]
// let totalProfit = 0
// let salespersons ={
// 	name: [],
// 	sold: [],
// 	profit: []
// }
// let models = {
// 	model: [],
// 	sold: []
// }
// let banks = {
// 	providers: [],
// 	number: []
// }

let soldMost, mostProfit, mostModel, mostLoans

function findLargest(array){
	let indexHighest = 0
	array.forEach(element => {
		if(array[indexHighest] <= element){
			indexHighest = array.indexOf(element)
		}
	});
	return indexHighest
}

mostMonth = months[findLargest(soldInMonth)]
soldMost = salespersons.name[findLargest(salespersons.sold)]
mostProfit = salespersons.name[findLargest(salespersons.profit)]
mostModel = models.model[findLargest(models.sold)]
mostLoans = banks.providers[findLargest(banks.number)]

console.log("Total profit for 2017 was: " + totalProfit)
console.log("The month with the most cars sold was: " + mostMonth)
console.log("The salesperson with the most cars sold was: " + soldMost)
console.log("The salesperson with the most profit was: " + mostProfit)
console.log("The model that sold the most was: " + mostModel)
console.log("The bank that lended the most times was: " + mostLoans)