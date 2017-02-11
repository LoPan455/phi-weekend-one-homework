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
    $('#empTable').append('<tr>'+
      '<td data-firstname="'+firstName+'">'+firstName+
      '</td><td data-lastname="'+lastName+'">'+lastName+
      '</td><td data-empid="'+empId+'">'+empId+
      '</td><td data-empTitle="'+empTitle+'">'+empTitle+
      '</td><td data-empsalary="'+empSalary+'" id="salary">'+empSalary+'</td>'+
      '<td><button type="button" name="deleteButton" id="deleteButton">Delete Me!</button></td>'+
      '</tr>'
    );
    totalSalarySpend += empSalary; //increments the total salary spend by each added employee's salary
    writePerMonthSalarySpend();
    //$('#monthlySpend > p').html('$' + rndMonthlySalarySpend); //writes the value of rndMonthlySalarySpend to the DOM
    $('#firstName').val(''); //clears out input fields
    $('#lastName').val(''); //clears out input fields
    $('#empId').val(''); //clears out input fields
    $('#empTitle').val(''); //clears out input fields
    $('#empSalary').val(''); //clears out input fields
  });

  //Adding in the listener and functionality for the Delete Me! button
  $('#empTable').on('click', '#deleteButton', function(){
    console.log('deleteButton was clicked');
    totalSalarySpend -= ($(this).parent().prev().data('empsalary'));
    writePerMonthSalarySpend();
    $(this).parent().parent().remove();
  });

});

var totalSalarySpend = 0; //variable to get the total of all employees' annual salary
var monthlySalarySpend = 0; //variable to get the total spend per month on all the employees Salary

  function writePerMonthSalarySpend(){ //runs whenever we need to calculate or re-calculate the monthly salary spend
    monthlySalarySpend = totalSalarySpend / 12;
    var rndMonthlySalarySpend = monthlySalarySpend.toFixed(2);
    $('#monthlySpend > p').html('$' + rndMonthlySalarySpend);
    return
 }
