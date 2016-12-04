function swap(imgnum){
	  
	switch(imgnum)
	{
		case 1:
		document.getElementById("illustration").src = "img/DrawTokamak/PlasmaAndWallTori.png";
		document.getElementById("illustration").title = "Plasma contained in Torus";
        document.getElementById("textColumn").innerHTML=
        "<h1>A Blanket</h1>";
        document.getElementById("changeText").innerHTML = 
        "<p class=text>The inside of the torus is lined with a blanket or thermal shield, marked orange. It has two jobs: <p class=text>To shield the walls of the tokamak from the heat </p> <p class=text> To trap the neutrons flying off the plasma.</p> <p class=text>As they slam into the blanket it will heat up. The heat will boil water. Steam will drive turbines and make electricity.</p><p></p>";
        document.getElementById("textColumn").style.backgroundColor = "orange"; 
      
        var x = document.querySelectorAll("p.text");
        var i;
        for (i=0;i<x.length;i++)
            {
                x[i].style.backgroundColor = "orange";
            }
            /*document.getElementById("changeText").style.backgroundColor = "orange"; */  
        
        break;
        
        case 2:
		document.getElementById("illustration").src = "img/DrawTokamak/ColourTorus.png";
		document.getElementById("illustration").title = "TorusModel";
        document.getElementById("textColumn").innerHTML =
        "<h1>The Torus is just like an inner tube.</h1>"    
        document.getElementById("changeText").innerHTML =
        "<p class=text>The torus chamber cannot trap the plasma.</p><p class=text> It can only capture the heat of the plasma.</p><p class=text>The plasma would destroy anything it touches.</p><p class=text> It is hotter than the surface of the sun.</p><p class=text>Tokamak is a Russian word made up two parts</p><p class=text>Torus and</p><p class=text>Magnets, they are the key. They stop the tokamak from being destroyed.</p>";
        document.getElementById("textColumn").style.backgroundColor = "pink"; 
    /*document.getElementById("changeText").style.backgroundColor = "pink"; */
      
        var x = document.querySelectorAll("p.text");
        var i;
        for (i=0;i<x.length;i++)
            {
                x[i].style.backgroundColor = "pink";
            }    
        break;
		
		
        case 3:
		document.getElementById("illustration").src = "img/DrawTokamak/PlasmaWallMagnet.png";
		document.getElementById("illustration").title = "Plasma contained in Torus";
        document.getElementById("textColumn").innerHTML =
        "<h1>The Genie in the Bottle.</h1>";
        document.getElementById("changeText").innerHTML =
        "<p class=text>A very powerful magnet is needed to contain the power of the sun</p><p class=text>This one is 17 meters by 9 meters.</p><p class=text>It weights 310 tonnes.</p><p class=text>The torus will sit inside 18 of them.</p><p class=text>Plasma makes stars: it is similar to a gas but much much lighter.<p class=text>This plasma will exist at 150 million degrees  centigrad.</p><p class=text>Electrons are ripped from their nuclei.</p><p class=text>They are negatively charged and can be trapped by the powerful magnetic field wrapping the torus</p><p class=text>The magnets are the only thing stopping the plasma from destroying the torus.</p><p class=text>And they will work just fine operating at -269 degrees centigrade. Absolute zero is thought to be -273 degrees.</p>";
        document.getElementById("textColumn").style.backgroundColor = "lightgreen";
        /*document.getElementById("changeText").style.backgroundColor = "lightgreen";*/
            
        var x = document.querySelectorAll("p.text");
        var i;
        for (i=0;i<x.length;i++)
            {
                x[i].style.backgroundColor = "lightgreen";
            }    
        break;    
            
            
        break;
		
		
	}	
	  
  }
