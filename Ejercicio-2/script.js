// Diccionario 
const FORM = {
    FORMULARIO: document.querySelector("#form"),
    NOMBRE: document.querySelector("#name"),
    EDAD: document.querySelector("#age"),
    STATUS: document.querySelector("#status"),
}

const handleFormSubmit = (event) => {
    event.preventDefault();

    
    const name = FORM.NOMBRE.value;
    const age = parseInt(FORM.EDAD.value);
    let status = {
        ok: false,
        msg: null
    }

    if(age <= 18){
        status.ok = false;
        status.msg = `Lo sentimos ${name}, debes ser mayor de edad para registrarte al evento.`;
    }else{
        status.ok = true;
        status.msg = `Bienvenido/a ${name}, te has registrado correctamente al evento.`;

    }

    FORM.STATUS.innerText = status.msg;
    if(status.ok){
        FORM.STATUS.classList.remove("error");
        FORM.STATUS.classList.add("success");
    }else{
        FORM.STATUS.classList.remove("success");
        FORM.STATUS.classList.add("error");
    }

    event.target.reset();
}

FORM.FORMULARIO.addEventListener("submit", handleFormSubmit);


