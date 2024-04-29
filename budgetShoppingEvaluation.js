var rice = 45
var riceQuantity = 5

var wheat = 40
var wheatQuantity = 7

var dal = 120
var dalQuantity  = 3

var totalBill = rice * riceQuantity + wheat * wheatQuantity + dal * dalQuantity
if(totalBill < 1000){
    console.log("You're in Budget")
}
else{
    console.log("You're not in a budget")
} 