document.querySelector('select')
    .addEventListener('change', showConvert);

function showConvert(){
    const to = document.getElementById("to");
    const currTo = to.options[to.selectedIndex].value;
    const from = document.querySelector(".price p").textContent.split(' ');
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
    });
}



/*document.querySelector('.currency button')
    .addEventListener('click', showConvert);

function showConvert(e) {
    e.preventDefault();
    const from = document.getElementById("from")
    const to = document.getElementById("to");
    const currFrom = from.options[from.selectedIndex].value;
    const currTo = to.options[from.selectedIndex].value;
    const currKey = currFrom + '_' + currTo; 
    fetch(`https://free.currencyconverterapi.com/api/v6/convert?q=${currKey}&compact=ultra&apiKey=6f0e3f1d07f5b51eb161`)
    .then( response => response.json() )
    .then( currency => {
       const rate = currency[currKey];
       const sourceAmount = document.querySelector('.converter input[name=curr-amount]').value;
       const convertedAmount = rate * sourceAmount;
       document.querySelector('.converter output[name=curr-converted]')
        .innerText = convertedAmount.toFixed(2);
    });
} */