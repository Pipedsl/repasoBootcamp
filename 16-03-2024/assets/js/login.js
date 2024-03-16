function verValorInput(){
    const valorEscrito = $("#inputUsuario").val()
    alert(valorEscrito);
    $("#inputUsuario").val(valorEscrito + " Agregado desde java")
    
} // hace las mismas funciones que lo de abajo pero con menos codigo gracias a JQuery

// ---------------------------------------------------------------------------

/* const labelUsuario = document.getElementById("labelUsuario");

labelUsuario.innerHTML="JUAN"
labelUsuario.style.color="red"
const btnIngresa = document.getElementById("btnIngresar");

btnIngresa.addEventListener("click", () => {
    alert('me hicieron click')
});

function verValorInput() {
    const inputUsuario = document.getElementById("inputUsuario")
    alert(inputUsuario.value)
}
*/
