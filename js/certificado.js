console.log(window.localStorage.getItem('nombre'));
var nombre = window.localStorage.getItem('nombre')
var apellido = window.localStorage.getItem('apellido')
var dni = window.localStorage.getItem('dni')

console.log(window.localStorage.getItem('apellido'));

console.log(window.localStorage.getItem('dni'));





document.getElementById('apellidob').innerHTML = apellido;
document.getElementById('nombreb').innerHTML = nombre ;
document.getElementById('dnib').innerHTML = dni ;



document.getElementById('npa').innerHTML = nombre + ' ' +  apellido ;
document.getElementById('dnia').innerHTML = dni ;