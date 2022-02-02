console.log(window.localStorage.getItem('nombre'));
console.log(window.localStorage.getItem('apellido'));
console.log(window.localStorage.getItem('dni'));


var nombre = window.localStorage.getItem('nombre')
var apellido = window.localStorage.getItem('apellido')
var dni = window.localStorage.getItem('dni')




document.getElementById('spamnombre').innerHTML = nombre + ' ' +  apellido ;
document.getElementById('spamdni').innerHTML = dni ;