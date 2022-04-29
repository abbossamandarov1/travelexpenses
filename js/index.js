var amountMoney = Number(prompt("Miqdorni so'mda kiriting"));

var dollar =  750;
var euro = 120;

var exchangeDollar = dollar * 11191.00;
var exchangeEuro = euro * 11747.42;
var percentMoney = exchangeDollar + exchangeEuro;
console.log ("percentMoney="  + percentMoney);

if (amountMoney >= percentMoney) {
    console.log ("Oq yo'l Alisher");
} else {
    console.log("Alisher ozgina sabr qiling");
}










