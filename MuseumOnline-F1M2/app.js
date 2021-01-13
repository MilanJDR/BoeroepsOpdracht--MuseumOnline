//voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

//create a model
const melkMeisje = new Model('assets/models/vermeer/export_museumprops.babylon.gltf');
melkMeisje.setPosition(-0.73, -0.01, -4);
melkMeisje.setScale(100, 100, 100);
melkMeisje.setRotation(0, 45.45, 0);

//create cuberoom

//create a primitive (sphere)
const sphere = new Sphere();
sphere.setColor('green')
sphere.setRadius(0.5);
sphere.setPosition(-3, 0, -5);

//create some text
const lamText = new Text('Lisser Art Museum');
lamText.setPosition(-1.5, 2.8, -4.49);
lamText.setFontsize(11);
lamText.setScale(0.5, 0.5, 0.5)
lamText.setRotation(0, 0, 0);
lamText.setColor('white')

//create an Logo
const LamLogo = new XRImage('asssets/images/LogoLam.jpg');
LamLogo.setPosition(-.4,2.8,-4.5)
LamLogo.setScale(3,1,1)
LamLogo.setRotation(0,0,0) 

//create an image1
const image1 = new XRImage('assets/images/Lisse-049.jpg');
image1.setPosition(-2.9, 1.9, -1.4);
image1.setRotation(-0.74, 43, 178);
image1.setScale(1.5, 1.5, 1.5);

//create an image2
const image2 = new XRImage('assets/images/FolkertdeJong.jpg');
image2.setPosition(2.5, 1.9, -2.1);
image2.setRotation(0, -38, -1);
image2.setScale(1.5, 1.5, 1.5);

//create an image3
const image3 = new XRImage('assets/images/Lisse-043.jpg');
image3.setPosition(3.1, 1.9, 0.7);
image3.setRotation(0, -127, 0);
image3.setScale(1.5, 1.5, 1.5);

//create an image4
const image4 = new XRImage ('assets/images/BadGrapes.jpg')
image4.setPosition(-1,2,3);
image4.setRotation(0,-15,0);
image4.setScale(1.5,1.5,1.5);

// create a model
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf')
cuberoom.setPosition(-2.50535, 0.91001, -3.21484);
cuberoom.setScale(-1.170, 0.764, 0.902);
cuberoom.setRotation(0, -36.95, 0);


//create a 360 image
const image360 = new Sky('assets/LamIngang.jpg');

const spotLight = new SpotLight();
spotLight.setPosition(1, 9, 3.9);
spotLight.setTarget(cuberoom);

//listen for an event
image1.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk ‘Food Chain Project’ van kunstenaar Itamar Gilboa.");
image1.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image2.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Werkplaats van kunstenaar Folkert de Jong");
image2.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
image3.addEventListener('mouseenter', () => 
    document.getElementById('extraText').innerHTML= "Kunstwerk van kunstenaar Sabine Tol");
image3.addEventListener('mouseleave', () => 
    document.getElementById('extraText').innerHTML= "");
melkMeisje.addEventListener('click', () => 
    document.getElementById('extraText').innerHTML = "Melkmeisje van Vermeer");

