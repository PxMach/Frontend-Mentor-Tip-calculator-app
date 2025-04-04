// Selecting necessary HTML elements
const bill = document.getElementById("bill"); // Input field for the bill amount
const buttons = document.querySelectorAll(".tip-buttons button"); // Buttons for selecting tip percentages
const nbPeople = document.getElementById("people"); // Input field for the number of people
const errorPeople = document.getElementById("error-people"); // Error message for the "number of people" field
const customTip = document.getElementById("custom"); // Input field for a custom tip percentage
const resetButton = document.getElementById("reset-button"); // Reset button to clear all values

// Selecting elements to display the results
let tipAmountElement = document.getElementById("tip-amount"); // Element to display the tip amount
let totalAmountElement = document.getElementById("total-amount"); // Element to display the total amount

// Function to calculate and display the tip and total amounts
function tips(event) {
  let tipValue = event.target.textContent.replace("%", ""); // Get the selected tip percentage (remove the "%" symbol)

  // Check if the tip value is valid and the number of people is greater than 0
  if (!isNaN(tipValue) && nbPeople.value > 0) {
    tipAmount =
      (parseFloat(bill.value) * parseFloat(tipValue)) / 100 / nbPeople.value; // Calculate the tip amount per person
    totalAmount = parseFloat(bill.value) + tipAmount; // Calculate the total amount per person
    tipAmountElement.textContent = `$${tipAmount.toFixed(2)}`; // Display the tip amount
    totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`; // Display the total amount
    errorPeople.style.display = "none"; // Hide the error message
    console.log(
      `The tip amount is: ${tipAmount}$ and the total amount is: ${totalAmount}$`
    ); // Log the values for debugging
  } else if (nbPeople.value <= 0) {
    // Show an error message if the number of people is invalid
    errorPeople.style.display = "block";
    errorPeople.textContent = "Can't be zero";
  }
}

// Event listener for the custom tip input field
customTip.addEventListener("keydown", (event) => {
  if (event.key === "Enter") {
    // Check if the "Enter" key is pressed
    event.preventDefault(); // Prevent the default form submission behavior

    let customValue = event.target.value; // Get the custom tip percentage entered by the user
    if (!isNaN(customValue) && nbPeople.value > 0) {
      tipAmount =
        (parseFloat(bill.value) * parseFloat(customValue)) /
        100 /
        nbPeople.value; // Calculate the custom tip amount per person
      totalAmount = parseFloat(bill.value) + tipAmount; // Calculate the total amount per person
      tipAmountElement.textContent = `$${tipAmount.toFixed(2)}`; // Display the tip amount
      totalAmountElement.textContent = `$${totalAmount.toFixed(2)}`; // Display the total amount
      errorPeople.style.display = "none"; // Hide the error message
      console.log(
        `The tip amount is: ${tipAmount}$ and the total amount is: ${totalAmount}$`
      ); // Log the values for debugging
    } else if (nbPeople.value <= 0) {
      // Show an error message if the number of people is invalid
      errorPeople.style.display = "block";
      errorPeople.textContent = "Can't be zero";
    }
  }
});

// Event listener for the reset button
resetButton.addEventListener("click", () => {
  bill.value = 0; // Reset the bill amount
  nbPeople.value = 0; // Reset the number of people
  customTip.value = 0; // Reset the custom tip percentage
  tipAmount = 0; // Reset the tip amount
  totalAmount = 0; // Reset the total amount
  tipAmountElement.textContent = "$0.00"; // Reset the displayed tip amount
  totalAmountElement.textContent = "$0.00"; // Reset the displayed total amount
  errorPeople.style.display = "none"; // Hide the error message
});

// Add event listeners to each tip percentage button
buttons.forEach((button) => {
  button.addEventListener("click", tips); // Call the `tips` function when a button is clicked
});
