// Definición del .json GestionMaterias
const users = [
    {
        "Nombre": "Diego Fernando Martinez",
        "Correo": "dmartinez@poligran.edu.co",
        "Password": "123456",
        "Perfil": "Estudiante"
    },
    {
        "Nombre": "Miguel Andrés Arias",
        "Correo": "marias@poligran.edu.co",
        "Password": "123456",
        "Perfil": "Estudiante"
    },
    {
        "Nombre": "Daniel Felipe Carrillo",
        "Correo": "dcarrillo@poligran.edu.co",
        "Password": "123456",
        "Perfil": "Estudiante"
    },
    {
        "Nombre": "Jhon Olarte",
        "Correo": "jolarte@poligran.edu.co",
        "Password": "123456",
        "Perfil": "Administrador"
    }
]

// Función para validar los datos de logue de un usuario
function loguear(){

    // Asignación de variables con valores de los controles Usuario y Contraseña
    let user = document.getElementById("email").value;
    let pass = document.getElementById("password").value;

    // Varible booleana para validar si un usuario es valido
    var isUserValid = false;

    // Ciclo para recorrer el *.JSON de usuarios activos en el sistema
    for (let i = 0; i < users.length; i++) {
        let d = users[i];

        // Validación de credenciales
        if(user == d.Correo && pass == d.Password )
        {
            // Cambio de estado variable de control
            isUserValid = true;
            // Validación de perfil
            if(d.Perfil == "Estudiante")
            {
                // Redirección al home ->  perfil estuiante
                window.location="home.html";
            }
            else
            {
                // Redirección al gestion-materias ->  perfil administrador
                window.location="gestion-materias.html";
            }
        }
    }

    // Validación de datos valido
    if(!isUserValid) 
    {
        // Mensaje de error
        Swal.fire({
            title: 'Error!',
            text: 'El Correo electrónico y/o la Contraseña son incorrectos!',
            icon: 'error'
        });
    }

    // Retorno falso
    return false;
}