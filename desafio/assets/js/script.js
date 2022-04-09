/*
    <th id="R1N1">-</th>
    <th id="R1N2">-</th>
        <th id="R1N3">-</th>
                <th id="P1">-</th>
*/
var nombre = prompt("Ingrese Nombre Estudiante","")
var elemt_nombre = document.getElementById("name_user")
elemt_nombre.innerHTML = "Nombre: " + nombre
var r1n1 = prompt("Ingrese Nota 1 HTML:","")
var r1n2 = prompt("Ingrese Nota 2 HTML:","")
var r1n3 = prompt("Ingrese Nota 3 HTML:","")

// asiganamos los elementos a cambiar dinamicamente a variables
var element_r1n1 = document.getElementById("R1N1")
var element_r1n2 = document.getElementById("R1N2")
var element_r1n3 = document.getElementById("R1N3")
// Cambiar los elementos dinamicamente
element_r1n1.innerHTML = r1n1
element_r1n2.innerHTML = r1n2
element_r1n3.innerHTML = r1n3

var promedio1 = (parseInt(r1n1) + parseInt(r1n2) + parseInt(r1n3)) / 3
var element_prom1 = document.getElementById("P1")
element_prom1.innerHTML = promedio1


var r2n1 = prompt("Ingrese Nota 1 CSS:","")
var r2n2 = prompt("Ingrese Nota 2 CSS:","")
var r2n3 = prompt("Ingrese Nota 3 CSS:","")

// asiganamos los elementos a cambiar dinamicamente a variables
var element_r2n1 = document.getElementById("R2N1")
var element_r2n2 = document.getElementById("R2N2")
var element_r2n3 = document.getElementById("R2N3")
// Cambiar los elementos dinamicamente
element_r2n1.innerHTML = r2n1
element_r2n2.innerHTML = r2n2
element_r2n3.innerHTML = r2n3

var promedio2 = (parseInt(r2n1) + parseInt(r2n2) + parseInt(r2n3)) / 3
var element_prom1 = document.getElementById("P2")
element_prom1.innerHTML = promedio2


