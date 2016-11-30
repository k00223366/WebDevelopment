function swap(imgnum){
	  
	switch(imgnum)
	{
		case 1:
		document.getElementById("illustration").src = "img/DrawTokamak/PlasmaAndWallTori.png";
		document.getElementById("illustration").title = "Plasma contained in Torus";
        document.getElementById("textColumn").innerHTML=
        "<h1>A Blanket</h1>";
        document.getElementById("changeText").innerHTML = 
        "<p>The inside of the torus is lined with a blanket. Coloured orange in this model. It has two jobs: <p>to shield the walls of the tokamak from the heat </p> <p> to trap the neutrons flying off the plasma.</p> <p>As they slam into the blanket it will heat up. The blanket protects water pipes that will carry steam away to drive turbines and make electricity.</p><p>The Blanket is a thermal shield.</p>";
        document.getElementById("textColumn").style.backgroundColor = "orange"; 
        document.getElementById("changeText").style.backgroundColor = "orange";   
        
        break;
        
        case 2:
		document.getElementById("illustration").src = "img/DrawTokamak/ColourTorus.png";
		document.getElementById("illustration").title = "TorusModel";
        document.getElementById("textColumn").innerHTML =
        "<h1>The Torus is just like an inner tube.</h1>"    
        document.getElementById("changeText").innerHTML =
        "<p>The torus chamber is the best way we have of trapping the superheated gas when it turns into plasma.</p><p> Its walls trap the heat of the plasma that is used to power turbines.</p><p>But there is no material that can withstand the heat of the plasma.</p><p> It is hotter than the surface of the sun.</p><p>What can be done?</p><p>Tokamak is Russian slang</p> <p>A word made up two parts</p><p>Torus and</p><p>Magnets, they are the key. They stop the tokamak from being destroyed.</p>";
        document.getElementById("textColumn").style.backgroundColor = "pink"; 
        document.getElementById("changeText").style.backgroundColor = "pink"; 
        break;
		
		
        case 3:
		document.getElementById("illustration").src = "img/DrawTokamak/PlasmaWallMagnet.png";
		document.getElementById("illustration").title = "Plasma contained in Torus";
        document.getElementById("textColumn").innerHTML =
        "<h1>The Magnetic Bottle.</h1>";
        document.getElementById("changeText").innerHTML =
        "<p>A very powerful magnet is needed to contain the power of the sun</p><p>this one is 17 meters by 9 meters.</p><p>It weights 310 tonnes.</p><p>The torus will sit inside 18 of them.</p><p>Plasma is similar to a gas but much much lighter.<p>This plasma will exist at 150 million degrees  centigrad.</p></p><p>Electrons are ripped from their nuclei.</p><p>They are negatively charged and can be trapped by the powerful magnetic field wrapping the torus</p><p>A magnetic bottle.</p>";
        document.getElementById("textColumn").style.backgroundColor = "lightgreen";
        document.getElementById("changeText").style.backgroundColor = "lightgreen";
        break;
		
		
	}	
	  
  }
