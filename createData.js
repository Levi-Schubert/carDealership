/*our job is to produce the following reports for the dealership 
based on their total 2017 sales.

Total profit for 2017
In which month did they sell the most cars?
Which salesperson sold the most cars?
Which salesperson made the most profit?
Which model was the most popular?
Which bank provided the most loans to our customers?
*/
let months = ["January", "February", "March", "April", "May", "June", "July","August","September", "October", "November", "December"]
let soldInMonth = [0,0,0,0,0,0,0,0,0,0,0,0]
let totalProfit = 0
let salespersons ={
	name: [],
	sold: [],
	profit: []
}
let models = {
	model: [],
	sold: []
}
let banks = {
	providers: [],
	number: []
}

//checks if the array contains an element and returns a boolean
function contains (array, toFind){
	if(typeof array == "undefined"){
		return false
	}
	let bool = false
	array.forEach(element => {
		
		if(element == toFind){
			bool = true
		}
	});
	return bool
}


//obtaining data into separate structures for use
data.forEach(sale => {
	totalProfit += sale.gross_profit
	//track credit providers
	if(contains(banks.providers, sale.credit.credit_provider)){
		let index = banks.providers.indexOf(sale.credit.credit_provider)
		banks.number[index] += 1
	}else{
		banks.providers.push(sale.credit.credit_provider)
		banks.number.push(1)
	}
	//tracks each individual salespersons progress
	if(contains(salespersons.name, (sale.sales_agent.first_name + " " + sale.sales_agent.last_name))){
		let index = salespersons.name.indexOf((sale.sales_agent.first_name + " " + sale.sales_agent.last_name))
		salespersons.sold[index] += 1
		salespersons.profit[index] += sale.gross_profit
	}else{
		salespersons.name.push((sale.sales_agent.first_name + " " + sale.sales_agent.last_name))
		salespersons.sold.push(1)
		salespersons.profit.push(sale.gross_profit)
	}
	//update amount sold in month
	let month = ((parseInt(sale.purchase_date.slice(5,7))) -1)
	soldInMonth[month] += 1
	//track type of car sold
	if(contains(models.model, sale.vehicle.model)){
		let index = models.model.indexOf(sale.vehicle.model)
		models.sold[index] += 1
	}else{
		models.model.push(sale.vehicle.model)
		models.sold.push(1)
	}
});
