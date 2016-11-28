function swap(imgnum){
	  
	switch(imgnum)
	{
		case 1:
		document.getElementById("illustration").src = "img/DrawTokamak/PlasmaAndWallTori.png";
		document.getElementById("illustration").title = "Plasma contained in Torus";
        document.getElementById("changeText").innerHTML = 
        "Write about the first thing, the PlasmaWall tori.";
        document.getElementById("textColumn").style.backgroundColor = "orange"; 
        
        break;
        
        case 2:
		document.getElementById("illustration").src = "img/DrawTokamak/ColourTorus.png";
		document.getElementById("illustration").title = "TorusModel";
        document.getElementById("changeText").innerHTML =
        "Write about the pink torus..";
        document.getElementById("textColumn").style.backgroundColor = "pink"; 
        break;
		
		
        case 3:
		document.getElementById("illustration").src = "img/DrawTokamak/PlasmaWallMagnet.png";
		document.getElementById("illustration").title = "Plasma contained in Torus";
        document.getElementById("changeText").innerHTML =
        "The Plasma and the Magnetic field.";
        document.getElementById("textColumn").style.backgroundColor = "lightgreen"; 
        break;
		
		
	}	
	  
  }
