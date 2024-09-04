// Cambiar color a negro al hacer clic en los divs
function cambiarColorNegro(event) {
    event.target.style.backgroundColor = 'black';
}

document.getElementById("div1").addEventListener("click", cambiarColorNegro);
document.getElementById("div2").addEventListener("click", cambiarColorNegro);
document.getElementById("div3").addEventListener("click", cambiarColorNegro);
document.getElementById("div4").addEventListener("click", cambiarColorNegro);

// Cambiar color de div con las teclas "a,s,d" y crear nuevos divs con las teclas "q,w,e"
let colorActual;

document.addEventListener('keydown', function(event) {
    const key = event.key;
    if (key === 'a') {
        colorActual = 'pink';
        document.getElementById("key").style.backgroundColor = colorActual;
    } else if (key === 's') {
        colorActual = 'orange';
        document.getElementById("key").style.backgroundColor = colorActual;
    } else if (key === 'd') {
        colorActual = 'lightblue';
        document.getElementById("key").style.backgroundColor = colorActual;
    } else if (key === 'q') {
        crearNuevoDiv('purple');
    } else if (key === 'w') {
        crearNuevoDiv('gray');
    } else if (key === 'e') {
        crearNuevoDiv('brown');
    }
});

function crearNuevoDiv(color) {
    const nuevoDiv = document.createElement('div');
    nuevoDiv.className = 'color-box';
    nuevoDiv.style.backgroundColor = color;
    document.body.appendChild(nuevoDiv);
}
