const formularios = document.querySelectorAll('form');
const formulario = formularios[0];

window.onload = function(){
    var button;    
    button = document.querySelector("button.btn-primary");
    button.addEventListener("click", validar_formulario);
}

function validar_formulario(e){
    // var formulario = document.forms;
    var msg = '';
    e.preventDefault();
    for(var j = 0;j < formulario.elements.length;j++){
        if (formulario.elements[j].type == "text" || formulario.elements[j].type == "number"){
            if (formulario.elements[j].value ==""){
                formulario.elements[j].focus();
                alert("El campo no puede estar vacío");
                return false;
            }
        }
        if(formulario.elements[j].type == 'number'){
            var valor = formulario.elements[j].value;
            if (Number.isNaN((valor*1+0))){
                alert("El campo debe ser numérico.");
                formulario.elements[j].focus();
                return false;
                        }
            
            if (formulario.elements[j].name !== "valor"){
                if(valor*1+0<=0){
                    alert("El campo debe ser mayor que cero")
                    formulario.elements[j].focus();
                    return false;
                }
            }
        }
    }
}