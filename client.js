// Waiting for html to load before running
$(document).ready(function(){
  // Creating an event listener, something to check if addEmpBtn has had anything happen to it. 'click' says pay attention to clicks
  $('#addEmpBtn').on('click', function(){ // the following codeblock will execute on a click of the button with ID addEmpBtn
    console.log('add emp button clicked'); //just to make sure we're getting the button click
    var firstName = $('#firstName').val(); // gets value in firstName input box
    var lastName = $('#lastName').val(); // gets value in lastName input box
    var empId = $('#empId').val(); // gets the value in empID field
    var empTitle = $('#empTitle').val(); // gets the value in empTitle field
    var empSalary = Number($('#empSalary').val()); // gets the value in empSalary field
    $('#empTable').append('<tr>'+ // This next jQuery statement will add a table row with table data cells for each piece of emplouee data
      '<td data-firstname="'+firstName+'">'+firstName+'</td>'+
      '<td data-lastname="'+lastName+'">'+lastName+'</td>'+
      '<td data-empid="'+empId+'">' + empId +'</td>' +
      '<td data-empTitle="'+empTitle+'">' + empTitle + '</td>' +
      '<td data-empsalary="'+empSalary+'" id="salary">'+empSalary+'</td>'+
      '<td><button type="button" name="deleteButton" id="deleteButton">Delete Me!</button></td>'+
      '</tr>'
    );
    totalSalarySpend += empSalary; //increments the total salary spend by each added employee's salary
    writePerMonthSalarySpend(); //calls the function writePerMonthSalary spend to calculate the new monthly spend with the new data for each added employee
    $('#firstName').val(''); //clears out input fields
    $('#lastName').val(''); //clears out input fields
    $('#empId').val(''); //clears out input fields
    $('#empTitle').val(''); //clears out input fields
    $('#empSalary').val(''); //clears out input fields
  });

  //Adding in the listener and functionality for the Delete Me! button
  $('#empTable').on('click', '#deleteButton', function(){
    console.log('deleteButton was clicked');
    totalSalarySpend -= ($(this).parent().prev().data('empsalary')); //removes the salary amount of the removed employee by traversing up the DOM and getting the prev() 'td element which contains the salary data'
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
