$(document).ready(function(){

  $('.datepicker').pickadate({
      dateFormat: 'mm/dd/yy',
      selectMonths: true, // Creates a dropdown to control month
      selectYears: 5 // Creates a dropdown of 15 years to control year
    });
}) // JQuery Document.Ready Closure
