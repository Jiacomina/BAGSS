$(document).ready(function() {
	$('#detailform').hide();
	$("#gohome").on("click", function(){
		window.location.href = "index.html";
	});

	$("#signup").on("click", function(){
		window.location.href = "signup.html";
	});
	$("#submitsignup").on("click", function(){
		fn = $('#fn').val();
		ln = $('#ls').val();
		mobileno = $('#mobileno').val();
		email = $('#email').val();
		confirmpss = $('#confirmpss').val();
		createpss = $('#createpss').val();

		if((ln == '' ) || (fn == '')|| (mobileno == '')|| (email == '')|| (confirmpss == '')|| (createpss == '')){
			$("#signupfail").removeClass("transparent");
		}
		else
			$('.signupbox').html('<p class = "title"><b>BAGGS : </b>Badminton Automatic Gaming Scheduling System</p><br><br><center><p>You have been successfully signed up to our membership system, please check your email or SMS to verify your account.<br><br><button id ="gohome" class = "center">Home</button></center>');
		$("#gohome").on("click", function(){
			window.location.href = "index.html";
	});
	});
	$("#login").on("click", function(){
		memberID = $('#memberID').val();
		password = $('#password').val();
		if((memberID == '' )|| (password == '')){
			$('#loginfail').removeClass('transparent');
		}
		else{
			window.location.href = "home.html";
		}
	});
	$("#accountdetails").on("click", function(){
		$('#detailform').hide();
		window.location.href = "accountdetails.html";
	});
	$("#availabilities").on("click", function(){
		window.location.href = "availabilities.html";
	});
	$("#schedule").on("click", function(){
		window.location.href = "schedule.html";
	});
	$("#resultsladder").on("click", function(){
		window.location.href = "resultsladder.html";
	});
	$(".home").on("click", function(){
		window.location.href = "home.html";
	});
	$("#mygames").on("click", function(){
		window.location.href = "games.html";
	});
	$('.timeslot').on('click', function() {
  		$(this).toggleClass('selected');
	});
	$('#editdetails').on('click', function() {
		$('#detailbox').hide();
  		$('#detailform').show();
	});
	$('#changedetails').on('click', function() {
		$('#detailbox').show();
  		$('#detailform').hide();
  		newname = $('#newfirstname').val();
  		if(newname != '')
  			$('#currentfn').html(newname);
  		lastname = $('#newlastname').val();
  		if(newname != '')
  			$('#currentln').html(lastname);
  		email = $('#newemail').val();
  		if(newname != '')
  			$('#currentemail').html(email);
	});
	$('#submitavailabilities').on('click', function() {
  		$('.content').html("<br><br><br>Your availabilities have been submitted!<br><br><button id = 'redoavailabilities' class = 'center'>Re-do your availabilities</button><button class = 'home center'>Home</button>");

  		$(".home").on("click", function(){
			window.location.href = "home.html";
		});
		$("#redoavailabilities").on("click", function(){
			window.location.href = "availabilities.html";
		});
	});

});





