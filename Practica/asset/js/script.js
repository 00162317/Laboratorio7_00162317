/*1. Defina la variable container*/
var container;
/*2. Obtenga el elemento HTML con id = c1 utilizando la propiedad getElementById y almacenelo en la variable container*/
container=document.getElementById("c1");
/*3. Modifique el valor de propiedad innerText y guarder la cadena de texto "¡Hola Mundo!"*/
container.innerText="Hola Mundo!";
/*4. Utilizando la variable container y su propiedad style.backgroundColor modifique el color del elemnto por el siguiente #000000. */
container.style.backgroundColor = "#000000";
/*5. Modifique el color del texto del elemento por el siguiente: #1cb723*/
container.style.color="#1cb723";
/*6. Cambie el ancho y alto del elemento a 200px, modificando las propiedades style.width y style.height*/
container.style.width="200px";
container.style.height="200px";
/*7. Haciendo uso de la propiedad innerHTML agregue lo siguiente: <input type=”text” placeholder=’escriba su texto’>*/
container.innerHTML ="<input type=”text” placeholder=’escriba su texto’>" ;
/***************************************************************************************************************/
/*Obtenga todos los elementos que tengan el atributo class="c2" y alamcenelos en la variable containers.*/
var containers
containers=document.querySelectorAll(".c2");
/*Modifique el color fondo a todos los elementos que contiene container por el siguiente #009999, haga uso de forEach. */
containers.forEach(element => {
    element.style.backgroundColor='#009999'
    /*Haciendo uso de la propiedad innerHTML agregue lo siguiente <input type='text' placeholder='Escriba su texto'>*/
    element.innerHTML="<input type='text' placeholder='Escriba su texto'>";
});
/*****************************************************************************************************************/
/*Obtenga el elemento que tenga el atributo id="btn-click" y alamcenelo en la variable boton*/
var boton = document.getElementById("btn-click");
/*Haciendo uso de la propiedad onclick agregue el evento click de la siguiente forma: */
boton.onclick = function(evt)
{
alert("Hola mundo");
}
/*Obtenga el elemento que tenga el atributo id="btnCopy" y alamcenelo en la variable btnCopy*/
var btnCopy = document.getElementById("btnCopy");

/*Haciendo uso de la propiedad onclick agregue lo siguiente */
btnCopy.onclick = function(evt) 
{ 
let msj = document.getElementById('textMsj').value;
document.getElementById('showMsj').innerText = msj;
}