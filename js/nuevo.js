function change_text() {
    nombre = document.querySelector('[name="first_name"]').value;
    apellido = document.querySelector('[name="last_name"]').value;
    dni = document.querySelector('[name="dni"]').value;
    // console.log(nombre, apellido, dni)



    document.getElementById('spam_dni').innerHTML = dni;
    document.getElementById('spam_nombre').innerHTML = nombre + apellido;


    var data = {
        name: nombre,
        apellido: apellido,
        dni: dni,
    }


    var jsonData = JSON.stringify(data);
    
    
    var nomb =  window.localStorage.setItem('nombre', nombre);
    var ape =    window.localStorage.setItem('apellido', apellido);
    var doc =    window.localStorage.setItem('dni', dni);

    console.log(window.localStorage.getItem('nombre'));
    console.log(window.localStorage.getItem('apellido'));
    console.log(window.localStorage.getItem('dni'));

}
