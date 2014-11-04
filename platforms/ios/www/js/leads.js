
/**************** Leads Integration callbacks starts here  *************/
var parsedLeadsObject;//Leads Object
var leadsIntegrationSuccessCallback = function(data){
	ldr.hide();
    parsedLeadsObject = data;
    var leadListItems = '';
    $.each(parsedLeadsObject.Lead,function(index,lead){
    	lead.Title = (lead.Title == 'null') ? '' : lead.Title;
    	lead.LastName = (lead.LastName == 'null') ? '' : lead.LastName;
    	
    	//Logic for adding class to the last list item
    	var lastItemClass= '';
    	if(parsedLeadsObject.Lead.length == index+1){
    		lastItemClass= 'border-last';
    	}
    	
    	leadListItems += '<li onclick=\'storeLeadDetails('+index+');\' class="leadList '+lastItemClass+'" >'+
						    	'<div class="media-list">'+
						        '<div class="media">'+
						            '<a href="#" class="pull-left"><img src="images/contact-icon.png" alt="" /></a>'+
						            '<div class="media-body">'+
						               '<h2 class="media-heading FilterTarget">'+lead.FirstName+' '+lead.LastName+'</h2>'+
						                '<p class="sub-text">'+lead.Title+'</p>'+
						           '</div>'+
						         '</div>'+
						         '</div>'+
						     '</li>';
						     
    	
    });
    
    $("#ListItems ul").html(leadListItems);
    
};

var leadsIntegrationFailureCallback = function(data){
	console.log(JSON.stringify(data));
};
/**************** Leads Integration callbacks ends here  ****************/

/**********************************************
* storeLeadDetails()
* 
* This function is used to store corresponding
* lead data in local storage before 
* redirecting to the Details page.
* 
* inputs:
* @leadObj - corresponding lead details
* 				JSON object index
* 
**********************************************/
function storeLeadDetails(leadObj){
	localStorage.konyLeadDetails = leadObj; //storing the corresponding lead details in localstorage
	changePage('leaddetailspage','');
}
