const to = document.getElementById("to");
document.querySelector('select').addEventListener('change', showConvert);

function showConvert() {
    fetch('products.json')
        .then( result => result.json())
        .then(prods => convertion(prods));
    
    function convertion(products) {
        const currTo = to.options[to.selectedIndex].value;
        const currFrom = products[0].currency;
        const currKey = currFrom + '_' + currTo;
        products.forEach(function(products){
            fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=d1b5218e0be93e157106`)
                .then( response => response.json() )
                .then( currency => {
                    const rate = currency[currKey];
                    const sourceAmount = products.price;
                    const convertedAmount = rate * sourceAmount;
                    products.price = convertedAmount.toFixed(2);
                    products.currency = currTo;
                    console.log(products.price + products.currency);
            })
        })
    }
}