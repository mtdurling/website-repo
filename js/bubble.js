
//Create bubble information boxes above social media menu.
$(document).ready(function(){
					var positions = {		
							'linkedin': {position: 'top', align: 'center', message: 'Find me on LinkedIn' },
							'github': {position: 'top', align: 'center', message: 'Fork me on GitHub' },
							'lastfm': {position: 'top', align: 'center', message: "Follow what I'm listening to" },
							'email': {position: 'top', align: 'center', message: 'Send me an email' },
							'twitter': {position: 'top', align: 'center', message: 'Follow me on Twitter' }
					};

					for(var id in positions){
							$('.link.'+id).CreateBubblePopup({
									position : positions[id].position,
									align	 : positions[id].align,
									innerHtml: positions[id].message,
									innerHtmlStyle: {
												color:'#FFFFFF', 
												'text-align':'center'
												},
									themeName: 	'all-grey',
									themePath: 	'theme/jquerybubblepopup-theme'
								});
					} //end loop
					
				
					
					
							$('.link.linkedin').mouseover(function(){
								//show the bubble popup with new options
								$('.link.linkedin').ShowBubblePopup();
							});
							$('.link.github').mouseover(function(){
								//show the bubble popup with new options
								$('.link.github').ShowBubblePopup();
							});
							$('.link.lastfm').mouseover(function(){
								//show the bubble popup with new options
								$('.link.lastfm').ShowBubblePopup();
							});
							$('.link.email').mouseover(function(){
								//show the bubble popup with new options
								$('.link.email').ShowBubblePopup();
							});
								$('.link.twitter').mouseover(function(){
									//show the bubble popup with new options
								$('.link.twitter').ShowBubblePopup();
							});
					
	});
