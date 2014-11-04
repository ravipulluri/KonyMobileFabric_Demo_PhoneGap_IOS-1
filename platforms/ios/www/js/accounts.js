
/**************** Accounts Integration callbacks starts here  *************/
var parsedAccountsObject;//Accounts object
var accountsIntegrationSuccessCallback = function(data){
	ldr.hide();
    parsedAccountsObject = data;//JSON.parse(data);
    var accountListItems = '';
    $.each(parsedAccountsObject.Account,function(index,account){
    	
    	account.BillingState = ($.trim(account.BillingState) == "null" || typeof(account.BillingState) === 'undefined') ? "" : account.BillingState;
    	account.Phone = ($.trim(account.Phone) == "null") ? "" : account.Phone;

    	if($.trim(account.BillingCity) != 'null' && typeof(account.BillingCity) !== 'undefined')
    		var address = account.BillingCity+', '+account.BillingState;
    	else
    		var address = account.BillingState;
		if(address.substr(address.length-2, 2) == ", "){
		    address = account.BillingCity;
		}

    	if($.trim(account.Type) != 'null')
    		var accType = account.Type;
    	else
    		var accType = '';
    	
    	//Logic for adding class to the last list item
    	var lastItemClass= '';
    	if(parsedAccountsObject.Account.length == index+1){
    		lastItemClass= 'border-last';
    	}
    	
		accountListItems += '<li onclick=\'storeAccountDetails('+index+');\' class="accountList '+lastItemClass+'" >'+
								'<div class="media-list">'+
									'<div class="media">'+
										  '<a href="#" class="pull-left"><img src="images/account-list-icon.png" alt="" /></a>'+
										  '<div class="media-body">'+
											    '<h2 class="media-heading FilterTarget">'+account.Name+'</h2>'+
											    '<p class="sub-text"> '+address+'</p>'+
									            '<p>'+accType+'</p>'+
							              '</div>'+
						            '</div>'+
							     '</div>'+
							  '</li>';
    });
    
    $("#ListItems ul").html(accountListItems);
    
};

var accountsIntegrationFailureCallback = function(data){
	console.log(JSON.stringify(data));
};
/**************** Accounts Integration callbacks ends here  ****************/

/**********************************************
* storeAccountDetails()
* 
* This function is used to store corresponding
* account data in local storage before 
* redirecting to the Details page.
* 
* inputs:
* @accountObj - corresponding account details
* 				JSON object index
* 
**********************************************/
function storeAccountDetails(accountObj){
	localStorage.konyAccountDetails = accountObj; //storing the corresponding account details in localstorage
	changePage('accountdetailspage','');
}

