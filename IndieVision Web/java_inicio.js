// JavaScript Document


		//Al clicar el boton viernes
		document.getElementById("viernes").addEventListener("click" ,muestraviernes);
		var viernes1=document.getElementById("viernes1");
		function muestraviernes(){
			document.getElementById("viernes1").style.display = "block";
			document.getElementById("sabado1").style.display = "none";
			document.getElementById("domingo1").style.display = "none";
			document.getElementById("lunes1").style.display = "none";
		}

		//Al clicar el boton sabado
		document.getElementById("sabado").addEventListener("click" ,muestrasabado);
		var sabado1=document.getElementById("sabado1");
		function muestrasabado(){
			document.getElementById("viernes1").style.display = "none";
			document.getElementById("sabado1").style.display = "block";
			document.getElementById("domingo1").style.display = "none";
			document.getElementById("lunes1").style.display = "none";
		}
		//Al clicar el boton domingo
		document.getElementById("domingo").addEventListener("click" ,muestradomingo);
		var domingo1=document.getElementById("domingo1");
		function muestradomingo(){
			document.getElementById("viernes1").style.display = "none";
			document.getElementById("sabado1").style.display = "none";
			document.getElementById("domingo1").style.display = "block";
			document.getElementById("lunes1").style.display = "none";
		}
		//Al clicar el boton lunes
		document.getElementById("lunes").addEventListener("click" ,muestralunes);
		var lunes1=document.getElementById("lunes1");
		function muestralunes(){
			document.getElementById("viernes1").style.display = "none";
			document.getElementById("sabado1").style.display = "none";
			document.getElementById("domingo1").style.display = "none";
			document.getElementById("lunes1").style.display = "block";
		}

		//Al clicar el boton todos
		document.getElementById("todos").addEventListener("click" ,muestratodos);
		var todos1=document.getElementById("todos1");
		function muestratodos(){
			document.getElementById("viernes1").style.display = "block";
			document.getElementById("sabado1").style.display = "block";
			document.getElementById("domingo1").style.display = "block";
			document.getElementById("lunes1").style.display = "block";
		}


function initImageUpload(box) {
  let uploadField = box.querySelector('.image-upload');

  uploadField.addEventListener('change', getFile);

  function getFile(e){
    let file = e.currentTarget.files[0];
    checkType(file);
  }
  
  function previewImage(file){
    let thumb = box.querySelector('.imagen_publicar_preview'),
        reader = new FileReader();

    reader.onload = function() {
      thumb.style.backgroundImage = 'url(' + reader.result + ')';
    }
    reader.readAsDataURL(file);
    thumb.className += ' js--no-default';
  }

  function checkType(file){
    let imageType = /image.*/;
    if (!file.type.match(imageType)) {
      throw 'El archivo no es una imagen';
    } else if (!file){
      throw 'No se seleccionó ninguna imagen';
    } else {
      previewImage(file);
    }
  }
  
}


var boxes = document.querySelectorAll('.box');

for (let i = 0; i < boxes.length; i++) {
  let box = boxes[i];
  initDropEffect(box);
  initImageUpload(box);
}



function initDropEffect(box){
  let area, drop, areaWidth, areaHeight, maxDistance, dropWidth, dropHeight, x, y;
  
  area = box.querySelector('.imagen_publicar_preview');
  area.addEventListener('click', fireRipple);
  
  function fireRipple(e){
    area = e.currentTarget
    if(!drop){
      drop = document.createElement('span');
      drop.className = 'drop';
      this.appendChild(drop);
    }
    drop.className = 'drop';
    
    areaWidth = getComputedStyle(this, null).getPropertyValue("width");
    areaHeight = getComputedStyle(this, null).getPropertyValue("height");
    maxDistance = Math.max(parseInt(areaWidth, 10), parseInt(areaHeight, 10));

    drop.style.width = maxDistance + 'px';
    drop.style.height = maxDistance + 'px';
    
    dropWidth = getComputedStyle(this, null).getPropertyValue("width");
    dropHeight = getComputedStyle(this, null).getPropertyValue("height");
    
    x = e.pageX - this.offsetLeft - (parseInt(dropWidth, 10)/2);
    y = e.pageY - this.offsetTop - (parseInt(dropHeight, 10)/2) - 30;
    
    drop.style.top = y + 'px';
    drop.style.left = x + 'px';
    drop.className += ' animate';
    e.stopPropagation();
    
  }
}











