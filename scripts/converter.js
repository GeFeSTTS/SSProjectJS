document.querySelector('select').addEventListener('change', showConvert);

function showConvert() {
    fetch('products.json')
        .then( result => result.json)
        .then(prods => convertion(prods));
    
    function convertion(products) {
        console.log(products);
    }
};

/* function showConvert(){
    const to = document.getElementById("to");
    const currTo = to.options[to.selectedIndex].value;
    const from = products.currency;
    console.log(from);
    const val = document.querySelectorAll(".price p");
    const currFrom = from[1];
    const currKey = currFrom + '_' + currTo; 
    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=6f0e3f1d07f5b51eb161`)
    .then( response => response.json() )
    .then( currency => {
       const rate = currency[currKey];
       const convertedAmount = 0;
       val.forEach(function(){
        convertedAmount = rate * val;
        val.innerText = convertedAmount.toFixed(2);
       })
    }); */