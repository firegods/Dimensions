var Profile;
var Manage;
var Market;
var Penguin;
var Clicked = {'Mail':0, "lastNotofication":'', 'notify': false, 'lastTarget':'', "furnitureAppended":[], "iglooAppended":[], "floorAppended":[], "inventoryAppended":[], "stampAppended":[]};


Penguin = {}

/* Profile */
function cfdb9773a (){

setInterval(function(){
	if(Penguin.id){
	$.extend(Penguin, fetchUsers(Penguin.id));
	$("#user_img_swid").attr("src","http://mobcdn.clubpenguin.com/game/items/images/paper/image/120/1.png");
	if (Object.keys(Penguin.furniture).length!=0){
		$("#Furnitures .preloader-wrapper").remove();
		$("#nothaveFu").hide()
		$("#furns").show();
		url = "http://media8.clubpenguin.com/game/items/images/furniture/icon/120/"
		$.each(Penguin.furniture,
			function(a,b){
				if ($.inArray(a, Clicked.furnitureAppended) == -1){
					HTML = "<img quantity='"+b[1]+"' id='"+a+"'src='"+url+a+".png' title='Quantity: "+b[1]+"''></img>"
					$("#furns").append(HTML);
					$.merge(Clicked.furnitureAppended, [a]);
			}
			});
	} else {
		$("#Furnitures .preloader-wrapper").remove();
		$("#nothaveFu").show();$("#furns").hide()
	}
	if (Object.keys(Penguin.igloos).length != 0){
		$("#iGloos .preloader-wrapper").remove();
		$("#nothaveIg").hide();
		url = "http://media8.clubpenguin.com/game/items/images/igloos/buildings/icon/120/"
		$("#igloos").show();
		$.each(Penguin.igloos,
			function(a,b){
				if ($.inArray(a, Clicked.iglooAppended) == -1){
					HTML = "<img quantity='"+b+"' id='"+a+"'src='"+url+a+".png' title='Quantity: "+b+"''></img>"
					$("#igloos").append(HTML);
					$.merge(Clicked.iglooAppended, [a]);
				}
			});
	} else {
		$("#iGloos .preloader-wrapper").remove();
		$("#nothaveIg").show();$("#igloos").hide();
	}
	if(Object.keys(Penguin.floors).length != 0){
		$("#nothaveFl").hide();
		url = "http://media8.clubpenguin.com/game/items/images/igloos/flooring/icon/120/"
		$("#floor .preloader-wrapper").remove();
		$("#floors").show();
		$.each(Penguin.floors,
			function(a,b){
				if ($.inArray(a, Clicked.floorAppended) == -1){
					HTML = "<img quantity='"+b+"' id='"+a+"'src='"+url+a+".png' title='Quantity: "+b+"''></img>"
					$("#floors").append(HTML);
					$.merge(Clicked.floorAppended, [a]);
				}
			});
	} else {
		$("#floor .preloader-wrapper").remove();
		$("#nothaveFl").show();$("#floors").hide();
	}
	if (Object.keys(Penguin.inventory.split("%")).length != 0){
		url = "http://media8.clubpenguin.com/game/items/images/paper/icon/60/"
		$("#Inventory .preloader-wrapper").remove();
		$("#nothaveI").hide();
		$("#invent").show();
		$.each(Penguin.inventory.split("%"),
			function(a,b){
				if ($.inArray(b, Clicked.inventoryAppended) == -1){
					HTML = "<img id='"+b+"'src='"+url+b+".png'></img>"
					$("#invent").append(HTML);
					$.merge(Clicked.inventoryAppended, [b]);
				}
			});
	} else {
		$("#Inventory .preloader-wrapper").remove();
		$("#nothaveI").show();$("#invent").hide();
	}
	if (Object.keys(Penguin.stamps.split("%")).length != 0){
		url = "http://cpitems.com/items/media/stamps/stamps.swf?id=";
		$("#Stamps .preloader-wrapper").remove();
		$("#nothaveStamps").hide();
		$("#stamp").show();
		$.each(Penguin.stamps.split("%"),
			function(a,b){
				if ($.inArray(b, Clicked.stampAppended) == -1){
					HTML = '<object width="75" height="75"><param name="movie" value="'+url+b+'"><embed src="'+url+b+'" width="75" height="75"></object>';
					$("#stamp").append(HTML);
					$.merge(Clicked.stampAppended, [b]);
				}
			});
	} else {
		$("#Stamps .preloader-wrapper").remove();
		$("#nothaveStamps").show();$("#stamp").hide();
	}
	if (Penguin.head != 0){
		$("#head_img").html("<img src='http://media8.clubpenguin.com/game/items/images/paper/icon/60/"+Penguin.head+".png'></img>")
	} if (Penguin.color != 0){
		$("#color_img").html("<img src='http://media8.clubpenguin.com/game/items/images/paper/icon/60/"+Penguin.color+".png'></img>")
	} if (Penguin.neck != 0){
		$("#neck_img").html("<img src='http://media8.clubpenguin.com/game/items/images/paper/icon/60/"+Penguin.neck+".png'></img>")
	} if (Penguin.hand != 0){
		$("#hand_img").html("<img src='http://media8.clubpenguin.com/game/items/images/paper/icon/60/"+Penguin.hand+".png'></img>")
	} if (Penguin.feet != 0){
		$("#feet_img").html("<img src='http://media8.clubpenguin.com/game/items/images/paper/icon/60/"+Penguin.feet+".png'></img>")
	} if (Penguin.photo != 0){
		$("#photo_img").html("<img src='http://media8.clubpenguin.com/game/items/images/paper/icon/60/"+Penguin.photo+".png'></img>")
	} if (Penguin.flag != 0){
		$("#flag_img").html("<img src='http://media8.clubpenguin.com/game/items/images/paper/icon/60/"+Penguin.flag+".png'></img>")
	} if (Penguin.body != 0){
		$("#body_img").html("<img src='http://media8.clubpenguin.com/game/items/images/paper/icon/60/"+Penguin.body+".png'></img>")
	} if (Penguin.face != 0){
		$("#face_img").html("<img src='http://media8.clubpenguin.com/game/items/images/paper/icon/60/"+Penguin.face+".png'></img>")
	}
	$("#user_nme").html(Penguin.username);
	$("#e_mail").html("Currently not available");
	$("#c_oins").html(Penguin.coins);
	$("#ran_k").html(Penguin.badgeLevel);
}
},1000)
};

