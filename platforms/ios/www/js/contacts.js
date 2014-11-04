$(document).ready(function(){
	//binding keyup event for search/filter logic implementation
	$('#search_input').off('keyup');
	$('#search_input').on('keyup',function(event){
		filterByText(event.target.value,'contactList'); //calling global filtering method
	});
	
	$("#editcontact").click(function(){
	    $(".contactForm").show();
	    $(".contactdata").hide();
	    
	});
});
var parsedContactsObject;//contacts object

/**************** Getting Contacts *************/
function getall()
{
    Contact.getAll(contactsIntegrationSuccessCallback,contactsIntegrationFailureCallback);
}

/**************** Contacts Integration callbacks starts here  *************/
var contactsIntegrationSuccessCallback = function(data){
	ldr.hide();
    
    parsedContactsObject = data;
    var contactListItems = '';
   
    $.each(parsedContactsObject,function(index,contact){
    	contact._Title = (typeof(contact._Title) === 'undefined' || contact._Title == 'null') ? '' : contact._Title;
    	contact._FirstName = (contact._FirstName == 'null') ? '' : contact._FirstName;
    	contact._LastName = (contact._LastName == 'null') ? '' : contact._LastName;
    	contact._Phone = (contact._Phone == 'null') ? '' : contact._Phone;
    	contact._Email = (contact._Email == 'null') ? '' : contact._Email;
    	
    	//Logic for adding class to the last list item
    	var lastItemClass= '';
    	if(parsedContactsObject.length == index+1){
    		lastItemClass= 'border-last';
    	}
    	//JSON.stringify(contact)
    	contactListItems += '<li onclick=\'storeContactDetails('+index+');\' class="contactList '+lastItemClass+'" >'+
						    	'<div class="media-list">'+
						        '<div class="media">'+
						            '<a href="#" class="pull-left"><img src="images/contact-icon.png" alt="" /></a>'+
						            '<div class="media-body">'+
						               '<h2 class="media-heading FilterTarget" >'+contact._FirstName+' '+contact._LastName+'</h2>'+
						                '<p class="sub-text">'+contact._Title+'</p>'+
						           '</div>'+
						         '</div>'+
						         '</div>'+
						     '</li>';
    	
    });
    $("#ListItems ul").html(contactListItems);
    
};

var contactsIntegrationFailureCallback = function(data){
	console.log(JSON.stringify(data));
};
/**************** Contacts Integration callbacks ends here  ****************/

/**********************************************
* storeContactDetails()
* 
* This function is used to store corresponding
* contact data in local storage before 
* redirecting to the Details page.
* 
* inputs:
* @contactObj - corresponding contact details
* 				JSON object index
* 
**********************************************/
function storeContactDetails(contactObj){
	localStorage.konyContactDetails = contactObj;//storing the corresponding contact details in localstorage
	changePage("contactdetailspage",'');
}
