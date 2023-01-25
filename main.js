let modal = document.getElementById("modal");
let boton = document.getElementById("boton");
let cerrar = document.getElementById("cancel")
boton.addEventListener("click",()=>modal.classList.add("scale-100"));
cerrar.addEventListener("click",()=>{
    modal.classList.remove("scale-100");
})
let guardar = document.getElementById("guardar")

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let NIT = document.getElementById("NIT")
let direccion= document.getElementById("direccion")
let ciudad = document.getElementById("ciudad")
let telefono = document.getElementById("telefono")
let contacto = document.getElementById("contacto")
let cTotal = document.getElementById("cTotal")
let cDisponible = document.getElementById("cDisponible")
let diasGracia = document.getElementById("diasGracia")