//Primer html
//Funcion que pregunta el nombre y lo muestra
function pregunta(){
    var person = prompt("¿Cual es tu nombre?");
    if(person != null){
            document.getElementById("mostrar2").innerHTML = "Hola " + person + " bienvenido a Club penguin";
        }
}

//SEGUNDO HTML
//funcion que crea un segundo boton y luego cambia el titulo
function createSecondButton(){
    //Creamos unsegundo boton y este mostrara un segundo texto
    var secondButton = "<button class='boton3' type='button' onclick='titulo()' id='cambiarPagina' onmouseover='this.style.background='white'' onmouseout='this.style.background='''>Cambiar de titulo</button><br>";
    //ligamos el segundo boton con el id de showbutton
    document.getElementById("showButton").innerHTML=secondButton;
    //mostramo el primer texto
    document.getElementById("hideButton").innerHTML='<br>';
    //oculta el primer boton
    document.getElementById("hide").style.display="none";
}

function titulo(){
    //Se muestra un segundo texto 
    document.getElementById("changeTitle").innerHTML='<p class="tituloPrincipal">Pinguinoland</p>';

    document.getElementById("cambiarPagina").innerHTML='<p class="links2"><a href="index3.html">Cambiar de pagina</a></p>';
}

//Tercr HTML
//Funcion que cambia el tercer parrafo
function cambiarP(){
    const cuantasP = document.getElementsByTagName("p");
    const terceraP = cuantasP[2];
    terceraP.innerHTML = "Existen diversas areas en Club penguin a las cuales puedes acceder y algunas son secretas las cuales vas descubriendo";
}


//Cuarto HTML
//Declarar el arreglo fuera de la función para utilizarlo
const arreglo1 = [
    "../Media/img/imagen1.jpg",
    "../Media/img/imagen2.jpg",
    "../Media/img/imagen3.jpg",
    "../Media/img/imagen4.jpg",
    "../Media/img/imagen5.jpg",
    "../Media/img/imagen6.jpg",
    "../Media/img/imagen7.jpg",
    "../Media/img/imagen8.jpg"
  ];
  //Funcion qu emuestra el arreglo
  function mostrarArreglo() {
    const div = document.getElementById("arreglo1");
    for (let i = 0; i < arreglo1.length; i++) {
      const img = document.createElement("img");
      img.src = arreglo1[i];
      img.width = "300";
      img.height = "200";
      div.appendChild(img);
    }
    document.getElementById("primerBoton").disabled = true;
  }
  //Funcion que cambia el 5 elemento
  function cambiarElemento() {
    const nuevaImagen = "../Media/img/imagen9.jpg"; // Ruta de la nueva imagen
    arreglo1[4] = nuevaImagen; // Cambiar la imagen en la posición 5 del arreglo
    const div = document.getElementById("arreglo1");
    div.innerHTML = ""; // Limpiar el contenido actual del div
    for (let i = 0; i < arreglo1.length; i++) {
      const img = document.createElement("img");
      img.src = arreglo1[i];
      img.width = "300";
      img.height = "200";
      div.appendChild(img);
    }
  }