/* Manage */
function c6b943c10 () {

};

/* Buy - Market Place */
function df07c553f () {

};
function finishLogin(){
	$.extend(Penguin, fetchUsers(Penguin.id));
	console.log(Penguin.nickname + ", Has logged in!");
	$("#hidden_nav_div").css("display", "block");
	$("#nav_no_signin").css("display", "none");
	$("#cards").html('<div class="card" style="height: 400px; width: 400px;"> <div class="row"> <div class="card"> <div class="card-image"> <img src="images/sample-1.jpg"> <span class="card-title">Update #1</span> </div> <div class="card-content"> <p>We are very sorry, But still we are under construction, constructing Friends and Inbox.</p> </div> <div class="card-action"> <a href="#">This is a link</a> </div> </div> </div> </div>')
	$("#Meow").html('<center> <h1><u>Welcome #'+Penguin.nickname+' </u></h1><br> <font size="7">Continue to Your profile by clicking the Menu button above (3 vertical Lines).</font> <hr> <h6>This is The Manager Insider Preview Home. You\'ll see latest notifications and blogal updates here. </h6><br><h5>CURRENTLY WORKING ON:</h5><ul><li>Profile System</ul> </center>'); }

function DoGetNav(){
	$("#_nav_junk").attr("class", "badge");$("#_nav_friends").attr("class", "badge");$("#_nav_notifi").attr("class", "badge");$("#_nav_inbox_").attr("class", "badge");
	junk = $.parseJSON(doPost("http://localhost:1221/user/?turn=getPlayerPost", {user:Penguin.id}, true));
	Penguin['allJunks'] = {};
	$.each(junk,
		function(i,item){
			items = item.split("|");
			Penguin['allJunks'][items[0]] = items;
	});
	console.log(Penguin.allJunks);

	unreadCount = $.parseJSON(doPost("http://localhost:1221/user/?turn=getUnreadPost", {user: Penguin.id}, true));
	if (unreadCount != 0){
		$("#_nav_junk").attr("class", "new badge");
		$("#_nav_junk").html(unreadCount);
	} else {
		TotalCount = Object.keys(Penguin['allJunks']).length;
		console.log("read all");
		$("#_nav_junk").removeClass("new badge").addClass("badge");
		$("#_nav_junk").html(TotalCount);		
	}
	Clicked.DoGetNav = 0;
	return;
}

