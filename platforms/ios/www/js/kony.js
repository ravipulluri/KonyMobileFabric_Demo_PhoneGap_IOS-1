var scripts = ['lib/jquery-migrate-1.0.0','lib/jquery.tmpl.min','lib/jquery-ui-1.8.16.custom.min','lib/jquery.switchbutton.min','lib/jquery.loader','lib/custom-jquery','lib/bootstrap.min','lib/ContactModel','lib/KonySyncDDL','lib/KonySyncScopes',"pushnotifications", "config", "lib/crypt","login", "sync", "contacts", "contactDetails", "accounts", "accountDetails", "opportunities", "opportunityDetails", "leads", "leadDetails", "dashboard"];

var contObj = [];
$.each(scripts, function(i, view) {
	$("head").append('<script type="text/javascript" src="js/'+scripts[i]+'.js"><\/script>');
});

function changePage(page, classname){
    
	var header = "";
    $(".page").hide();
    $("#Dashboard").show();
    $("#header").html(page);
    $("#ListItems ul").html("");
    $( 'body' ).attr( "class",classname);
    
    switch (page) {
    case "Dashboard":
        $("#DashboradList, .sync-but").show();
        $("#homebtn, #ListItems").hide();
    break;
	case "Contacts":
	    ldr.show();
        $("#homebtn, #ListItems").show();
        $("#DashboradList").hide();
        //contactsIntegrationSuccessCallback(contObj);
        getall();
		/*var contactsIntegrationObj = konyObject.getIntegrationService("SFContact");
	    var post_data = {"queryString" : "SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Contact"}; 
        
        contactsIntegrationObj.invokeOperation("getContact", header, post_data, contactsIntegrationSuccessCallback, contactsIntegrationFailureCallback);*/
		break;
		
	case "contactdetailspage":
	    $(".page, .contactForm").hide();$("#"+page+", .contactdata").show();
	    
		var contactDetails = parsedContactsObject[localStorage.konyContactDetails];
		localStorage.Id = contactDetails._Id;//storing contact id
	    // Filling corresponding elements with dynamic data using corresponding Ids
	
	    $("#contactName h2").html(contactDetails._FirstName+' '+contactDetails._LastName);
	    $("#contactName h3").html(contactDetails._Title);
	    $("#contactFirstname").html(contactDetails._FirstName);
	    $("#contactFirstname_txt").val(contactDetails._FirstName);
	    $("#contactLastname").html(contactDetails._LastName);
	    $("#contactLastname_txt").val(contactDetails._LastName);
	
	    if(contactDetails._Phone != "" && typeof(contactDetails._Phone) !== 'undefined'){
		    $("#contactPhone h2").html(contactDetails._Phone);
		    $("#contactPhoneNumber").attr('href','tel:'+contactDetails._Phone);
	    }else{
		    $("#contactPhone h2").html("");
		    $("#contactPhoneNumber").attr('href','#');
	    }
	    $("#contactPhone_txt").val(contactDetails._Phone);
	
	    if(contactDetails._Email != "" && typeof(contactDetails._Email) !== 'undefined'){
		    $("#contactMail h2").html(contactDetails._Email);
		    $("#contactEMail").attr('href','mailto:'+contactDetails._Email);
	    }else{
		    $("#contactMail h2").html("");
		    $("#contactEMail").attr('href','#');
	    }
	    $("#contactMail_txt").val(contactDetails._Email);
	    
	    //getting header height and applying to content
	    $('#'+page+' section').css( "padding-top", $("#"+page+" header").height() );

	    // Favorite Highlighting logic
	    if(localStorage.konyFavorites != undefined ){
		
		    var konyFavs = JSON.parse(localStorage.konyFavorites);
		    var itemId = contactDetails._Id;
		
		    if(konyFavs['contacts'] != undefined){
			    if(konyFavs['contacts'].indexOf(itemId) == '-1'){
				    $("#contactFavoriteStatus").attr('src','images/star.png');
			    }
			    else{
				    $("#contactFavoriteStatus").attr('src','images/star-fav.png');
			    }
		    }
	    }
		break;
	case "Accounts":
         ldr.show();
        $("#homebtn, #ListItems").show();
        $("#DashboradList").hide();
         
         var accountsIntegrationObj = konyObject.getIntegrationService("SFAccount");
	     var post_data = {"queryString" : "SELECT name,type,BillingCity,BillingState,AnnualRevenue,website,Industry,phone,BillingStreet from Account where type!=null"}; 
	     accountsIntegrationObj.invokeOperation("getAccount", header, post_data, accountsIntegrationSuccessCallback, accountsIntegrationFailureCallback);
		break;
		
	case "accountdetailspage":
	    $(".page").hide();$("#"+page).show();
	
	    var accountDetails = parsedAccountsObject.Account[localStorage.konyAccountDetails];
	    // Filling corresponding elements with dynamic data using corresponding Ids
	    $("#accountNameDisplay").html(accountDetails.Name);
	
	    if(accountDetails.BillingCity != 'null' && typeof(accountDetails.BillingCity) !== 'undefined'){ 
		    var billingCityState = accountDetails.BillingCity+', '+accountDetails.BillingState;
	    }else{
		    var billingCityState = accountDetails.BillingState;
	    }
	    if(billingCityState.substr(billingCityState.length-2, 2) == ", "){
		    billingCityState = accountDetails.BillingCity;
		}
		
	    $("#billingCityStateDisplay").html(billingCityState);
	    
	    if(accountDetails.Type != 'null' && typeof(accountDetails.Type) !== 'undefined'){
		    $("#accountTypeDisplay").html(accountDetails.Type);
	    }else{
	        $("#accountTypeDisplay").html("");
	    }
	    if(accountDetails.Industry == "null" || typeof(accountDetails.Industry) === 'undefined'){
		    $("#accountIndustryDisplay h2").html('');
	    }else{
		    $("#accountIndustryDisplay h2").html(accountDetails.Industry);
	    }
	    $("#billingAddressDisplay").html(accountDetails.BillingStreet);
	    if(accountDetails.Phone != "null" && typeof(accountDetails.Phone) !== 'undefined'){
		    $("#accountDetailsPhone").attr('href','tel:'+accountDetails.Phone);
	    }else{
	        $("#accountDetailsPhone").attr('href','#');
	    }
	    if(accountDetails.Website != "null" && typeof(accountDetails.Website) !== 'undefined'){
		    var check_http = accountDetails.Website.indexOf( 'http://' ) === -1 && accountDetails.Website.indexOf( 'https://' ) === -1;
		    if ( check_http ) {
			    accountDetails.Website = "http://"+accountDetails.Website;
		    }
		    $("#accountDetailsUrl").attr("href", accountDetails.Website);
	    }else{
	    
	        $("#accountDetailsUrl").attr("href", "#");
	    }
	
	    $("#phoneDisplay").html(accountDetails.Phone);
	    $("#websiteDisplay").html(accountDetails.Website);
	    
	    //getting header height and applying to content
	    $('#'+page+' section').css( "padding-top", $("#"+page+" header").height() );
	    
	    // Favorite Highlighting logic
	    if(localStorage.konyFavorites != undefined ){
		
		    var konyFavs = JSON.parse(localStorage.konyFavorites);
		    var itemId = accountDetails.Id;
		
		    if(konyFavs['accounts'] != undefined){
			    if(konyFavs['accounts'].indexOf(itemId) == '-1'){
				    $("#accountFavoriteStatus").attr('src','images/star.png');
			    }
			    else{
				    $("#accountFavoriteStatus").attr('src','images/star-fav.png');
			    }
		    }
	    }
	
	    break;
	case "Activities":
        ldr.show();
        $("#homebtn, #ListItems").show();
        $("#DashboradList").hide();
	
	    var activitiesIntegrationObj = konyObject.getIntegrationService("SalesForceTasks");
	    var post_data = {"Authorization" : "Bearer "+localStorage.konyAuthorization }; //passing Authorization header in data
	    activitiesIntegrationObj.invokeOperation("getTasks", header, post_data, activitiesIntegrationSuccessCallback, activitiesIntegrationFailureCallback);
	
	    break;
	    
    case "activitydetailspage":
	    $(".page").hide();$("#"+page).show();
        var activityDetails = JSON.parse(localStorage.konyActivityDetails);
	
	    // Filling corresponding elements with dynamic data using corresponding Ids
	
	    $("#activitySubjectDisplay").html(activityDetails.name);
	    $("#activityPriorityDisplay").html("Priority: "+activityDetails.priority);
	
	    activityDetails.activitydate = (activityDetails.activitydate == 'null') ? '' : activityDetails.activitydate;
	    $("#activityDateDisplay").html(activityDetails.activitydate);
	
	    $("#activityPriorityImageDisplay").addClass(activityDetails.priority.toLowerCase());
	
	
	    if(activityDetails.name != "null"){
		    $("#activityNameDisplay h2").html(activityDetails.name);
	    }else{
		    $("#activityNameDisplay h2").html("");
	    }
	
	    if(activityDetails.relatedto != "null"){
		    $("#activityRelatedToDisplay h2").html(activityDetails.relatedto);
	    }else{
		    $("#activityRelatedToDisplay h2").html("");
	    }
	
	    if(activityDetails.phone != "null"){
		    $("#activityPhoneDisplay h2").html(activityDetails.phone);
	    }else{
		    $("#activityPhoneDisplay h2").html("");
	    }
	
	    if(activityDetails.tasktype != "null"){
		    $("#activityTypeDisplay h2").html(activityDetails.tasktype);
	    }else{
		    $("#activityTypeDisplay h2").html("");
	    }
	
	    if(activityDetails.description != "null"){
		    $("#activityCommentsDisplay h2").html(activityDetails.description);
	    }else{
		    $("#activityCommentsDisplay h2").html("");
	    }
	    
	    //getting header height and applying to content
	    $('#'+page+' section').css( "padding-top", $("#"+page+" header").height() );
	    
        break;
        
    case "Opportunities":
        ldr.show();
        $("#homebtn, #ListItems").show();
        $("#DashboradList").hide();
        
        var opportunitiesIntegrationObj = konyObject.getIntegrationService("SFOpportunity");
	    var post_data = {"queryString" : "SELECT name,Amount,CloseDate,Type,LeadSource,StageName,ExpectedRevenue,Probability from Opportunity"}; 
	    opportunitiesIntegrationObj.invokeOperation("getOpportunity", header, post_data, opportunitiesIntegrationSuccessCallback, opportunitiesIntegrationFailureCallback);
	    break;
    case "opportunitydetailspage":
	    $(".page").hide();$("#"+page).show();
	    var opportunityDetails = parsedOpportunitiesObject.Opportunity[localStorage.konyOpportunityDetails];
	    
	    // Filling corresponding elements with dynamic data using corresponding Ids
	
	    if(opportunityDetails.Name != 'null'){
		    $("#opportunityNameDisplay").html(opportunityDetails.Name);
	    }
	
	    if(opportunityDetails.Type != 'null'){
		    $("#opportunityTypeDisplay").html(opportunityDetails.Type);
	    }
	
	    if(opportunityDetails.Name != 'null'){
		    $("#accountNameDisplay").html(opportunityDetails.Name);
	    }
	
	    if(opportunityDetails.Probability != 'null'){
		    var probability = parseInt(opportunityDetails.Probability);
		    var imageSrc = "images/p"+probability+".png";
		    $("#probabilityImageDisplay").attr('src',imageSrc);
	    }
	
	    if(opportunityDetails.Amount != 'null'){
		    $("#amountDisplay").html(opportunityDetails.Amount);
	    }
	    if(opportunityDetails.LeadSource != 'null'){
		    $("#leadSourceDisplay").html(opportunityDetails.LeadSource);
	    }
	    if(opportunityDetails.CloseDate != 'null'){
		    $("#closeDateDisplay").html(opportunityDetails.CloseDate);
	    }
	    if(opportunityDetails.ExpectedRevenue != 'null'){
		    $("#expectedRevenueDisplay").html(opportunityDetails.ExpectedRevenue);
	    }
	    
	    //getting header height and applying to content
	    $('#'+page+' section').css( "padding-top", $("#"+page+" header").height() );
	    
	    // Favorite Highlighting logic
	    if(localStorage.konyFavorites != undefined ){
		
		    var konyFavs = JSON.parse(localStorage.konyFavorites);
		    var itemId = opportunityDetails.Id;
		
		    if(konyFavs['opportunities'] != undefined){
			    if(konyFavs['opportunities'].indexOf(itemId) == '-1'){
				    $("#opportunityFavoriteStatus").attr('src','images/star.png');
			    }
			    else{
				    $("#opportunityFavoriteStatus").attr('src','images/star-fav.png');
			    }
		    }
	    }
	    break;
	    
    case "Leads":
        ldr.show();
        $("#homebtn, #ListItems").show();
        $("#DashboradList").hide();
        
        var leadsIntegrationObj = konyObject.getIntegrationService("SFLead");
	    var post_data = {"queryString" : "SELECT ID,NAME,FIRSTNAME,LASTNAME,TITLE,PHONE,EMAIL FROM Lead"}; 
	leadsIntegrationObj.invokeOperation("getLead", header, post_data, leadsIntegrationSuccessCallback, leadsIntegrationFailureCallback);
	
        break;
    case "leaddetailspage":
	    $(".page").hide();$("#"+page).show();
        
	    var leadDetails = parsedLeadsObject.Lead[localStorage.konyLeadDetails];
	    // Filling corresponding elements with dynamic data using corresponding Ids
	
	    $("#leadNameDisplay").html(leadDetails.FirstName+' '+leadDetails.LastName);
	    $("#leadTitleDisplay").html(leadDetails.Title);
	    $("#leadFirstNameDisplay").html(leadDetails.FirstName);
	    $("#leadLastNameDisplay").html(leadDetails.LastName);
	
	    if(leadDetails.Phone != ""){
		    $("#leadPhoneDisplay h2").html(leadDetails.Phone);
		    $("#leadPhone").attr('href','tel:'+leadDetails.Phone);
	    }else{
		    $("#leadPhoneDisplay h2").html("");
	    }
	
	    if(leadDetails.Email != ""){
		    $("#leadEmailDisplay h2").html(leadDetails.Email);
		    $("#leadEmail").attr('href','mailto:'+leadDetails.Email);
	    }else{
		    $("#leadEmailDisplay h2").html("");
	    }
	
	    //getting header height and applying to content
	    $('#'+page+' section').css( "padding-top", $("#"+page+" header").height() );
	    
	    // Favorite Highlighting logic
	    if(localStorage.konyFavorites != undefined ){
		
		    var konyFavs = JSON.parse(localStorage.konyFavorites);
		    var itemId = leadDetails.Id;
		
		    if(konyFavs['leads'] != undefined){
			    if(konyFavs['leads'].indexOf(itemId) == '-1'){
				    $("#leadFavoriteStatus").attr('src','images/star.png');
			    }
			    else{
				    $("#leadFavoriteStatus").attr('src','images/star-fav.png');
			    }
		    }
	    }
    
        break;
	    
	default:
		break;
	
	}
}
