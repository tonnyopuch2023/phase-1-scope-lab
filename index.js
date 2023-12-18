// Write your solution in this file!
var customerName;
function upperCaseCustomerName() {
    if (customerName) {
      customerName = customerName.toUpperCase();
    }
  }
  function setBestCustomer() {
    bestCustomer = 'not bob';
  }
  function overwriteBestCustomer() {
    bestCustomer = 'maybe bob';
  }
  const leastFavoriteCustomer = 'someone';

function changeLeastFavoriteCustomer() {
  // Trying to change the value of a constant (This will throw an error)
  leastFavoriteCustomer = 'someone else'; // This line will cause an error
}
