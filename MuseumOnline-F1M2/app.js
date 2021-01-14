//voeg controls toe (teleport & WASD controls)
const controls = new Controls(50);
controls.enableMovement();

//create a model
const melkMeisje = new Model('assets/models/vermeer/export_museumprops.babylon.gltf');
melkMeisje.setPosition(-6.02, 0.920, -3.21);
melkMeisje.setScale(100, 100, 100);
melkMeisje.setRotation(0, -36.9, 0);

//create cuberoom
const cuberoom = new Model('assets/models/cube-room/cube-room.gltf')
cuberoom.setPosition(-2.50535, 0.91001, -3.21484);
cuberoom.setScale(-1.170, 0.984, 0.902);
cuberoom.setRotation(0, -36.95, 0);

//create some text
const lamText = new Text('Lisser Art Museum');
lamText.setPosition(-7.971, 3.746, -4.49);
lamText.setFontsize(11);
lamText.setScale(0.5, 0.5, 0.5)
lamText.setRotation(0, 50.000, 0);
lamText.setColor('white')

//create an Logo
const LamLogo = new XRImage('asssets/images/LogoLam.jpg');
LamLogo.setPosition(-.4,2.8,-4.5)
LamLogo.setScale(3,1,1)
LamLogo.setRotation(0,0,0) 

//create an image1
const image1 = new XRImage('assets/images/Lisse-049.jpg');
image1.setPosition(2.413,  2.288, -4.997);
image1.setRotation(-0.740, -34.670, 0);
image1.setScale(1.5, 1.5, 1.5);

//create an image2 
const image2 = new XRImage('assets/images/FolkertdeJong.jpg');
image2.setPosition(-2.5, 0.910, -3.215);
image2.setRotation(0, -36.9, -1);
image2.setScale(1.5, 1.5, 1.5);

//create an image3
const image3 = new XRImage('assets/images/Lisse-043.jpg');
image3.setPosition(1.751, 2.230, 0.779);
image3.setRotation(0, -127, 0);
image3.setScale(1.5, 1.5, 1.5);

//create an image4
const image4 = new XRImage ('assets/images/BadGrapes.jpg')
image4.setPosition(-2.373, 2.180, 2.415);
image4.setRotation(0,-35.150, 0);
image4.setScale(1.5,1.5,1.5);

//create a primitive (cylinder)
const cylinder = new Cylinder();
cylinder.setColor('grey')
cylinder.setRadius(0.5);
cylinder.setPosition(-2.489, 3.988, 3.207);
cylinder.setScale(1.5, 8.640, 1.5,)

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

