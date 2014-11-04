$(document).ready(function(){
	
	// binding click event logic for favorite icon
	$("#leadFavoriteStatus").off('click');
	$("#leadFavoriteStatus").on('click',function(event){
	    var leadDetailsObj = parsedLeadsObject.Lead[localStorage.konyLeadDetails];
		modifyFavorite(this,'leads',leadDetailsObj.Id); // Modifying the favorite status of the correponding item
	});
	
});

