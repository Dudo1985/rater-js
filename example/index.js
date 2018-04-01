function onload(event) {
   
	 var myDataService =  {
		 rate:function(rating) {
				return {then:function (callback) {
					setTimeout(function () {
						callback((Math.random() * 5)); 
					}, 1000); 
				}
			}
		}
	}

	var starRating1 = raterJs( {
		starSize:32,
		element:document.querySelector("#rater"),
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		}
	}); 

   var starRating4 = raterJs( { isBusyText: "Rating in progress. Please wait...",
		element:document.querySelector("#rater4"),
		rateCallback:function rateCallback(rating, done) {
			starRating4.setRating(rating); 
			myDataService.rate().then(function (avgRating) {
				starRating4.setRating(avgRating); 
				done(); 
		}); 
	}}); 

    var starRating2 = raterJs( {
		max:5, 
		rating:4, 
		element:document.querySelector("#rater2"), 
		disableText:"Custom disable text!", 
		ratingText:"My custom rating text {rating}", 
		showToolTip:true,
		rateCallback:function rateCallback(rating, done) {
			starRating2.setRating(rating); 
			starRating2.disable(); 
			done(); 
		}
	}); 

	var starRating3 = raterJs( {
		max:16, 
		readOnly:true, 
		rating:4.4, 
		element:document.querySelector("#rater3")
	}); 

	var starRating5 = raterJs( {
		element:document.querySelector("#rater5"),
		rateCallback:function rateCallback(rating, done) {
			this.setRating(rating); 
			done(); 
		},
		onHover: function(currentIndex, currentRating){
			document.querySelector('.live-rating').textContent = currentIndex;
		},
		onLeave: function(currentIndex, currentRating){
			document.querySelector('.live-rating').textContent = currentRating;
		}
	}); 

}

window.addEventListener("load", onload, false); 