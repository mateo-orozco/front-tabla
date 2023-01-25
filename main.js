let modal = document.getElementById("modal");
let boton = document.getElementById("boton");
let cerrar = document.getElementById("cancel")
boton.addEventListener("click", () => modal.classList.add("scale-100"));
cerrar.addEventListener("click", () => {
    modal.classList.remove("scale-100");
})
let guardar = document.getElementById("guardar")
let tabla = document.getElementById("tabla")

let nombre = document.getElementById("nombre")
let apellido = document.getElementById("apellido")
let NIT = document.getElementById("NIT")
let direccion = document.getElementById("direccion")
let ciudad = document.getElementById("ciudad")
let telefono = document.getElementById("telefono")
let contacto = document.getElementById("contacto")
let cTotal = document.getElementById("cTotal")
let cDisponible = document.getElementById("cDisponible")
let diasGracia = document.getElementById("diasGracia")

guardar.addEventListener("click", () => {
    
        tabla.innerHTML += `<tr class="hover:bg-gray-100 dark:hover:bg-gray-700">
      
      <td class="py-4 px-6 text-sm font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">${nombre.value}</td> 
      <td class="py-4 px-6 text-sm font-medium text-gray-500 text-center whitespace-nowrap dark:text-white">${apellido.value}</td>
      <td class="py-4 px-6 text-sm font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">${NIT.value}</td>
      <td class="py-4 px-6 text-sm font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">${direccion.value}</td>
      <td class="py-4 px-6 text-sm font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">${ciudad.value}</td>
      <td class="py-4 px-6 text-sm font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">${telefono.value}</td>    
      <td class="py-4 px-6 text-sm font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">${contacto.value}</td>
      <td class="py-4 px-6 text-sm font-medium text-gray-900 text-center whitespace-nowrap dark:text-white">${cDisponible.value}</td>
      <td class="py-4 px-6 text-sm font-medium text-gray-900 text-center whitespace-nowrap dark:text-white"><button onclick="editar(this)" 
      class="bg-violet-100 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-indigo-700">
  <path d="M2.695 14.763l-1.262 3.154a.5.5 0 00.65.65l3.155-1.262a4 4 0 001.343-.885L17.5 5.5a2.121 2.121 0 00-3-3L3.58 13.42a4 4 0 00-.885 1.343z" />
</svg>

        
  </button> <button onclick="eliminar(this)" 
      class="bg-violet-100 rounded">
      <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" class="w-5 h-5 text-indigo-700">
          <path fill-rule="evenodd" d="M8.75 1A2.75 2.75 0 006 3.75v.443c-.795.077-1.584.176-2.365.298a.75.75 0 10.23 1.482l.149-.022.841 10.518A2.75 2.75 0 007.596 19h4.807a2.75 2.75 0 002.742-2.53l.841-10.52.149.023a.75.75 0 00.23-1.482A41.03 41.03 0 0014 4.193V3.75A2.75 2.75 0 0011.25 1h-2.5zM10 4c.84 0 1.673.025 2.5.075V3.75c0-.69-.56-1.25-1.25-1.25h-2.5c-.69 0-1.25.56-1.25 1.25v.325C8.327 4.025 9.16 4 10 4zM8.58 7.72a.75.75 0 00-1.5.06l.3 7.5a.75.75 0 101.5-.06l-.3-7.5zm4.34.06a.75.75 0 10-1.5-.06l-.3 7.5a.75.75 0 101.5.06l.3-7.5z" clip-rule="evenodd" />
        </svg>
        
  </button></td>

    </tr> `
    modal.classList.remove("scale-100")
    
    
    nombre.value = ""
    apellido.value = ""
    NIT.value = ""
    direccion.value = ""
    ciudad.value = ""
    telefono.value = ""
    contacto.value = ""
    cDisponible.value = ""
})
function eliminar(elemento){
    elemento.parentElement.parentElement.remove()
}
function editar(elemento){

}