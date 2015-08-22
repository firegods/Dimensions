/* CLIENT FUNCTIONS AND IMPLEMENTATIONS */

function doPost(url, dict, return1){
	var parsed;
	var return1;
	return1 = return1 > 0;
	// Do the post (ie, GET :P)
	$.ajax({
	    async: false,
	    type: 'POST',
	    url: url,
	    data: dict,
	    dataType: 'html',
	    success: function(data) {
	        parsed = data;
	    }
	});
	if (return1 == true){
 		return parsed.toString();
	}
}

function encrypt_password(pass){
	//trans is generated using Python, By me!!
	var trans = {'1': '?!@#..##', '0': 'K5tZ02ikY8ivzAN', '3': 'tuTu8lpuk0FkaCXZVrsLxuc1SYXIgdBja2yoF', '2': 'vWOsKeby45fmbv5ouQ3z8NNcozj5Z2J8I', '5': 'K23qwcTUO9xn5ummXH2GzFo2DAIU44BDw', '4': '6sM', '7': 't5l4zNb8zK', '6': 'ww9ioBCLPDHB6ArPndhKJi4pYW6RDPlEHwRixBAjs9Yqvzexi0VlLWXLI', '9': 'bdw52XgtOCIiRdLFyTA9zIq4Kgg8u', '8': 'sMP5XnTYrP2vgr4C2Q8', 'A': 'PqcwXB4jF1NVT3dSMfaRHe9FvjDmcos3KoMmcOenh', 'C': 'NpYLorO2YBK7A0jEUuwaX7GDy9RgvAdd3X4aXYdex6STvQv3GtnC', 'B': 'NxmThWQMJdzZjzCzsfPPGjKVBLL6smqjuVcfbKBFwDFB2tySHAxKLlAN', 'E': '3jFAt', 'D': 'I34ewRMk', 'G': 'Y5rZ6MXGTWQ5Ufk6T7Q8I6waWLD80ns6IleKvqIKdEifR', 'F': 'UGnQJAOYQRmeiELSK2tW1W1KoUHEIjoOsF6qQYJ', 'I': 'Gls', 'H': 'vJSU1YfCucA6qaHXcpaAs7Ek2xsN', 'K': '4kWaX1DkfWh6RUnOcvK6g4OzE1mlXYImOQKudicNC', 'J': '72VWiwUbsFxOSkmN5ueVESoXX6EIM5x94NC5WLe1TZ9', 'M': '2tuFoKv0qxEGRf4XfM0Xk', 'L': 'lPL9VHslZxqP5WvRiKY6wWeksHzbITzRz9G', 'O': 'mq2kSr7508f9zFbQf', 'N': 'w2eSCoJu', 'Q': 'fmgXxXnRMnt0CMNywWEkW2CCtUXxChKb0s6YeQp1n9', 'P': 'rLE5u0GbkRcKILDJfr2f4dDRqrkbcjwbgxzd3xHFWjnE', 'S': 'OjeeNE2ninJFIYClg97Yyc04jHXA3d46BWJY', 'R': 'yWG', 'U': '8DrRJmz0hlrWjPg2eqDsczwcarFSd4cuWsW', 'T': 'D9kZi8ZyRdePSH93b0EmQawdLaeD48HPFD66EIiSKYeoVRsDRFO', 'W': '1HKTjcY5VWMDFDNNuvOhVRW3QCzSn7FjuHihlX', 'V': '8WZneTiQ', 'Y': 'I1Oize5ayF7HiH1tRAYC8yw1', 'X': '4Z7VStqhUd6XYrgCopJXnUa1r06OhGWR0iulmKG1IamSrEB1bxZd5rIG', 'Z': '1xbKpJ4Zyu3jx9yE6u7', 'a': 'FVKcLS8qI', 'c': 'lAD8hPNZ7wUixTpsVww7ql9Pf2CZ', 'b': 'h5p4z2Px2eI0bSPcd1ShtSebd04yjq4UxfbPTd60ntK', 'e': 'ciPse8c7FIyCUR1FPTeHztWXy2Yd9DwIVsDUO8IF3RrdXSOG0XIv4LXS3', 'd': 'zHMF5rlDD8XMpiTdI', 'g': '3daViqjChs83wKq8vhq8O0yBKo', 'f': 'kImhiph0TcTkYGAo1k2e1BeCfErUAU7YUkwbTBhQFaRmdySpO6OzWkg6D', 'i': 'P6IkniRSG7c7960VEQ99', 'h': 'zj4PsuqN96hk69Fp0zSEGYLriunRuClOo7anUWd', 'k': '8WTQSGPRwpA21osXv5oWC4AtAgwKuKHFsaEh02sHAhtWrej', 'j': 'hnZlKpqoVR4eens6Edz5IIVpdjcUTwk0kMJZv7icg', 'm': '05uavc9efxMenpiahT76xY8cx5x', 'l': 'AmqTzjNwIrAoMvHauPyY7mx4NtxROuoJIgUlQJkRohhRWwtEuSZgPWL8uSrXi', 'o': 'ObFjaiZaHOCMvouN', 'n': '9yPL1tywHcuSJt9w02', 'q': 'QfxGieTDK06Rb13xgEWcEQrFDWM4pggDrGopZE3Cn1aM4EunWZ9xYef3yAH', 'p': 'kPYZcBc', 's': 'qmURT4ZfUfeNgVW5QL9ZeeX6ytxPi6RiFL5T6MspbNhoNwKdbljWZGlHmi5R', 'r': 'Pegn1Ce1SEj7HYIS6ryd7HNbVAFtFudxsJG5hdrRh4jy01jWeunRZfF', 'u': 'p1ejAItXrMPT', 't': 'RlJcSy3gBfqrDW8oyt', 'w': 'F3t1GsG1sc2SaAMTMGQZx4I0IV', 'v': 'QfpghOMjlPBTHmd8wUvzXv2aWEXpc5J5DFqih3lMqnj7fWEl0AO', 'y': '4etDD60SBMEV4WDOe6CibiEHCj5mRv9T1rbmIqERHbiI07Vc8plqhO', 'x': 'Hswm6sb4J11tieGfWJeVFsiBBG8eqOrbrn', 'z': 'Ahuj1InIEtm4Kyj13Btge7fp'}
	value = strtr(pass, trans);
	return value;
}

function checkPassword(user, password){
	check = doPost("http://localhost:1221/user/?turn=checkpassword", {user:user, pass:password}, true);
	if (check == '0'){
		check = "#Er<0xU87D64>#";
	} else {
		check = jQuery.parseJSON(check);
	}
	return check;

}

function userExist(user){
	about_user = doPost("http://localhost:1221/user/?turn=userexist", {user:user}, true);
	if (about_user == '0'){
		about_user = "#Er<0xCD4F554>#";
	} else {
		about_user = jQuery.parseJSON(about_user);
	}
	return about_user
}

function fetchUsers (id){
	details = jQuery.parseJSON(doPost("http://localhost:1221/user/?turn=getDetails", {id:id}, true));
	return details;
}

function doLogin(){
	username = $("#username").val();
	password = $("#password").val();

	passCheck = checkPassword(username, password)
	if (passCheck.valid != '1'){
		$("#password").attr("class", "invalid");
		return false;
	} else {
		$("#password").attr("class", "valid");
		$("#Meow").html('<center>Loading, please wait.. <br><div class="progress"><div class="indeterminate"></div></center></div>');
		Penguin.id = doPost("http://localhost:1221/user/?turn=getID", {user:username}, true);
		Penguin.username = username;
		finishLogin();
		return true;
	}
}
