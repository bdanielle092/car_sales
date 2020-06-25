import salesByWeek from "./data.js"
const searchInput = document.querySelector("#searchInput")

searchInput.addEventListener('keypress', event => {
  if (event.charCode === 13) {
    const searchTerm = event.target.value

    salesByWeek.forEach(sale => {
        weeklySales.innerHTML += salesByWeek
            // this is another loop and is pulling the properties
        for (const property of Object.entries(sale.vehicle)) {
            // this tells where the properties are in HTML. 0 is name and 1 is vechicle properties
             weeklySales.innerHTML += `<div>${property[0]}: ${property[1]}</div>`
     } 

    });
  }
})
// weeklySales is gets info from HTML
const weeklySales = document.querySelector(".report")
// this is the header
 weeklySales.innerHTML += "<h1>Weekly Sales Reports</h1>"
// is a loop running through the data
 salesByWeek.forEach(sale => {
    //  this is putting first and last name from the data
    weeklySales.innerHTML += `<hr><h2>${sale.sales_agent.first_name} ${sale.sales_agent.last_name}</h2></hr>`
    // this is another loop and is pulling the properties
        for (const property of Object.entries(sale.vehicle)) {
            // this tells where the properties are in HTML. 0 is name and 1 is vechicle properties
             weeklySales.innerHTML += `<div>${property[0]}: ${property[1]}</div>`
     }
    //    this is pulling the info on profit from data. There is an extra $ sign so it shows before profit
        weeklySales.innerHTML += `<h3>Profit: $${sale.gross_profit}</h3>`
 })



