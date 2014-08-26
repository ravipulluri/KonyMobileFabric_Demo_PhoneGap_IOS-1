/*****************************************
* logout()
* This function is used to clear session
* and all the localstorage values.
*****************************************/
function logout()
{
	ldr.show();
	/**************  Kony initialization code ***********/
	var konymbaas = new Kony.cloud();
	konymbaas.init(
	    "1962883578de52a0b214ae92ec26f08e", // App key of application to use MBaaS APIs
	    "88f695c9dcabbb10073a132dade691ee", // App secret of application to use MBaaS APIs
	    "https://popcornapps.auth.konycloud.com/appconfig", // URL for App's Service Document     
	    function(data){},
	    function(data){}
	);
	konymbaas.auth("CRM").getToken('false',function(data){},function(data){}); // setting X-Kony-Authorization
	/**************  Kony initialization code ***********/
	
	var authServiceObj = konymbaas.auth();
	authServiceObj.logout(logoutSuccessCallback,logoutFailureCallback);
	
}

/**************** Logout callbacks starts here  ****************/

var logoutSuccessCallback = function(data){
	
	ldr.hide();
	
	//Removing localstorage data except rememberMe data
	localStorage.removeItem('konyAuthorization');
	localStorage.removeItem('konyContactDetails');
	localStorage.removeItem('konyActivityDetails');
	localStorage.removeItem('konyAccountDetails');
	localStorage.removeItem('konyOpportunityDetails');
	localStorage.removeItem('konyLeadDetails');
	
	window.location.href="index.html"; // redirecting to login page
};

var logoutFailureCallback = function(data){
	ldr.hide();
	console.log(data);	
};

/**************** Logout callbacks ends here  ****************/

