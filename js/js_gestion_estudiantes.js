// Funció para validar campos 
function validarFormulario() {

    // Variables con asignación de valores controles
    var nombre = document.getElementById("nombres").value;
    var apellidos = document.getElementById("apellidos").value;
    var correo = document.getElementById("email").value;
    var telefono = document.getElementById("phone").value;
    var direccion = document.getElementById("direccion").value;

    // Validación vacios
    if (nombre == "" || correo == "" || telefono == "" || direccion == "" || apellidos == "") {
        alert("Todos los campos deben ser llenados");
        return false;
    }

    // Validación longitud
    if (nombre.length < 2) {
        alert("El nombre debe tener al menos 2 caracteres");
        return false;
    }

    // Validación formato correo
    var regexCorreo = /^[a-zA-Z0-9._-]+@[a-zA-Z0-9.-]+\.[a-zA-Z]{2,6}$/;
    if (!regexCorreo.test(correo)) {
        alert("El correo electrónico no es válido");
        return false;
    }

    // Aquí podrías añadir código para manejar la inscripción al curso
    // Mensaje de confirmación
    Swal.fire({
        title: 'En buena hora!',
        text: 'Se ha registrado el estudiante correctamente!',
        icon: 'success'
    });

    // Limpieza controles
    document.getElementById("nombres").value = "";
    document.getElementById("apellidos").value = "";
    document.getElementById("ocupacion").value = "";
    document.getElementById("edad").value = "";
    document.getElementById("fechaNacimiento").value = "";
    document.getElementById("email").value = "";
    document.getElementById("phone").value = "";
    document.getElementById("direccion").value = "";
}