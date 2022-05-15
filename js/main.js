//ARCHIVO JS

especiesSelector = document.getElementById("especiesSelector");
contenedorPrincipal = document.getElementById("contenedorEspecial");
contenedorSecundario = document.getElementById("contenedorSecundario");
btnBuscar = document.getElementById("btnBuscar");
filaDatosP = document.getElementById("filaDatosP");
filaInfo = document.getElementById("filaInfo");
filaLoc = document.getElementById("filaLoc");
filaHab = document.getElementById("filaHab");
filaInfoN = document.getElementById("filaInfoN");

var datos = [];

function traerDatosSelector(){
    const http = new XMLHttpRequest();
    http.open('GET', 'back/get.php');
    http.send();
    http.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            //console.log((this.responseText)[0]);
            datos = JSON.parse(this.responseText);
            //console.log(datos[0]);
            datos.forEach((item, index) => {
                especiesSelector.innerHTML +=
                    `<option value="${index}">${item["Species Name"]} - ${index}</option>`;
                });
        }
    }
}

traerDatosSelector();

function borrarContenedor(){
    alert("Borrado");
    contenedorSecundario.remove();
}

function buscarEspecie(especie){
    const http = new XMLHttpRequest();
    http.open('GET', 'back/get.php');
    http.send();
    http.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            datos = JSON.parse(this.responseText);
            console.log(datos[especie]);
        }
    }
}

//btnBuscar.addEventListener("click", buscarEspecie(especiesSelector.value));
btnBuscar.addEventListener("click", function (){
    if(!isNaN(especiesSelector.value)){
        console.log(especiesSelector.value);
        //buscarEspecie(especiesSelector.value)
        instertarDatos(especiesSelector.value);
    } else alert("Seleccione una especie");
});

function instertarDatos(especie){
    const http = new XMLHttpRequest();
    http.open('GET', 'back/get.php');
    http.send();
    http.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            datos = JSON.parse(this.responseText);
            //console.log(datos[especie]["Location"]);
            filaDatosP.innerHTML  = '<div class="col bg-info bg-opacity-50">' + datos[especie]["Species Name"] + '</div>'
            filaDatosP.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Species Aliases"] + '</div>'
            filaDatosP.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Fishing Rate"] + '</div>'
            filaDatosP.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Scientific Name"] + '</div>'
            filaDatosP.innerHTML += '<div class="col bg-info bg-opacity-50 d-flex justify-content-center"> <img src="' + datos[especie]["Image Gallery"][2]["src"] + '" class="w-75"></div>'

            filaInfo.innerHTML  = '<div class="col bg-info bg-opacity-50">' + datos[especie]["Health Benefits"] + '</div>'
            filaInfo.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Color"] + '</div>'
            filaInfo.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Texture"] + '</div>'
            filaInfo.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["NOAA Fisheries Region"] + '</div>'
            filaInfo.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Population"] + '</div>'

            filaLoc.innerHTML = '<div class="col bg-info bg-opacity-50">'+ datos[especie]["Location"] + '</div>';

            filaHab.innerHTML = '<div class="col bg-info bg-opacity-50">'+ datos[especie]["Habitat"] + '</div>';

            filaInfoN.innerHTML  = '<div class="col bg-info bg-opacity-50">' + datos[especie]["Calories"] + '</div>'
            filaInfoN.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Cholesterol"] + '</div>'
            filaInfoN.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Carbohydrate"] + '</div>'
            filaInfoN.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Protein"] + '</div>'
            filaInfoN.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Fat, Total"] + '</div>'
        }
    }
}