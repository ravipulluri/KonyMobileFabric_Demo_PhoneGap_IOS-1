/*****************************************
* logout()
* This function is used to clear session
* and all the localstorage values.
*****************************************/
function logout()
{
	ldr.show();
	/**************  Kony initialization code ***********/
	identity.logout(logoutSuccessCallback,logoutFailureCallback);
	
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

