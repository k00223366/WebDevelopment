function swap(imgnum){
	  
	switch(imgnum)
	{
		case 1:
		document.getElementById("illustration").src = "img/DrawTokamak/PlasmaAndWallTori.png";
		document.getElementById("illustration").title = "Plasma contained in Torus";
        document.getElementById("changeText").innerHTML = <p>
        Write about the first thing, the PlasmaWall tori.
        <p>
        break;
        
        case 2:
		document.getElementById("illustration").src = "img/DrawTokamak/ColourTorus.png";
		document.getElementById("illustration").title = "TorusModel";
        document.getElementById("changeText").innerHTML =
        <p> Write about the pink torus..<p>
        break;
		
		
        case 3:
		document.getElementById("illustration").src = "img/DrawTokamak/PlasmaWallMagnet.png";
		document.getElementById("illustration").title = "Plasma contained in Torus";
            document.getElementById("changeText").innerHTML =
        <p> The Plasma and the Magnetic field <p>
        break;
		
		
	}	
	  
  }

function swapText(number){
    
    case 1:
    document.getElementById("changeText").innerHTML = <p>
        Write about the first thing, the PlasmaWall tori.
        <p>
    break;
          
    case 2:
    document.getElementById("changeText").innerHTML =
        <p> Write about the pink torus..<p>
    break;
          
    case 3:
    document.getElementById("changeText").innerHTML =
        <p> The Plasma and the Magnetic field <p>
    break;
}