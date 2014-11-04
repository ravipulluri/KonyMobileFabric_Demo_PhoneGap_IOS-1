var konyObject;
var identity;

$(function() {
	ldr.show();
	setTimeout(function(){
        konyObject = new kony.sdk();
	    konyObject.init(
	        KonyappKey,
	        KonyappSecret,
	        KonyappService,   
	        InitSuccessCallback,
	        InitFailureCallback
	    );
	},1000);
	// event handler for login button
	$("#login").click(function () {

		var username = $.trim($("#username").val());
		var password = $("#password").val();
		
		if (username == "") {
			alert('Please Enter User Name');
			return false;
		}else if (password == "") {
			alert('Please Enter Password');
			return false;
		}else{
			ldr.show();
			
			//login request parameters
			var loginObj = {"userid" : username,"password" : password };
			
			//Calling auth function for getting Authentication service handler
			identity = konyObject.getIdentityService("SFIdentity");
			//Login Validation using autentication service handler object
			identity.login(loginObj,LoginSuccessCallback,LoginFailureCallback);
		}
	});
    
});

/***************** init callbacks starts here  ****************/
var InitSuccessCallback = function(data){
	if(localStorage.konycurrentUser){
		var userDetails = JSON.parse(localStorage.konycurrentUser);
		if(userDetails.username){
			$("#username").val(crypt.decode(userDetails.username));
			$("#password").val(crypt.decode(userDetails.password));
		}
	}
	ldr.hide();
};

var InitFailureCallback = function(data){
    alert(JSON.stringify(data));
	ldr.hide();
};
/*****************  init callbacks ends here  ****************/



/*****************  Login callbacks starts here  ****************/
var LoginSuccessCallback = function(data){
	if($('#rememberme').is(':checked')){
		var username = crypt.encode($.trim($("#username").val()));
		var password = crypt.encode($("#password").val());
		var currentUser = {'username':username,'password':password};
		localStorage.konycurrentUser = JSON.stringify(currentUser); //storing user details in local storage
	}
	
	//Manipulate user data here if needed
	identity.getBackendToken('false','',BackendTokenSuccessCallback,BackendTokenFailureCallback); // Getting BackendToken

};

var LoginFailureCallback = function(data){
	ldr.hide();
	console.log(JSON.stringify(data));
	alert(JSON.stringify(data));
	return false;
};
/****************  Login callbacks ends here  ****************/



/***************** BackendToken callbacks starts here  ****************/
var BackendTokenSuccessCallback = function(data){
    	
    localStorage.konyAuthorization = data.value; //storing authorization in localstorage

    if(localStorage.regid != ""){
        
            // Registering Device   
            var msgService = konyObject.getMessagingService();
                                  
            msgService.register("iphone", device.uuid, data.value, $.trim($("#username").val()), function(data){ 
	        
	            changePage("Dashboard",'bg-primary');
	            
	        },function(data){
	            console.log(data);
	        });
	    }
	else{
        changePage("Dashboard",'bg-primary');
    }
    
    syncInitialize();//starting sync service
	  
};

var BackendTokenFailureCallback = function(data){
	ldr.hide();
	console.log(data);
};
/**************** BackendToken callbacks ends here  ****************/

