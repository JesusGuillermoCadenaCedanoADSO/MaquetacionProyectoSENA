document.addEventListener("DOMContentLoaded", function() {
    var button = document.querySelector("button.factor");
    button.addEventListener("click", function(event) {
        event.preventDefault();


        var input_nombre_parametro = document.getElementById("nombre_parametro_factor");
        if (input_nombre_parametro.value == "") {
        alert("El campo no puede estar vacío.");
        input_nombre_parametro.focus();
        return false;
        }

        var input_unidad_origen = document.getElementById("unidad_origen");
        if (input_unidad_origen.value == "") {
        alert("El campo no puede estar vacío.");
        input_unidad_origen.focus();
        return false;
        }

        var input_unidad_destino = document.getElementById("unidad_destino");
        if (input_unidad_destino.value == "") {
        alert("El campo no puede estar vacío.");
        input_unidad_destino.focus();
        return false;
        }

        var input_factor = document.getElementById("valor_factor");
        if (input_factor.validity.valueMissing) {
        alert("El campo no puede estar vacío.");
        input_factor.focus();
        return false;
        }

        if (isNaN((input_factor.value))){
            alert("El campo debe ser numérico.");
            input_factor.focus();
            return false;
                    }
        else if(input_factor.value<=0){
            alert("El campo debe ser mayor que cero")
            input_factor.focus();
            return false;
        }
        
        return true;
    });

});

