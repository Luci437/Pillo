// JavaScript Document
			function play(sound) {
				
				if (window.HTMLAudioElement) {
					var snd = new Audio('');
					
					if(snd.canPlayType('audio/ogg')) {
						snd = new Audio('sounds/' + sound + '.ogg');
					}
					else if(snd.canPlayType('audio/mp3')) {
						snd = new Audio('sounds/' + sound + '.mp3');
					}
					
					snd.play();
				}
				else {
					alert('HTML5 Audio is not supported by your browser!');
				}
			}