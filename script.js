const form = document.getElementById("form"); 
const amount = document.getElementById("amount");
const percentage = document.getElementById("percentage");
const calculateBtn = document.getElementById("calculate");
const result = document.getElementById("total");

// function to calculate tip
function calculateTip(e) {
    // This line prevents the default behavior of the event `e`. This is often used in event handlers to prevent the default action associated with the event, such as preventing a form submission.
    e.preventDefault();

    if (amount.value.trim() === "" || percentage.value.trim() === "") {
        alert("please enter the amount and percentage");
    }

    const newAmount = +amount.value;
    const newPercentage = percentage.value;

    const resultDisplay = newAmount + (newPercentage/100 * newAmount);

    console.log(resultDisplay);

    result.innerText = `${resultDisplay}`;


}

form.addEventListener("submit", calculateTip);