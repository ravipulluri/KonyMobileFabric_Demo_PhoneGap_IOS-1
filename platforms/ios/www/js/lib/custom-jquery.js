  
//loader initialization
var ldr = $.loader({
	image: 'images/imgloader.gif'
});


/**************************************************
* filterByText()
* 
* This function is used to filter all the
* list elements based on the search text
* entered.
*
* inputs:
* @searchText - text entered that has to
* 			    be matched/filtered.
* @listClass  - common class name to all the 
* 				li elements holding the name/data.
*
**************************************************/
function filterByText(searchText,listClass)
{
	var trimmedSearchText = $.trim(searchText);
	if(trimmedSearchText != ''){
		
		var searchTextLowerCase = trimmedSearchText.toLowerCase();
		var textMatchRegex = new RegExp("("+searchTextLowerCase+")","gi");
		
		//filtering logic starts here
		var check = "0";
		
		$("#ListItems ul li").each(function(index){
			
			var targetName = $.trim($(this).find('.FilterTarget').text()).toLowerCase();
			if(targetName.match(textMatchRegex) == null){
				$(this).hide();
			}
			else{
				check++;
				$(this).show();
			}
			
		});
		
		// Displaying no match results
		var noresultsList = '<li class="noresults" ><div class="media-list"><div class="media"><div class="media-body"><h2 class="media-heading">No matching results found.</h2></div></div></div></li>';
		if(check == "0"){

			$(".noresults").remove();//removing no results found list if exists 
			$("#ListItems ul").append(noresultsList);
		}else{
			$(".noresults").remove();
		}
	}
	else{
		$("#ListItems ul li").show();
		$(".noresults").remove();
	}
	
}



/**************************************************
* addToFavorites()
* 
* This function is used to add the corresponding
* item to favorites.
* 
* inputs:
* @this_obj - object of the clicked star image
* @type - category to which the favorite item
* 		  belong to.
* @itemId   - unique id of the corresponding item
**************************************************/
function modifyFavorite(this_obj,type,itemId)
{
	
	if(localStorage.konyFavorites == undefined){
		var konyFavorites = {}; // creating new object for storing favorites
		
		konyFavorites[type] = new Array(); // creating new array for storing corresponding category favorites
		konyFavorites[type].push(itemId);  // adding the favorite item id into the corresponding category  array
		
		$(this_obj).attr('src','images/star-fav.png'); // change image src here
	}
	else{
		var konyFavorites = JSON.parse(localStorage.konyFavorites);
		
		if(konyFavorites[type] == undefined){
			
			konyFavorites[type] = new Array(); // creating new array for storing corresponding category  favorites
			konyFavorites[type].push(itemId); // adding the favorite item id into the corresponding category array
			
			$(this_obj).attr('src','images/star-fav.png'); // change image src here
		}
		else{
			var itemIndex = konyFavorites[type].indexOf(itemId);
			
			if(itemIndex == '-1'){
				konyFavorites[type].push(itemId); // adding the favorite item id only if it doesn't exist.
				$(this_obj).attr('src','images/star-fav.png'); // change image src here
			}
			else{
				konyFavorites[type].splice(itemIndex, 1); //removing the item id if it already exists;
				$(this_obj).attr('src','images/star.png'); // change image src here
			}
		}
	}
	
	localStorage.konyFavorites = JSON.stringify(konyFavorites);
}

