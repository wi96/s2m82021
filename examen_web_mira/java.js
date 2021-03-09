// JavaScript Document
		var sub=document.getElementsByClassName("sub");
		var i=0;
		document.getElementById("despliega").addEventListener("click" ,despl);
		function despl(){
			if(i==0){
			sub[0].style.display="block";
			i=1;}
			
			else{
			i=0;
			sub[0].style.display="none";
					}
			}
		var subsub=document.getElementsByClassName("subsub");
		document.getElementById("pliega").addEventListener("click" ,pli);
		function pli(){
			if(i==0){
			subsub[0].style.display="block";
			i=1;}
			
			else{
			i=0;
			subsub[0].style.display="none";
					}
			}


		document.getElementById("carretera").addEventListener("mouseover" ,img0);
		function img0(){
			document.getElementById("imagencambiante").style.backgroundImage="url(img/menu/general_road.jpg)";
		}
		document.getElementById("carretera").addEventListener("mouseout" ,img00);
		function img00(){
			document.getElementById("imagencambiante").style.backgroundImage="";
		}
		document.getElementById("orca").addEventListener("mouseover" ,img1);
		function img1(){
			document.getElementById("imagencambiante").style.backgroundImage="url(img/menu/orca.jpg)";
		}
		document.getElementById("orca").addEventListener("mouseout" ,img2);
		function img2(){
			document.getElementById("imagencambiante").style.backgroundImage="";
		}
		document.getElementById("orcaaero").addEventListener("mouseover" ,img3);
		function img3(){
			document.getElementById("imagencambiante").style.backgroundImage="url(img/menu/OrcaAero.jpg)";
		}
		document.getElementById("orcaaero").addEventListener("mouseout" ,img4);
		function img4(){
			document.getElementById("imagencambiante").style.backgroundImage="";
		}
		document.getElementById("avant").addEventListener("mouseover" ,img5);
		function img5(){
			document.getElementById("imagencambiante").style.backgroundImage="url(img/menu/avant.jpg)";
		}
		document.getElementById("avant").addEventListener("mouseout" ,img6);
		function img6(){
			document.getElementById("imagencambiante").style.backgroundImage="";
		}
		document.getElementById("terra").addEventListener("mouseover" ,img7);
		function img7(){
			document.getElementById("imagencambiante").style.backgroundImage="url(img/menu/terra.jpg)";
		}
		document.getElementById("terra").addEventListener("mouseout" ,img8);
		function img8(){
			document.getElementById("imagencambiante").style.backgroundImage="";
		}


		document.getElementById("orca2").addEventListener("mouseover" ,img9);
		function img9(){
			document.getElementById("imagencambiante").style.backgroundImage="url(img/menu/personalizar-menu-orca.png)";
		}
		document.getElementById("orca2").addEventListener("mouseout" ,img10);
		function img10(){
			document.getElementById("imagencambiante").style.backgroundImage="";
		}
		document.getElementById("orcaaero2").addEventListener("mouseover" ,img11);
		function img11(){
			document.getElementById("imagencambiante").style.backgroundImage="url(img/menu/menu-personalizar-orcaaero.png)";
		}
		document.getElementById("orcaaero2").addEventListener("mouseout" ,img12);
		function img12(){
			document.getElementById("imagencambiante").style.backgroundImage="";
		}
		document.getElementById("terra2").addEventListener("mouseover" ,img13);
		function img13(){
			document.getElementById("imagencambiante").style.backgroundImage="url(img/menu/menu-personalizar-terra.jpg)";
		}
		document.getElementById("terra2").addEventListener("mouseout" ,img14);
		function img14(){
			document.getElementById("imagencambiante").style.backgroundImage="";
		}

//+++++++++++++++++ PERSONALIZAR++++++++++++++++++++++++++++
		document.getElementById("blanco").addEventListener("click" ,white);
		function white(){
			document.getElementById("cajabici").style.backgroundImage="url(img/orcaero/ORCA_AREO_M21eTEAM.jpg)";
		}
		document.getElementById("azul").addEventListener("click" ,blue);
		function blue(){
			document.getElementById("cajabici").style.backgroundImage="url(img/orcaero/ORCA_AREO_M21eTEAMA.jpg)";
		}
		document.getElementById("negro").addEventListener("click" ,black);
		function black(){
			document.getElementById("cajabici").style.backgroundImage="url(img/orcaero/ORCA_AREO_M21eTEAMB.jpg)";
		}

		document.getElementById("blanco1").addEventListener("click" ,white1);
		function white1(){
			document.getElementById("cajabici1").style.backgroundImage="url(img/orcaero/ORCA_AREO_M21eTEAM.jpg)";
		}
		document.getElementById("azul1").addEventListener("click" ,blue1);
		function blue1(){
			document.getElementById("cajabici1").style.backgroundImage="url(img/orcaero/ORCA_AREO_M21eTEAMA.jpg)";
		}
		document.getElementById("negro1").addEventListener("click" ,black1);
		function black1(){
			document.getElementById("cajabici1").style.backgroundImage="url(img/orcaero/ORCA_AREO_M21eTEAMB.jpg)";
		}


		

