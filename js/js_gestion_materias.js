// Definición del .json GestionMaterias
const dataMaterias = [
    {
        "Materia": "Matematicas",
        "Horas": 180,
        "Profesor": "Carlos Mendoza"
    },
    {
        "Materia": "Metodos Numericos",
        "Horas": 25,
        "Profesor": "Steven Cardenas"
    },
    {
        "Materia": "Sistemas operacionales",
        "Horas": 41,
        "Profesor": "Andres Gonzalo"
    },
    {
        "Materia": "Teoria de la computacion",
        "Horas": 60,
        "Profesor": "Leonardo Lara",
    },
    {
        "Materia": "Telecomunicaciones",
        "Horas": 120,
        "Profesor": "Maria Manchego"
    }
]

// Variable que almacena la Posición del *.JSON de materias a editar
var posEdit;

// Función que se ejecuta al momento de cargar la página completa
$(document).ready(function () {
    // Llamado de función cargar tabla de elementos Gestión Materias
    loadDataTableGestionMaterias();

    // Selección de controles tipo boton para crear y editar materias, con asignación de evento
    document.querySelector("#btnGuardarMaterias").addEventListener("click", createMateria);
    document.querySelector("#btnEditarMaterias").addEventListener("click", editMateria);
});

// Función cargar tabla de elementos Gestión Materias
function loadDataTableGestionMaterias() {

    /* Variable tipo string que almacenara la el resultado de la lectura de elementos del *.JSON de materias y
       los elementos html del tbody de la tabla    
    */
    let htmlString = "";

    // Se recorre el *.JSON
    for (let i = 0; i < dataMaterias.length; i++) {
        let d = dataMaterias[i];
        htmlString += "<tr>";
        htmlString += "<td>" + d.Materia + "</td>";
        htmlString += "<td>" + d.Horas + "</td>";
        htmlString += "<td>" + d.Profesor + "</td>";
        htmlString += "<td><button class=\"btn btn-default btn-sm mx-2\" onclick=\"editMateriaLoad(" + i + ");\"><i class=\"bi bi-pencil-fill\"></i></button></td>";
        htmlString += "<td><button class=\"btn btn-danger btn-sm mx-2\" onclick=\"deleteMateria(" + i + ");\"><i class=\"bi bi-trash3-fill\"></i></button></td>";
        htmlString += "</tr>";
    }

    // Asignación del control tbody de la tabla a variable
    let tbodyContainer = document.querySelector("#tableGestionMaterias");
    // Envio del resultado al tbody de la tabla
    tbodyContainer.innerHTML = htmlString;
}

// Función crear materia en mod Gestión Materias
function createMateria() {

    // Asignación de valores controles modal creación Materias en variables locales
    let nombreMateria = document.querySelector("#txtNombreMateria").value;
    let nombreProfesor = document.querySelector("#txtNombreProfesor").value;
    let horas = document.querySelector("#txtHoras").value;

    // Validación de vacios
    if (nombreMateria != "" && nombreProfesor != "" && horas != "") {
        // Envio de nuevo elemento al *.JSON
        dataMaterias.push({ "Materia": nombreMateria, "Horas": horas, "Profesor": nombreProfesor });
        // Reload tabla
        loadDataTableGestionMaterias();

        // Limpieza controles modal creación
        document.querySelector("#txtNombreMateria").value = "";
        document.querySelector("#txtNombreProfesor").value = "";
        document.querySelector("#txtHoras").value = "";

        // Mensaje de confirmación
        Swal.fire({
            title: 'Buen trabajo!',
            text: 'Materia guardada con exito!',
            icon: 'success'
        });

        // Cierre modal
        $('#CrearMateria').modal('hide');
    }
    // Mensaje de error
    else {
        Swal.fire({
            title: 'Error!',
            text: 'Debe indicar los datos de la Materia!',
            icon: 'error'
        });
    }
}

// Función edit_load materia en mod Gestión Materias
function editMateriaLoad(pos) {

    $('#EditarMateria').modal('show');

    posEdit = pos;

    document.querySelector("#txtNombreMateriaEdit").value = dataMaterias[pos].Materia;
    document.querySelector("#txtNombreProfesorEdit").value = dataMaterias[pos].Profesor;
    document.querySelector("#txtHorasEdit").value = dataMaterias[pos].Horas;
}

// Función edit materia en mod Gestión Materias
function editMateria() {

    // Asignación de valores controles modal edisión Materias en variables locales
    let nombreMateria = document.querySelector("#txtNombreMateriaEdit").value;
    let nombreProfesor = document.querySelector("#txtNombreProfesorEdit").value;
    let horas = document.querySelector("#txtHorasEdit").value;

    // Validación de vacios
    if (nombreMateria != "" && nombreProfesor != "" && horas != "") {
        // Envio de nuevos valores al elemento editado *.JSON
        dataMaterias[posEdit].Materia = nombreMateria;
        dataMaterias[posEdit].Profesor = nombreProfesor;
        dataMaterias[posEdit].Horas = horas;

        // Reload tabla
        loadDataTableGestionMaterias();

        // Limpieza controles modal creación
        document.querySelector("#txtNombreMateriaEdit").value = "";
        document.querySelector("#txtNombreProfesorEdit").value = "";
        document.querySelector("#txtHorasEdit").value = "";

        // Mensaje de confirmación
        Swal.fire({
            title: 'Buen trabajo!',
            text: 'Materia actualizada con exito!',
            icon: 'success'
        });

        // Cierre modal
        $('#EditarMateria').modal('hide');
    }
    // Mensaje de error
    else {
        Swal.fire({
            title: 'Error!',
            text: 'Debe indicar los datos de la Materia!',
            icon: 'error'
        });
    }
}

// Función delete materia en mod Gestión Materias
function deleteMateria(pos) {

    // Se elimina el elemento indicado en el *.JSON
    dataMaterias.splice(pos, pos);

    // Reload tabla
    loadDataTableGestionMaterias();

    // Mensaje de confirmación
    Swal.fire({
        title: 'Buen trabajo!',
        text: 'Materia eliminada con exito!',
        icon: 'success'
    });
}