// Adición de evento click a los controles con id => confirmInscription
document.getElementById('confirmInscription').addEventListener('click', function() {
    // Aquí podrías añadir código para manejar la inscripción al curso
    // Mensaje de confirmación
    Swal.fire({
        title: 'En buena hora!',
        text: 'Usted se ha inscrito satisfactoriamente a este curso!',
        icon: 'success'
    });

    // Definición modal
    var myModal = bootstrap.Modal.getInstance(document.getElementById('confirmModal')); // Obtener la instancia del modal
    myModal.hide(); // Cerrar el modal
});