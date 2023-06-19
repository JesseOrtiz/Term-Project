var status = true;

alert("Welcome to the ortiz addition calculator program!");

var user_name = prompt("Please enter your name: ");

alert("Welcome, " + user_name + "!");

function addNumbers(a, b) {
  return Number(a) + Number(b);
}

while (status) {
  var user_input = prompt("Please enter two numbers, separated by a space or comma: ");
  var numbers = input.split(/[ ,]+/);

  if (numbers.length === 2) {
    var num1 = numbers[0];
    var num2 = numbers[1];
    var result = addNumbers(num1, num2);

    alert("The sum of the two given numbers is: " + result);

    if (result > 10) {
      alert("That is a big number.");
    } else {
      alert("That is a small number.");
    }
  } else {
    alert("Invalid input. Please enter two numbers.");
  }

  var continueAdding = prompt("Do you want to add two numbers again? (yes or no)");
  if (continueAdding.toLowerCase() !== "yes") {
    status = false;
  }
}

alert("Thank you for using the ortiz addition calculator program!");
