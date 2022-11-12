function datosUsuario() {
    let arroba = false;
    let punto = false;
    let username = document.getElementById("username").value;
    let password = document.getElementById("password").value;
    for(var i=0;i<username.length;i++){
        if (username[i]=="@"){
             arroba=true;
        }

        if (username[i]=="."){
            punto=true;
       }
    }
    if (arroba!=true || punto!=true && password.length<6){
        alert("Su usuario y contraseña son incorrectos");
    }

    else if (arroba!=true || punto!=true){
        alert("Su usuario es incorrecto, por favor use un correo electronico");
    }

    else if (password.length<6){
        alert("Contraseña incorrecta, por favor ingrese una contraseña de mas de 6 caracteres")
    }

    else {
        window.location="inicio.html";
    }

   

}