function openReadPost(a){
	category = $(a).attr("category");
	swf = "http://media1.clubpenguin.com/play/v2/content/local/en/postcards/" + $(a).attr("post") + ".swf";
	postid = $(a).attr("id");
	from = Penguin.allJunks[postid][5];
	DEFAULT_HTML = $("#mail_pop").html();
	$("#MAIL2 #postcard").html('<object width="694px" height="259px" data="'+swf+'"></object>');
	$("#MAIL2 #postCategory").html(category);
	$("#MAIL2 #postFrom").html(from);
	$("#MAIL2").show();
	$("#MAIL1").fadeOut("fast");
}
function openPost(a){
	category = $(a).attr("category");
	swf = "http://media1.clubpenguin.com/play/v2/content/local/en/postcards/" + $(a).attr("post") + ".swf";
	postid = $(a).attr("id");
	from = Penguin.allJunks[postid][5];
	DEFAULT_HTML = $("#mail_pop").html();
	$("#MAIL2 #postcard").html('<object width="694px" height="259px" data="'+swf+'"></object>');
	$("#MAIL2 #postCategory").html(category);
	$("#MAIL2 #postFrom").html(from);
	$("#MAIL2").show();
	$("#MAIL1").fadeOut("fast");
	$("#"+postid).attr("onclick", "openReadPost()");
	doPost("http://localhost:1221/user/?turn=readPost", {post:postid}, false);
	Clicked.Mail = 0;
	$("#mail_pop").trigger("openJunks");
	$("#MAIL1").trigger("start");
	console.log(Clicked.DoGetNav);
}

setInterval(function(){$("#MAIL1").bind("start", function(){if (Clicked.DoGetNav==0){DoGetNav(); Clicked.DoGetNav=1;}})},1);
	
function continueGetUNREADJunks(){
	read = $.parseJSON(doPost("http://localhost:1221/user/?turn=readPosts", {user:Penguin.id}, true));
	a = {}
	$.each(read,
		function(i, item){
			items = item.split("|");
			a[items[3]] = [items[0], items[1], items[2], items[4], items[5]].join("|");
		}
		);
	Penguin.readJunk = a;
	unread_HTML = '<table class="centered hoverable"><thead><tr><th data-field="UNjunk_SNO">S. NO</th> <th data-field="UNjunk_about">Details</th> <th data-field="UNjunk_from">From</th> </tr> </thead>';
	if (Object.keys(Penguin.readJunk).length != 0) {
		unread_HTML = unread_HTML + "<tbody id='READJUNKS'>"
		sno = 0;
		$.each(Penguin.readJunk,
			function(i, item) {
				sno ++;
				HTML = "";
				detail = item.split("|");
				from = detail[4];
				about = $.parseJSON(doPost("http://localhost:1221/user/?turn=aboutStamp", {stamp:i}, true));
				Details = about.split("+")[1].split("|")[1];
				category = about.split("+")[1].split("%")[0];
				HTML = '<tr onclick="openReadPost(this)" category="'+category+'" post="'+i+'" id="'+detail[0]+'">' + "<td>" + sno + "</td>"+ "<td>" + Details + "</td>" + "<td>" + from + "</td>" + "</tr>";
				unread_HTML = unread_HTML + HTML;
			}
		);
		unread_HTML = unread_HTML + "</tbody>";
	} else {
		unread_HTML = unread_HTML + "</table><center><h4>You have no read mails.</h4></center>";
	}
	setTimeout(
		function(){
		$("#body_readJunks").html(unread_HTML);
	});
	return
}

function continueGetJunks(){
	unread_HTML = '<table class="centered hoverable"><thead><tr><th data-field="UNjunk_SNO">S. NO</th> <th data-field="UNjunk_about">Details</th> <th data-field="UNjunk_from">From</th> </tr> </thead>';
	if (Object.keys(Penguin.unreadJunk).length != 0) {
		unread_HTML = unread_HTML + "<tbody>"
		sno = 0;
		$.each(Penguin.unreadJunk,
			function(i, item) {
				sno ++;
				HTML = "";
				detail = item.split("|");
				from = detail[4];
				about = $.parseJSON(doPost("http://localhost:1221/user/?turn=aboutStamp", {stamp:i}, true));
				Details = about.split("+")[1].split("|")[1];
				category = about.split("+")[1].split("%")[0];
				HTML = '<tr onclick="openPost(this)" category="'+category+'" post="'+i+'" id="'+detail[0]+'">' + "<td>" + sno + "</td>"+ "<td>" + Details + "</td>" + "<td>" + from + "</td>" + "</tr>";
				unread_HTML = unread_HTML + HTML;
			}
		);
		unread_HTML = unread_HTML + "</tbody>";
	} else {
		unread_HTML = unread_HTML + "</table><center><h4>You have no unread mails.</h4></center>";
	}
	$("#body_unreadJunks").html(unread_HTML);
	return continueGetUNREADJunks();
}

