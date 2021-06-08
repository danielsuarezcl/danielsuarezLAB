// formulario de suscripción ubicado en el aside

function susValidaNombre(){
    var nombre = document.getElementById("nombre").value;
    var mensaje = document.getElementById("SmsgNombre");

    if(nombre.length < 5){
        mensaje.innerText = "El nombre debe de tener al menos 5 caracteres.";
        mensaje.classList.remove("formTrue");
        mensaje.classList.add("formFalse");
    }else{
        mensaje.innerText = "El nombre es correcto.";
        mensaje.classList.remove("formFalse");
        mensaje.classList.add("formTrue");
    }
}

function susValidaFono(){
    var fono = document.getElementById("fono").value;
    var mensaje = document.getElementById("SmsgFono");

    if(fono.length < 3){
        mensaje.innerText = "El número debe contener al menos 3 digitos.";
        mensaje.classList.remove("formTrue");
        mensaje.classList.add("formFalse");
    }else{
        mensaje.innerText = "El teléfono es correcto.";
        mensaje.classList.remove("formFalse");
        mensaje.classList.add("formTrue");
    }
}

function susValidaCorreo(){
    var regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var correo = document.getElementById("correo").value;
    var msgCorreo = document.getElementById("SmsgCorreo");

    if(!regex.test(correo)){
        msgCorreo.innerText = "Ingresa un correo válido, por favor.";
        msgCorreo.classList.remove("formTrue");
        msgCorreo.classList.add("formFalse");
    }else{
        msgCorreo.innerText = "El correo es correcto.";
        msgCorreo.classList.remove("formFalse");
        msgCorreo.classList.add("formTrue");
    }
}

// formulario de contacto

function cntValidaNombre(){
    var nombre = document.getElementById("cntnombre").value;
    var mensaje = document.getElementById("cNombre");

    if(nombre.length < 5){
        mensaje.innerText = "El nombre debe de tener al menos 5 caracteres.";
        mensaje.classList.remove("cntformTrue");
        mensaje.classList.add("cntformFalse");
    }else{
        mensaje.innerText = "El nombre es correcto.";
        mensaje.classList.remove("cntformFalse");
        mensaje.classList.add("cntformTrue");
    }
}

function cntValidaApellido(){
    var apellido = document.getElementById("cntapellido").value;
    var mensaje = document.getElementById("cApellido");

    if(apellido.length < 5){
        mensaje.innerText = "El apellido debe de tener al menos 5 caracteres.";
        mensaje.classList.remove("cntformTrue");
        mensaje.classList.add("cntformFalse");
    }else{
        mensaje.innerText = "El apellido es correcto.";
        mensaje.classList.remove("cntformFalse");
        mensaje.classList.add("cntformTrue");
    }
}

function cntValidaCorreo(){
    var regex = /^[a-zA-Z0-9.!#$%&'*+\/=?^_`{|}~-]+@[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?(?:\.[a-zA-Z0-9](?:[a-zA-Z0-9-]{0,61}[a-zA-Z0-9])?)*$/;
    var correo = document.getElementById("cntcorreo").value;
    var msgCorreo = document.getElementById("cCorreo");

    if(!regex.test(correo)){
        msgCorreo.innerText = "Ingresa un correo válido, por favor.";
        msgCorreo.classList.remove("cntformTrue");
        msgCorreo.classList.add("cntformFalse");
    }else{
        msgCorreo.innerText = "El correo es correcto.";
        msgCorreo.classList.remove("cntformFalse");
        msgCorreo.classList.add("cntformTrue");
    }
}

function cntValidaTelefono(){
    var fono = document.getElementById("cnttelefono").value;
    var mensaje = document.getElementById("cTelefono");

    if(fono.length < 3){
        mensaje.innerText = "El número debe contener al menos 3 digitos.";
        mensaje.classList.remove("cntformTrue");
        mensaje.classList.add("cntformFalse");
    }else{
        mensaje.innerText = "El teléfono es correcto.";
        mensaje.classList.remove("cntformFalse");
        mensaje.classList.add("cntformTrue");
    }
}

function cntValidaMensaje(){
    var msg = document.getElementById("cntmensaje").value;
    var mensaje = document.getElementById("cMensaje");

    if(msg.length < 5){
        mensaje.innerText = "El mensaje debe de tener al menos 5 caracteres.";
        mensaje.classList.remove("msjformTrue");
        mensaje.classList.add("msjformFalse");
    }else{
        mensaje.innerText = "El mensaje es correcto.";
        mensaje.classList.remove("msjformFalse");
        mensaje.classList.add("msjformTrue");
    }
}