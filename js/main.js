function circulo(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("CIRCULO");
    figura.classList.toggle("circulo");
}

function rectangulo (){
    let figura= document.querySelector("#figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("RECTANGULO");

    figura.classList.toggle("rectangulo");
}

function right(){
    let figura=document.getElementById("figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("RIGTH");
   
    figura.classList.toggle("right");
     alert ("se esta moviendo a la derecha")
}

function left(){
    let figura=document.getElementById("figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("LEFT");

    figura.classList.toggle("left");
     alert ("se esta moviendo a la izquierda")
}

function gif(){
    let figura= document.querySelector("#figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("GIF");

    figura.classList.toggle("gif");
}


function degradado(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("DEGRADADO");
    
    figura.classList.toggle("degradado");
}

function luna(){
    let figura= document.querySelector("#figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("LUNA");

    figura.classList.toggle("luna");
}

function estrella(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("ESTRELLA");

    figura.classList.toggle("estrella");
}

function triangulo(){
    let figura= document.getElementById("figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("TRIANGULO");

    figura.classList.toggle("triangulo");
}

function topp(){
    let figura=document.getElementById("figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("TOP");

    figura.classList.toggle("topp");
}

function button(){
    let figura=document.getElementById("figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("BUTTON");

    figura.classList.toggle("button");
}

function diagonal() {
    let figura = document.getElementById("figura");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("DIAGONAL");
    
    figura.classList.toggle("diagonal");
}
function panelLateral(){
    let panel=document.getElementById("panel-lateral");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("PANEL LATERAL");

    panel.classList.toggle("active");
}
function panelSuperior(){
    let panel=document.getElementById("panel-superior");
    let titulo= document.getElementById("titulo");
    titulo.innerText=("PANEL SUPERIOR");

    panel.classList.toggle("active");
}
function inicio2(){
    let panel=document.getElementById("inicio");
    panel.classList.toggle("inicio2");
}
function ingreso(){
    let figura=document.getElementById("figura");
    figura.classList.toggle("ingresar");
    $val21=prompt("ingrese un color");
    var val21=val21;
    figura.style.background=$val21;

    alert ("Ingrese cambio de color de la figura")

}