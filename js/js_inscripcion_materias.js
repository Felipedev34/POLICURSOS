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
        "Horas": 40,
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
    },
    {
        "Materia": "Inglés",
        "Horas": 50,
        "Profesor": "Maria Manchego"
    },
    {
        "Materia": "Cátedra",
        "Horas": 30,
        "Profesor": "Maria Manchego"
    }
]

// Definición del .json GestionMaterias
const dataMateriasInscritas = [
    {
        "Materia": "Sistemas operacionales",
        "Horas": 40,
        "Profesor": "Andres Gonzalo"
    }
]

// Función que se ejecuta al momento de cargar la página completa
$(document).ready(function () {
    // Llamado de función cargar tabla de elementos Inscripción Materias
    loadDataTableInscripcionMaterias();

    // Selección de controles tipo boton para crear y editar materias, con asignación de evento
    document.querySelector("#btnInscribirMaterias").addEventListener("click", inscribirMateria);
});

// Función cargar tabla de elementos Inscripción Materias
function loadDataTableInscripcionMaterias() {

    /* Variable tipo string que almacenara la el resultado de la lectura de elementos del *.JSON de materias inscritas y
       los elementos html del tbody de la tabla    
    */
    let htmlString = "";

    // Se recorre el *.JSON
    for (let i = 0; i < dataMateriasInscritas.length; i++) {
        let d = dataMateriasInscritas[i];
        htmlString += "<tr>";
        htmlString += "<td>" + d.Materia + "</td>";
        htmlString += "<td>" + d.Horas + "</td>";
        htmlString += "<td>" + d.Profesor + "</td>";
        htmlString += "<td><button class=\"btn btn-danger btn-sm mx-2\" onclick=\"deleteMateriaInscrita(" + i + ");\"><i class=\"bi bi-trash3-fill\"></i></button></td>";
        htmlString += "</tr>";
    }

    // Asignación del control tbody de la tabla a variable
    let tbodyContainer = document.querySelector("#tableInscripcionMaterias");
    // Envio del resultado al tbody de la tabla
    tbodyContainer.innerHTML = htmlString;
}

// Función crear materia en mod Gestión Materias
function inscribirMateria() {

    // Asignación de valores controles modal creación Materias en variables locales
    var seleccionMateria =  document.getElementById("ddlIdMaterias");

    // Validación de vacios
    if (seleccionMateria.value != null ) {
        // Ciclo para recorrer *.JSON de Gestión Materias
        for (let i = 0; i < dataMaterias.length; i++) {
            let d = dataMaterias[i];
            if(seleccionMateria.value == i){
                // Envio de nuevo elemento al *.JSON
                dataMateriasInscritas.push({ "Materia": d.Materia, "Horas": d.Horas, "Profesor": d.Profesor });
            }
        }

        // Reload tabla
        loadDataTableInscripcionMaterias();

        // Limpieza controles modal creación
        document.querySelector("#ddlIdMaterias").value = "";

        // Mensaje de confirmación
        Swal.fire({
            title: 'Buen trabajo!',
            text: 'Materia inscrita con exito!',
            icon: 'success'
        });

        // Cierre modal
        $('#InscribirMateria').modal('hide');
    }
    // Mensaje de error
    else {
        Swal.fire({
            title: 'Error!',
            text: 'Debe seleccionar un elemento de la lista Materia!',
            icon: 'error'
        });
    }
}

// Función delete materia en mod Inscripción Materias
function deleteMateriaInscrita(pos) {

    // Se elimina el elemento indicado en el *.JSON
    dataMateriasInscritas.splice(pos, pos);

    // Reload tabla
    loadDataTableInscripcionMaterias();

    // Mensaje de confirmación
    Swal.fire({
        title: 'Buen trabajo!',
        text: 'La Materia fue eliminada del horario con exito!',
        icon: 'success'
    });
}