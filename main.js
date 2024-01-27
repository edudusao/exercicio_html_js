const form = document.getElementById("camposNumericos")

let FormEValido = false;

form.addEventListener("submit", function(e){
    e.preventDefault();

    const numeroA = document.getElementById("campo1").value;
    const numeroB = document.getElementById("campo2").value;

    if (numeroB > numeroA){
        alert("Está correto");
        location.reload();
    }
    if(numeroB < numeroA) {
        alert("Não está correto");
    }
    if (numeroB == numeroA){
        alert("Os números são iguais");
    }

    formEValido = false;
})
