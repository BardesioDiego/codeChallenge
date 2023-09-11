document.addEventListener('DOMContentLoaded', function () {
    const formulario = document.getElementById('registro-form');

    formulario.addEventListener('submit', function (event) {
        event.preventDefault(); 

        const nombre = document.getElementById('nombre').value;
        const apellido = document.getElementById('apellido').value;
        const fechaNacimiento = document.getElementById('fecha_nacimiento').value;

        const datos = {
            nombre: nombre,
            apellido: apellido,
            fechaNacimiento:fechaNacimiento
        };

        const opciones = {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(datos)
        };

        fetch('https://jsonplaceholder.typicode.com/users', opciones)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Error en la solicitud HTTP: ' + response.status);
                }
                return response.json();
            })
            .then(data => {
                console.log('Registro exitoso. Datos del usuario:', data);
            })
            .catch(error => {
                console.error('Se produjo un error:', error);
            });
    });
});