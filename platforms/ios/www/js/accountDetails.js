$(document).ready(function(){

	// binding click event logic for favorite icon
	$("#accountFavoriteStatus").off('click');
	$("#accountFavoriteStatus").on('click',function(event){
		modifyFavorite(this,'accounts',accountDetails.id); // Modifying the favorite status of the correponding item
	});
	
});


