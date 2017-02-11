// Waiting for html to load before running
$(document).ready(function(){
  // Creating an event listener, something to check if clickMe
  // has had anything happen to it. 'click' says pay attention to clicks
  $('#addEmpBtn').on('click', function(){
    console.log('add emp button clicked');
    var firstName = $('#firstName').val(); // gets value in firstName input box
    var lastName = $('#lastName').val(); // gets value in lastName input box
    var empId = $('#empId').val(); // gets the value in empID field
    var empTitle = $('#empTitle').val(); // gets the value in empTitle field
    var empSalary = Number($('#empSalary').val()); // gets the value in empSalary field
    var fullEmpString = firstName + ' ' + lastName + ' ' + empId + ' ' + empTitle + ' ' + empSalary; //concatenates all the employee data together in one variable.
    $('#empList').append('<p>' + fullEmpString + '<button type="button" name="deleteButton" id="deleteButton">Delete Me!</button></p>');
    totalSalarySpend += empSalary; //increments the total salary spend by each added employee's salary
    monthlySalarySpend = totalSalarySpend / 12;
    rndMonthlySalarySpend = Number(monthlySalarySpend.toFixed(2))
    $('#monthlySpend > p').html(rndMonthlySalarySpend);
    $('#firstName').val('');
    $('#lastName').val('');
    $('#empId').val('');
    $('#empTitle').val('');
    $('#empSalary').val('');

  });

  //Adding in the listener and functionality for the Delete Me! button
  $('#empList').on('click', '#deleteButton', function(){
    console.log('deleteButton was clicked');
    $(this).parent().remove();
  });





});

var totalSalarySpend = 0;
var monthlySalarySpend = 0;






//
//
//   // We can only use $('#someId') for things that exist at document ready
//   // To select things dynamically, we use event propogation
//   $('#nameContainer').on('click', '.deleteButton', function(){
//
//     $(this).parent().remove();
//   });
//
//
//
//
// /////
//
//
// //
// // The application should first have an input form that collects:
// //
// // The Employee's First and Last name
// // The Employee's ID Number
// // The Employee's Job Title
// // The Employee's Salary (Yearly)
