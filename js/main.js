const numPeople = document.getElementById('.people');

const tip_btn = document.querySelector('#tip-btn');

function calc_tip() {
    let costInput = +document.getElementById('price').value;
    let numPeople = +document.getElementById('number').value;
    let tip = document.getElementsByName('service');
    let tipSelected;
    // Get value of radio buttons that are checked 
    for (i = 0; i < tip.length; i++) {
        if (tip[i].checked) {
            tipSelected = tip[i].value
        }
    }
    // Convert string into number
    let decimalTip = parseInt(tipSelected) / 100.0;
    let billWithTip = (decimalTip + 1) * costInput;
    // To keep value to 2 decimal places
    let totalTipamount = (billWithTip / numPeople).toFixed(2);
    // To show total amount of tip, including bill
    if (totalTipamount != (NaN && null && "")) {
        return document.getElementById("divided-bill").innerHTML = `$${totalTipamount}`;
    } else {
        return document.getElementById("divided-bill").innerHTML = " ";
    }
}