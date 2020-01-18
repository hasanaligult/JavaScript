var sahne, kamera, goruntuleyici;
var burun, solGoz, sagGoz, solKulak, sagKulak, bas, solUstBiyik, sagUstBiyik, sagAltBiyik, solAltBiyik, solKulakIci, sagKulakIci;

sahne = new THREE.Scene();
kamera = new THREE.PerspectiveCamera(75,window.innerWidth/window.innerHeight, 0.1, 1000);
goruntuleyici = new THREE.WebGLRenderer({antialias:true});
goruntuleyici.setSize(window.innerWidth ,window.innerHeight );
document.body.appendChild(goruntuleyici.domElement);

var solGozBicim = new THREE.SphereGeometry(0.15,100,100);
var solGozMalzeme = new THREE.MeshLambertMaterial({color:0x000000});
solGoz = new THREE.Mesh(solGozBicim, solGozMalzeme);
sahne.add(solGoz);

var sagGozBicim = new THREE.SphereGeometry(0.15,100,100);
var sagGozMalzeme = new THREE.MeshLambertMaterial({color:0x000000});
sagGoz = new THREE.Mesh(sagGozBicim, sagGozMalzeme);
sahne.add(sagGoz);

kamera.position.z = 10;
var z=0;
var dz=0.03;
function hareketlendir(){
    requestAnimationFrame(hareketlendir);
    goruntuleyici.render(sahne, kamera);
    solGoz.rotation.x += 0.01;
    solGoz.rotation.y += 0.01;
    solGoz.rotation.z += 0.01;
    sagGoz.rotation.x += 0.01;
    sagGoz.rotation.y += 0.01;
    sagGoz.rotation.z += 0.01;
    
    if(z>5) dz = -dz;
    if(z<0) dz = -dz
    z += dz;
    solGoz.position.set(-0.3,0.2,z);
    sagGoz.position.set(0.5,0.2,z);
}
hareketlendir();

var basBicim=new THREE.SphereGeometry(1.5,100,100);
var basMalzeme= new THREE.MeshLambertMaterial({color:0xffffff});
bas = new THREE.Mesh(basBicim, basMalzeme);
sahne.add(bas);

var solKulakBicim = new THREE.BoxGeometry(0.5,2.3,0.5);
var solKulakMalzeme = new THREE.MeshLambertMaterial({color:0xffffff});
solKulak = new THREE.Mesh(solKulakBicim, solKulakMalzeme);
sahne.add(solKulak);

var sagKulakBicim = new THREE.BoxGeometry(0.5,2.3,0.5);
var sagKulakMalzeme = new THREE.MeshLambertMaterial({color:0xffffff});
sagKulak = new THREE.Mesh(sagKulakBicim, sagKulakMalzeme);
sahne.add(sagKulak);

var solKulakIciBicim = new THREE.PlaneGeometry(0.2,1,1);
var solKulakIciMalzeme = new THREE.MeshLambertMaterial({color:0xf4adb4});
solKulakIci = new THREE.Mesh(solKulakIciBicim ,solKulakIciMalzeme);
sahne.add(solKulakIci);

var sagKulakIciBicim = new THREE.PlaneGeometry(0.2,1,1);
var sagKulakIciMalzeme = new THREE.MeshLambertMaterial({color:0xf4adb4});
sagKulakIci = new THREE.Mesh(sagKulakIciBicim ,sagKulakIciMalzeme);
sahne.add(sagKulakIci);

var burunBicim = new THREE.CircleGeometry(0.2,1);
var burunMalzeme = new THREE.MeshLambertMaterial({color:0xf4adb4});
burun = new THREE.Mesh(burunBicim, burunMalzeme);
sahne.add(burun);

var solUstBiyikBicim = new THREE.BoxGeometry(1.3,0.1,0.1);
var solUstBiyikMalzeme = new THREE.MeshLambertMaterial({color:0x272727});
solUstBiyik = new THREE.Mesh(solUstBiyikBicim, solUstBiyikMalzeme);
sahne.add(solUstBiyik);

var sagUstBiyikBicim = new THREE.BoxGeometry(1.3,0.1,0.1);
var sagUstBiyikMalzeme = new THREE.MeshLambertMaterial({color:0x272727});
sagUstBiyik = new THREE.Mesh(sagUstBiyikBicim, sagUstBiyikMalzeme);
sahne.add(sagUstBiyik);

var sagAltBiyikBicim = new THREE.BoxGeometry(1.3,0.1,0.1);
var sagAltBiyikMalzeme = new THREE.MeshLambertMaterial({color:0x272727});
sagAltBiyik = new THREE.Mesh(sagAltBiyikBicim, sagAltBiyikMalzeme);
sahne.add(sagAltBiyik); 

var solAltBiyikBicim = new THREE.BoxGeometry(1.3,0.1,0.1);
var solAltBiyikMalzeme = new THREE.MeshLambertMaterial({color:0x272727});
solAltBiyik = new THREE.Mesh(solAltBiyikBicim, solAltBiyikMalzeme);
sahne.add(solAltBiyik);

var isik = new THREE.PointLight('#ffffff', 1.2, 500);
isik.position.set(10,0,25);
sahne.add(isik);

solKulak.position.y = 2;
solKulak.rotation.y -= 3.5;
solKulak.rotation.z -= 0.2;
solKulak.position.x -= 0.5;
sagKulak.position.y = 2;
sagKulak.rotation.y = 3.7;
sagKulak.rotation.z = 0.2;
sagKulak.position.x = 0.5;
burun.position.z = 2;
burun.rotation.z = 0.5;
burun.position.y -= 0.3;
burun.position.x = 0.1;
solUstBiyik.position.z = 2;
solUstBiyik.rotation.x = 0.3;
solUstBiyik.position.y -= 0.3;
solUstBiyik.position.x -= 1.1;
sagUstBiyik.position.z = 2;
sagUstBiyik.rotation.x = 0.3;
sagUstBiyik.position.y -= 0.3;
sagUstBiyik.position.x = 1.2;
sagAltBiyik.position.z = 2;
sagAltBiyik.rotation.x = 0.3;
sagAltBiyik.position.y -= 0.5;
sagAltBiyik.position.x = 1.2;
sagAltBiyik.rotation.z -= 0.2;
solAltBiyik.position.z = 2;
solAltBiyik.rotation.x = 0.3;
solAltBiyik.position.y -= 0.5;
solAltBiyik.position.x -= 1.1;
solAltBiyik.rotation.z = 0.2;
solKulakIci.position.z = 3;
solKulakIci.position.y = 1.5;
solKulakIci.position.x -= 0.4;
solKulakIci.rotation.z = 0.2;
sagKulakIci.position.z = 3;
sagKulakIci.position.y = 1.5;
sagKulakIci.position.x = 0.45;
sagKulakIci.rotation.z -= 0.2; 