function getJunks(){
	console.info("Clicked!");
	unreadPost = $.parseJSON(doPost("http://localhost:1221/user/?turn=getUnJunks", {user:Penguin.id}, true));
	a = {}
	$.each(unreadPost,
		function(i, item){
			items = item.split("|");
			a[items[3]] = [items[0], items[1], items[2], items[4], items[5]].join("|");
		}
		);
	Penguin.unreadJunk = a;
	return continueGetJunks();
}
setInterval(
	function(){
	if (Penguin.id){
		$("#_nav_div").attr("onclick", 'DoGetNav()');
	}
	$("#mail_pop").bind("openJunks", function(){
		if(Clicked.Mail == 0){
			setTimeout(function(){
				getJunks();
			},5000);
			Clicked.Mail = 1;
		}
	});
},1)
setInterval(
	function(){
		if (Penguin.id){
			var Notifi;
		if(Penguin.id){
			var notification;
			notification = [];
			unreadPost = $.parseJSON(doPost("http://localhost:1221/user/?turn=getUnreadPost", {user:Penguin.id}, true));
			if (unreadPost == 0){				
				$("#_status_notifications").attr("data-tooltip", "Notifications - None");
				$("#_status_notifications").html("notifications_none");
				notifi = "<b>JUNKS (IN-GAME MAIL) :</b> No new mails.";
				$.merge(notification, [notifi]);
				Clicked.notify = false;
			} else {
				$("#_status_notifications").attr("data-tooltip", "Notifications - New *");
				$("#_status_notifications").html("notifications_active");
				notifi = "<b> JUNKS(IN-GAME MAIL) : </b>" + unreadPost + " .";
				$.merge(notification, [notifi]);
				Clicked.Noti = unreadPost;
				if (Clicked.lastNotofication != unreadPost){
					Clicked.lastNotofication = unreadPost;
					Clicked.notify = true;
				} else {
					Clicked.notify = false;
				}
			}
			$.merge(notification, ["<b>FRIENDS :</b> Sorry we don't support Friends for now.<br><b>PROFILE :</b> They are off for now...!"])
			notification = notification.join("<br>");
			$("#notifications_statusbar").html(notification);
		}
		
	}}
	,10000);
setInterval(
			function(){
			if (Penguin.id){
				if (Clicked.notify == true){
				Materialize.toast("You have " + Clicked.Noti + ", unread Junks.", 30000);
			}}
				}
			,10000)
setInterval(function(){
	hash = window.location.hash;
	if ( hash == "#"){
		window.location.hash = 'Home'
	} if (hash == "#!"){
		window.location.hash = 'Home'
	} if (hash == ''){
		window.location.hash = 'Home'
	}
	if (Clicked.lastTarget != hash){
		Clicked.lastTarget = hash;
		if(Penguin.id){
		if (hash == "#Puffle"){			
			$("#Puffle").show();
			$("#Home").hide();
			$("#Profile").hide();
			$("#Buy").hide();
			$("#Manage_Penguin").hide();
		} else if (hash == "#Home"){
			$("#Home").show();
			$("#Profile").hide();
			$("#Buy").hide();
			$("#Manage_Penguin").hide();
			$("#Puffle").hide();
		} else if (hash == "#Profile"){			
			$("#Home").hide();
			$("#Profile").show();
			$("#Buy").hide();
			$("#Manage_Penguin").hide();
			$("#Puffle").hide();
		} else if (hash == "#Manage_Penguin"){
			$("#Home").hide();
			$("#Profile").hide();
			$("#Buy").hide();
			$("#Manage_Penguin").show();
			$("#Puffle").hide();
		} else if (hash == "#Buy"){
			$("#Home").hide();
			$("#Profile").hide();
			$("#Buy").show();
			$("#Manage_Penguin").hide();
			$("#Puffle").hide();
		} else {
			$("#Home").show();
			$("#Profile").hide();			
			$("#Buy").hide();
			$("#Manage_Penguin").hide();
			$("#Puffle").hide();
			console.log(hash + ", cannot find any suitable stuff..");
			Clicked.lastTarget = "#Home";
			window.location.hash = "Home";
		} 
	} else {
		$("#Home").show();
		$("#Profile").hide();			
		$("#Buy").hide();
		$("#Manage_Penguin").hide();
		$("#Puffle").hide();
		window.location.hash = "Home";
	}
	}

},100);
function bind(toBind){
	if (toBind == 'Mail'){
		$('#body_unreadJunks').html("<center>Fetching mails.. <div class='progress'><div class='indeterminate'></div></center></div>"); 
		$('#body_readJunks').html("<center>Collecting mails.. <div class='progress'><div class='indeterminate'></div></center></div>"); 
		Clicked.Mail = 0;
		$("#mail_pop").trigger("openJunks");
	}
}

