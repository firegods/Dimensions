$( document ).ready(function(){
	$(".button-collapse").sideNav();
	setInterval(function() {
		var date = new Date();
		$('#clock').html(
			date.getHours() + ":" + date.getMinutes()
		);
	}, 500);
	var task = 0
	$("#TabTask *").mousedown(function(){
		if (task == 0){
			$("#Task").slideDown('fast', function(){});
			task = 1;
			$("#Contents").css("z-index", "-1");
		} else{
			$("#Task").slideUp('fast', function(){});
			task = 0;
			$("#Contents").css("z-index", "");
		}
	});
	
	$("#username").focusout(
		function(){
			valid = userExist($("#username").val());
			if (valid.valid != "1"){
				$("#username").attr("class", "invalid");
				$("#username").attr("valid", "0");
			}else{
				$("#username").attr("valid", "1");
				$("#username").attr("class", "valid");
			}	
		}
	);

	$("#password").focusout(
		function(){
			$("#password").val(encrypt_password($("#password").val()));
		}
	)
	$("#email").focusout(
		function(){
			$("#email").attr("class", "");
		}
	)
	$("#log_btn").on("click", function(){
		if ($("#username").attr("valid") == '1'){
			doLogin();
		} else {
			alert("Please check your Credentials before login. Wrong Credentials!");
		}
	});
	setInterval(function(){
		if ($("#username").val() == ""){
			$("#username").attr("class", "");	
		}if ($("#password").val() == ""){
			$("#password").attr("class", "");
		}
	}, 1)
	/* General and Call-Backs */

    $('#Inbox').leanModal({
      	dismissible: true, // Modal can be dismissed by clicking outside of the modal
      	opacity: .5, // Opacity of modal background
      	in_duration: 300, // Transition in duration
     	out_duration: 200, // Transition out duration
    	}
  	);
  	$('#Notifi').leanModal({
      	dismissible: true, // Modal can be dismissed by clicking outside of the modal
      	opacity: .5, // Opacity of modal background
      	in_duration: 300, // Transition in duration
     	out_duration: 200, // Transition out duration
    	}
  	);
  	$('#Friends').leanModal({
      	dismissible: true, // Modal can be dismissed by clicking outside of the modal
      	opacity: .5, // Opacity of modal background
      	in_duration: 300, // Transition in duration
     	out_duration: 200, // Transition out duration
    	}
  	);
  	$('#Mail').leanModal({
      	dismissible: true, // Modal can be dismissed by clicking outside of the modal
      	opacity: .5, // Opacity of modal background
      	in_duration: 300, // Transition in duration
     	out_duration: 200, // Transition out duration
    	}
  	);
});
