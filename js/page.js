var Profile;
var Manage;
var Market;
var Penguin;


Penguin = {}

/* Profile */
function cfdb9773a (){

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
	$("#Meow").html('<center> <h1><u>Welcome #'+Penguin.nickname+' </u></h1><br> <font size="7">Continue to Your profile by clicking the Menu button above (3 vertical Lines).</font> <hr> <h6>This is The Manager Insider Preview Home. You\'ll see latest notifications and blogal updates here. </h6> </center>'); }

function DoGetNav(){
	$("#_nav_junk").attr("class", "badge");$("#_nav_friends").attr("class", "badge");$("#_nav_notifi").attr("class", "badge");$("#_nav_inbox_").attr("class", "badge");
	junk = $.parseJSON(doPost("http://localhost:1221/user/?turn=getPlayerPost", {user:Penguin.id}, true));
	Penguin['allJunks'] = {};
	$.each(junk,
		function(i,item){
			items = item.split("|");
			console.log(items);
			Penguin['allJunks'][items[0]] = items;
	});
	console.log(Penguin.allJunks);
	unreadCount = $.parseJSON(doPost("http://localhost:1221/user/?turn=getUnreadPost", {user: Penguin.id}, true));
	if (unreadCount != 0){
		$("#_nav_junk").attr("class", "new badge");
		$("#_nav_junk").html(unreadCount);
	}
}

setInterval(
	function(){
	if (Penguin.id){
		$("#_nav_div").attr("onclick", 'DoGetNav()');
	}
},1)

