function validarFormulario() {
    var nombreDato = document.getElementById('nombre');
    var emailDato = document.getElementById('email');
    var telefonoDato = document.getElementById('telefono');

    // Validación del nombre y el correo electrónico
    if (!nombreDato.value || !emailDato.value || !telefonoDato.value) {
        alert('Por favor, completa todos los campos.');
        return false; // Evitar el envío del formulario si hay campos incompletos
    }

    // Validación del correo electrónico
    var emailValido = /^\w+([.-_+]?\w+)*@\w+([.-]?\w+)*(\.\w{2,10})+$/;
    if (!emailValido.test(emailDato.value)) {
        alert('El correo electrónico no es válido.');
        return false; // Evitar el envío del formulario si el correo no es válido
    }

    // Validación del teléfono
    if (telefonoDato.value) {
        var telefonoValido = /^\d{10}$/;
        if (!telefonoValido.test(telefonoDato.value)) {
            alert('El número de teléfono no es válido.');
            return false; // Evitar el envío del formulario si el teléfono no es válido
        }
    }

    // Si todas las validaciones pasan, puedes continuar con el envío del formulario
    if (document.getElementById('formulario').checkValidity()) {
        var myModal = new bootstrap.Modal(document.getElementById('myModal'));
        myModal.show();
    }

    // Agregar lógica adicional si es necesario

    document.getElementById('formulario').classList.add('was-validated');
    return true; // Permitir el envío del formulario si todos los datos son válidos
}

document.getElementById('formulario').addEventListener('submit', function(event) {
    event.preventDefault(); // Prevenir el envío del formulario
    validarFormulario();
});

document.getElementById('myModal').addEventListener('hidden.bs.modal', function () {
    document.getElementById('formulario').reset(); // Reiniciar el formulario al cerrar el modal
});
