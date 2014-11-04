 var pushNotification;
        
        function onDeviceReady() {
		    document.addEventListener("backbutton", function(e){changePage('Dashboard','bg-primary');}, false);
			try 
			{ 
            	pushNotification = window.plugins.pushNotification;
            	if (device.platform == 'android' || device.platform == 'Android' ||
                        device.platform == 'amazon-fireos' ) {
		pushNotification.register(successHandler, errorHandler, {"senderID":"661780372179","ecb":"onNotification"});		// required!
				} 
            }
			catch(err) 
			{ 
				alert(err.message); 
			} 
        }
        
        // handle APNS notifications for iOS
        function onNotificationAPN(e) {
            if (e.alert) {
                 navigator.notification.alert(e.alert);
            }
                
            if (e.sound) {
                var snd = new Media(e.sound);
                snd.play();
            }
            
            if (e.badge) {
                pushNotification.setApplicationIconBadgeNumber(successHandler, e.badge);
            }
        }
        
        // handle GCM notifications for Android
        function onNotification(e) {
            
            switch( e.event )
            {
                case 'registered':
				if ( e.regid.length > 0 )
				{
					// Your GCM push server needs to know the regID before it can push to this device
					// here is where you might want to send it the regID for later use.
					console.log("regID = " + e.regid);
					localStorage.regid = e.regid;
					
				}
                break;
                
                case 'message':
                	// if this flag is set, this notification happened while we were in the foreground.
                	// you might want to play a sound to get the user's attention, throw up a dialog, etc.
                	if (e.foreground)
                	{
						   
			           // on Android soundname is outside the payload. 
		                // On Amazon FireOS all custom attributes are contained within payload
		                var soundfile = e.soundname || e.payload.sound;
		                // if the notification contains a soundname, play it.
		                var my_media = new Media("/android_asset/www/"+ soundfile);

						my_media.play();
					}
						
                break;
                
                case 'error':
					
                break;
                
                default:
					
                break;
            }
        }
        
        function successHandler (result) {
           
        }
        
        function errorHandler (error) {
        }
        
		document.addEventListener('deviceready', onDeviceReady, true);
