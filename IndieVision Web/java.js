// JavaScript Document
(function(){
 
var preload = document.getElementById('preload');
var loading = 0;
var id = setInterval(frame, 20);
	
	function frame() {
		if(loading == 100) {
			clearInterval(id);
			window.open('inicio.html', '_self');
		}else {
			loading = loading + 1;
			if(loading == 90) {
				preload.style.animation = 'fadeout 1s ease';
			}
		}
	}
	
})();