// By: Ishaan Tulsian
// Earth Simulator

//variables
var earthImg, mercuryImg, moonImg,  sunImg, venusImg, marsImg, jupiterImg, neptuneImg, saturnImg, uranusImg, ringImg, pollutionImg, iceAgeImg, pangaeaImg, asteroidStrikeImg, planet, floodImg, volcanoImg;
var planetLabel, planetDescription, destructionLabel;
var spaceAudio;


// start loading images
function preload()
{
  // image texture from http://planetpixelemporium.com/
  earthImg = loadImage('EARTH.jpeg');
  mercuryImg=loadImage("MERCURY.jpeg");
  moonImg=loadImage("MOON.jpeg");
  sunImg=loadImage("SUN.jpeg");
  venusImg=loadImage("VENUS.jpeg");
  marsImg = loadImage("MARS.jpg");
  jupiterImg = loadImage('JUPITER.jpeg');
  neptuneImg = loadImage('NEPTUNE.jpg');
  saturnImg = loadImage('SATURN.jpg');
  uranusImg = loadImage('URANUS.jpg');
  pollutionImg = loadImage('2k_earth_clouds.jpg');
  iceAgeImg = loadImage('ICEAGE.jpg');
  pangaeaImg = loadImage('PANGAEA.jpg');
  asteroidStrikeImg = loadImage('ASTEROID.jpg');
  floodImg = loadImage('FLOOD.jpg');
  volcanoImg = loadImage("LAVA.png")
  
  
  
  spaceAudio=loadSound("Audio/rain.mp3");
}

function setup() {
  
  createCanvas(850,250,WEBGL); 
 
  planetLabel = createInput('Planet Name Here');
  destructionLabel = createInput('Simulation Name Here');
  planetDescription1=createP(" ");
  planetDescription2 = createP(' ');
  planetDescription3 = createP(' ');
  planetDescription4 = createP(' ');
  
}


function draw() {
  background("black");
  
  // allow user to drag, zoom, and move globe
  orbitControl();
  //earth's rotation
  rotateY(millis()/5000);  
  //earth
  sphere(100); 
  
  if(planetLabel.value()==="Earth"){
    // earth image
    noStroke();
    texture(earthImg);
    planetDescription1.html('Mass of Earth: 5.972 × 10^24 kg');
    planetDescription2.html('Population of Earth in 2020: 7.8 billion');
    planetDescription3.html('The equatorial circumference of Earth: 24,901 miles (40,075 km)');
    planetDescription4.html('Age of Earth: 4.543 billion years');
   
  }
  
  else if(planetLabel.value()==="Mercury"){
    
    noStroke();
    texture(mercuryImg);
    planetDescription1.html('Mass of Mercury: 3.285 × 10^23 kg');
    planetDescription2.html('Population of Mercury: 0');
    planetDescription3.html('The equatorial circumference of Mercury: 9524 miles (15,329 km)');
    planetDescription4.html('Age of Mercury: 4.503 billion years');
  }
  
  else if(planetLabel.value()==="Mars"){
    
    noStroke();
    texture(marsImg);
    planetDescription1.html('Mass of Mars: 6.39 × 10^23 kg');
    planetDescription2.html('Population of Mars: 0');
    planetDescription3.html('The equatorial circumference of Mars: 13262 miles (21,344 km)')
    planetDescription4.html('Age of Mars: 4.603 billion years');
  }
  
  else if(planetLabel.value()==="Moon"){
    noStroke();
    texture(moonImg);
    planetDescription1.html('Mass of Moon: 0.07346 x 10^24');
    planetDescription2.html('Population of Moon: 0');
    planetDescription3.html('The equatorial circumference of the Moon: 6785 miles (10,921 km)')
    planetDescription4.html('Age of Moon: 4.53 billion years');
  }
  
  else if(planetLabel.value()==="Sun"){
    // earth image
    noStroke();
    texture(sunImg);
    planetDescription1.html('Mass of Sun: 1.989 × 10^30 kg');
    planetDescription2.html('Population of Sun: 0');
    planetDescription3.html('The equatorial circumference of the Sun: 2.7 million miles (4.379 million km)');
    planetDescription4.html('Age of Sun: 4.603 billion years')
  }
  
  else if(planetLabel.value()==="Venus"){
    // earth image
    noStroke();
    texture(venusImg);
    planetDescription1.html('Mass of Venus: 4.867 × 10^24 kg');
    planetDescription2.html('Population of Venus: 0');
    planetDescription3.html('The equatorial circumference of the Venus: 23627 miles (38,025 km)');
    planetDescription4.html('Age of Venus: 4.503 billion years');
  }
  
  else if(planetLabel.value()==="Jupiter"){
    // earth image
    noStroke();
    texture(jupiterImg);
    planetDescription1.html('Mass of Jupiter: 1.898 × 10^27 kg');
    planetDescription2.html('Population of Jupiter: 0');
    planetDescription3.html('The equatorial circumference of Jupiter: 272,945 miles (439,264 km)');
    planetDescription4.html('Age of Jupiter: 4.503 billion years');
  }
  else if(planetLabel.value()==="Neptune"){
    noStroke();
    texture(neptuneImg);
    planetDescription1.html('Mass of Neptune: 1.024 × 10^26 kg');
    planetDescription2.html('Population of Neptune: 0;');
    planetDescription3.html('The equatorial circumference of Neptune: 96685 miles (155,600 km)');
    planetDescription4.html('Age of Neptune: 4.503 billion years');
  }
  
  else if(planetLabel.value()==="Saturn"){
    noStroke();
    texture(saturnImg);
    planetDescription1.html('Mass of Saturn: 5.683 × 10^26 kg');
    planetDescription2.html('Population of Saturn: 0');
    planetDescription3.html('The equatorial circumference of Saturn: 235297 miles (378,675 km)');
    planetDescription4.html('Age of Saturn: 4.503 billion years');
  }
  
  else if(planetLabel.value()==="Uranus"){
    noStroke();
    texture(uranusImg);
    planetDescription1.html('Mass of Uranus: 8.681 × 10^25 kg');
    planetDescription2.html('Population of Uranus: 0');
    planetDescription3.html('The equatorial circumference of Uranus: 99785 miles (160,590 km)');
    planetDescription4.html('Age of Uranus: 4.503 billion years');
  }
  
  
  if(destructionLabel.value()==="Pollution"){
     noStroke();
     texture(pollutionImg)
     }
  else if(destructionLabel.value()==="Ice age"){
     noStroke();
     texture(iceAgeImg);
          }
  else if(destructionLabel.value()==="Pangaea"){
     noStroke();
     texture(pangaeaImg);
          }
  else if(destructionLabel.value()==="Asteroid strike"){
      noStroke();
      texture(asteroidStrikeImg);  
          }
  else if(destructionLabel.value()==="Flood"){
       noStroke();
       texture(floodImg);
          }
  else if(destructionLabel.value()==="Volcano"){
        noStroke();
        texture(volcanoImg);
          }
  
  
}
