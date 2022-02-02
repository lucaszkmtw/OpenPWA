function change_text() {
    nombre = document.querySelector('[name="first_name"]').value;
    apellido = document.querySelector('[name="last_name"]').value;
    dni = document.querySelector('[name="dni"]').value;
    // console.log(nombre, apellido, dni)



    document.getElementById('spam_dni').innerHTML = dni;
    document.getElementById('spam_nombre').innerHTML = nombre + apellido;


}