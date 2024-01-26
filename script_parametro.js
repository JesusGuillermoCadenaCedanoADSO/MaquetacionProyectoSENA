document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("button.parametro");
    button.addEventListener("click", function(event) {
        event.preventDefault();


        var input_nombre_parametro = document.getElementById("nombre_parametro");
        if (input_nombre_parametro.value == "") {
        alert("El campo no puede estar vacío.");
        input_nombre_parametro.focus();
        return false;
        }

        var input_simbolo = document.getElementById("simbolo_parametro");
        if (input_simbolo.value == "") {
        alert("El campo no puede estar vacío.");
        input_simbolo.focus();
        return false;
        }

        var input_peso = document.getElementById("peso_molecular");
        if (input_peso.validity.valueMissing) {
        alert("El campo no puede estar vacío.");
        input_peso.focus();
        return false;
        }

        if (isNaN((input_peso.value))){
            alert("El campo debe ser numérico.");
            input_peso.focus();
            return false;
                    }
        else if(input_peso.value<=0){
            alert("El campo debe ser mayor que cero")
            input_peso.focus();
            return false;
        }
        
        return true;
    });
});

