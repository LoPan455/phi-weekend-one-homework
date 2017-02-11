// Waiting for html to load before running
$(document).ready(function(){
  // Creating an event listener, something to check if addEmpBtn has had anything happen to it. 'click' says pay attention to clicks
  $('#addEmpBtn').on('click', function(){
    console.log('add emp button clicked');
    var firstName = $('#firstName').val(); // gets value in firstName input box
    var lastName = $('#lastName').val(); // gets value in lastName input box
    var empId = $('#empId').val(); // gets the value in empID field
    var empTitle = $('#empTitle').val(); // gets the value in empTitle field
    var empSalary = Number($('#empSalary').val()); // gets the value in empSalary field
    var fullEmpString = firstName + ' ' + lastName + ' ' + empId + ' ' + empTitle + ' ' + '$ '+ empSalary; //concatenates all the employee data together in one variable.
    $('#empList').append('<p data-empId="' + empId +'" data-empSalary="' + empSalary + '">' + fullEmpString +
    '<button type="button" name="deleteButton" id="deleteButton">Delete Me!</button></p>');
    totalSalarySpend += empSalary; //increments the total salary spend by each added employee's salary
    writePerMonthSalarySpend();
    // monthlySalarySpend = totalSalarySpend / 12; //calculates amount spent per month on all employee salaries
    // rndMonthlySalarySpend = Number(monthlySalarySpend.toFixed(2)) //rounds the value of monthlySalarySpend to the nearest cent
    $('#monthlySpend > p').html('$' + rndMonthlySalarySpend); //writes the value of rndMonthlySalarySpend to the DOM
    $('#firstName').val(''); //clears out input fields
    $('#lastName').val(''); //clears out input fields
    $('#empId').val(''); //clears out input fields
    $('#empTitle').val(''); //clears out input fields
    $('#empSalary').val(''); //clears out input fields

  });

  //Adding in the listener and functionality for the Delete Me! button
  $('#empList').on('click', '#deleteButton', function(){
    console.log('deleteButton was clicked');
    totalSalarySpend -= $(this).parent().data('empsalary');
    writePerMonthSalarySpend();
    $('#monthlySpend > p').html('$' + rndMonthlySalarySpend);
    $(this).parent().remove();
  });

});

var totalSalarySpend = 0;
var monthlySalarySpend = 0;
function writePerMonthSalarySpend(){
  monthlySalarySpend = totalSalarySpend / 12;
  rndMonthlySalarySpend = Number(monthlySalarySpend.toFixed(2));
  $('#monthlySpend > p').html('$' + rndMonthlySalarySpend)

}
