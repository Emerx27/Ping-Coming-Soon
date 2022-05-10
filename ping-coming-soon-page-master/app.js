const formulario = document.querySelector(".formulario");
const campo = document.querySelector(".formulario__input");
const correo = document.querySelector("#correo");

const dato = {
    correo: ""
};

formulario.addEventListener("submit", (event) => {
    event.preventDefault();

    const { correo } = dato;
    if (correo === "") {
        campo.classList.add("formulario__error");
        setTimeout(() => {
            campo.classList.remove("formulario__error");
        }, 4000);
        mostrarError("please provide a valid email address"); 
        return;
    }

    mostrarAlerta("Thank you! You will receive an email when we are ready!");
    campo.classList.add("formulario__correcto");
    setTimeout(() => {
        campo.classList.remove("formulario__correcto");
    }, 4000);
});

campo.addEventListener("input", (event) => {
    dato[event.target.id] = event.target.value;
});

function mostrarError(mensaje) {
    const error = document.createElement("P");
    error.textContent = mensaje;
    error.classList.add("error");
    formulario.appendChild(error);
    setTimeout(() => {
        error.remove();
    }, 4000);
    
};

function mostrarAlerta(mensaje) {
    const enviar = document.createElement("P");
    enviar.textContent = mensaje;
    enviar.classList.add("enviar");
    formulario.appendChild(enviar);
    setTimeout(() => {
        enviar.remove();
    }, 4000);
};