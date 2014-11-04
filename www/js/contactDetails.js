$(document).ready(function(){

	// binding click event logic for favorite icon
	$("#contactFavoriteStatus").off('click');
	$("#contactFavoriteStatus").on('click',function(event){
	    var contactDetailsObj = parsedContactsObject.Contact[localStorage.konyContactDetails];
		modifyFavorite(this,'contacts',contactDetailsObj.Id); // Modifying the favorite status of the correponding item
	});
	
});
var objectContact;//Decalring contact object

/**********************************************
* updateContact()
* 
* This function is used to update corresponding
* contact data in local database.
* 
* inputs:
* @objectContact - corresponding contact details
* 				JSON object
* 
**********************************************/

function updateContact(){
    ldr.show();
    var firstname = $.trim($("#contactFirstname_txt").val());
    var lastname = $.trim($("#contactLastname_txt").val());
    var phone = $.trim($("#contactPhone_txt").val());
    var email = $.trim($("#contactMail_txt").val());
    var contactname = firstname+' '+lastname;
    
    objectContact = {"Name": contactname,"FirstName": firstname,"LastName": lastname, "Phone": phone, "Email": email};
    
    Contact.update("where Id = '"+localStorage.Id+"'", objectContact, updatesuccess , updatefailure, true);

}
var updatesuccess = function(data){
    ldr.hide();
    
    $("#contactName h2").html(objectContact.Name);
    $("#contactFirstname").html(objectContact.FirstName);
    $("#contactLastname").html(objectContact.LastName);
    $("#contactPhone h2").html(objectContact.Phone);
    $("#contactPhoneNumber").attr('href','tel:'+objectContact.Phone);
    $("#contactMail h2").html(objectContact.Email);
    $("#contactEMail").attr('href','mailto:'+objectContact.Email);
    
    $(".contactForm").hide();
    $(".contactdata").show();
};
var updatefailure = function(data){
    alert(JSON.stringify(data)); 
    $(".contactForm").hide(); 
    $(".contactdata").show();
}
