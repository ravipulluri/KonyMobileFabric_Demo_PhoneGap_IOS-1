
/**************** Opportunities Integration callbacks starts here  *************/
var parsedOpportunitiesObject; //Opportunities object
var opportunitiesIntegrationSuccessCallback = function(data){
	ldr.hide();
    parsedOpportunitiesObject = data;
    var opportunityListItems = '';
    $.each(parsedOpportunitiesObject.Opportunity,function(index,opportunity){
    	var probability = parseInt(opportunity.Probability);
    	
    	//Logic for adding class to the last list item
    	var lastItemClass= '';
    	if(parsedOpportunitiesObject.Opportunity.length == index+1){
    		lastItemClass= 'border-last';
    	}
    	
    	opportunityListItems += '<li onclick=\'storeOpportunityDetails('+index+');\' class="opportunityList '+lastItemClass+'" >'+
								'<div class="media-list">'+
									'<div class="media">'+
										  '<a href="#" class="pull-left"><img src="images/p'+probability+'.png" alt="" /></a>'+
										  '<div class="media-body">'+
											    '<h2 class="media-heading FilterTarget">'+opportunity.Name+'</h2>'+
											    '<p class="sub-text"> '+opportunity.StageName+'</p>'+
									            '<p> '+opportunity.Type+' </p>'+
							              '</div>'+
						            '</div>'+
							     '</div>'+
							  '</li>';

    });
    
    $("#ListItems ul").html(opportunityListItems);
    
};

var opportunitiesIntegrationFailureCallback = function(data){
	console.log(JSON.stringify(data));
};
/**************** Opportunities Integration callbacks ends here  ****************/


/**********************************************
* storeOpportunityDetails()
* 
* This function is used to store corresponding
* opportunity data in local storage before 
* redirecting to the Details page.
* 
* inputs:
* @opportunityObj - corresponding opportunity 
* 					details JSON object index
* 
**********************************************/
function storeOpportunityDetails(opportunityObj){
	localStorage.konyOpportunityDetails = opportunityObj; //storing the corresponding opportunity details in localstorage
	changePage('opportunitydetailspage','');
}
