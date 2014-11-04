$(document).ready(function(){

	// binding click event logic for favorite icon
	$("#opportunityFavoriteStatus").off('click');
	$("#opportunityFavoriteStatus").on('click',function(event){
		modifyFavorite(this,'opportunities',opportunityDetails.id); // Modifying the favorite status of the correponding item
	});
	
});


