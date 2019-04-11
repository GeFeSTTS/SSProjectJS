menu.onclick = function myFunction() {
    event.preventDefault();
    let x = document.getElementById('myTopnav');

    if (x.className === "topnav") {
        x.className += " responsive";
    } else {
        x.className = "topnav";
    }
}

