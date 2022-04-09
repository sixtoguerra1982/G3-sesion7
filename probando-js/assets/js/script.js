var nombre = document.getElementById("nombre")
var apellido = document.getElementById("apellido")
var profesion = document.getElementById("profesion")
var salario = document.getElementById("salario")


var input1 = prompt("Ingrese un nombre")
var input2 = prompt("Ingrese un apellido")

nombre.innerHTML = input1
apellido.innerHTML = input2
profesion.innerHTML = prompt("Ingrese un profesion")
salario.innerHTML = prompt("Ingrese un salario")

document.write(input1 + " " + input2)
