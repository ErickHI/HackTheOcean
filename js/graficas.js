//ARCHIVO JS

tableData = document.getElementById("tableData");

var datos = [];

function instertarGraficas(){
    const http = new XMLHttpRequest();
    http.open('GET', 'back/get.php');
    http.send();
    http.onreadystatechange = function(){
        if(this.status == 200 && this.readyState == 4){
            datos = JSON.parse(this.responseText);
            datos.forEach((item, index) => {
                /* contenedorPrincipal.innerHTML +=
                    `<option value="${index}">${item["Species Name"]} - ${index}</option>`; */
                    console.log(item["Species Name"]);
                    tableData.innerHTML += `<tr>
                                                <th>${item["Species Name"]}</th>
                                                <th>${item["Calories"]}</th>
                                                <th>${item["Carbohydrate"]}</th>
                                                <th>${item["Cholesterol"]}</th>
                                                <th>${item["Fat, Total"]}</th>
                                                <th>${item["Fiber, Total Dietary"]}</th>
                                                <th>${item["Selenium"]}</th>
                                                <th>${item["Sodium"]}</th>
                                                <th>${item["Sugars, Total"]}</th>
                                            </tr>`;
                });
            //tableData.innerHTML  = '<div class="col bg-info bg-opacity-50">' + datos[1]["Species Name"] + '</div>';
            /* filaDatosP.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Species Aliases"] + '</div>'
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
            filaInfoN.innerHTML += '<div class="col bg-info bg-opacity-50">' + datos[especie]["Fat, Total"] + '</div>' */
        }
    }
}

instertarGraficas();