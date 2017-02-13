// Waiting for html to load before running
$(document).ready(function(){
  // Creating an event listener, something to check if addEmployeeButton has had anything happen to it. 'click' says pay attention to clicks
  $('#addEmployeeButton').on('click', function(){ // the following codeblock will execute on a click of the button with ID addEmployeeButton
    console.log('add emp button clicked'); //just to make sure we're getting the button click
    var firstName = $('#firstName').val(); // gets value in firstName input box
    var lastName = $('#lastName').val(); // gets value in lastName input box
    var employeeId = $('#employeeId').val(); // gets the value in employeeId field
    var employeeTitle = $('#employeeTitle').val(); // gets the value in employeeTitle field
    var employeeSalary = Number($('#employeeSalary').val()); // gets the value in employeeSalary field
    $('#empTable').append('<tr>'+ // This next jQuery statement will add a table row with table data cells for each piece of emplouee data
      '<td data-firstname="'+ firstName +'">' + firstName +'</td>'+
      '<td data-lastname="'+ lastName +'">'+ lastName + '</td>'+
      '<td data-employeeId="'+ employeeId +'">' + employeeId +'</td>' +
      '<td data-employeeTitle="' + employeeTitle +'">' + employeeTitle + '</td>' +
      '<td id="salary">' + employeeSalary + '</td>'+
      '<td><button type="button" name="deleteButton" data-employeesalary="' + employeeSalary + '" class="deleteButton">Delete Me!</button></td>'+
      '</tr>'
    );
    totalSalarySpend += employeeSalary; //increments the total salary spend by each added employee's salary
    writePerMonthSalarySpend(); //calls the function writePerMonthSalary spend to calculate the new monthly spend with the new data for each added employee
    $('.inputButton').val('');

  });

  //Adding in the listener and functionality for the Delete Me! button
  $('#empTable').on('click', '.deleteButton', function(){
    console.log('deleteButton was clicked');
    totalSalarySpend -= $(this).data('employeesalary');
    writePerMonthSalarySpend(); //recalculates the monthly spend
    $(this).parent().parent().remove(); //removes the entire 'tr' element that contained the button
  });

});

var totalSalarySpend = 0; //variable to get the total of all employees' annual salary
var monthlySalarySpend = 0; //variable to get the total spend per month on all the employees Salary

  function writePerMonthSalarySpend(){ //runs whenever we need to calculate or re-calculate the monthly salary spend
    monthlySalarySpend = totalSalarySpend / 12; //divides the total salary spend by 12 for a monthly figure
    var rndMonthlySalarySpend = Number(monthlySalarySpend.toFixed(2)); //rounds the value to up to 2 decimal places and converts this value to a number
    $('#monthlySpend > p').html('$' + rndMonthlySalarySpend); //writes out the new value in the #monthly spend div
    return
 }
