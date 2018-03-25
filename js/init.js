$(document).ready(function () {
	$(".button-collapse").sideNav();
	$('select').material_select();
	$('.modal').modal();
	$('.collapsible').collapsible();
	$('ul.tabs').tabs();
	$('.datepicker').pickadate({
		selectMonths: true, // Creates a dropdown to control month
		selectYears: 15, // Creates a dropdown of 15 years to control year,
		today: 'Today',
		clear: false,
		close: 'Ok',
		closeOnSelect: true // Close upon selecting a date,
	});
	$('#viewpw').mouseover(function () {
		$('#register #password').attr({
			type: "text"
		});
	});
	$('#viewpw').mouseout(function () {
		$('#register #password').attr({
			type: "password"
		});
	});
	$('#chpwd .btn').click(function () {
		$('#chpwd').toggleClass('hide');
		$('#chpwdialog').toggleClass('hide');
	});
	$('#nochpwd').click(function () {
		$('#chpwd').toggleClass('hide');
		$('#chpwdialog').toggleClass('hide');
	});
});
