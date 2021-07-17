function cargarCatalogo() {

    try {
        var xhr = new XMLHttpRequest();
        xhr.onreadystatechange = function() {
            if (this.readyState == 4 && this.status == 200) {
                cargarXML(this);
            }
        };
        cargarXMLL();
        xhr.open("GET", "https://back.enviosecuador.net/catalogo.xml", true);
        xhr.send();
    } catch (error) {
        cargarXMLL();
        // expected output: ReferenceError: nonExistentFunction is not defined
        // Note - error messages will vary depending on browser
    }
}
var carga = false;

function cargarXML(xml) {
    var docXML = xml.responseXML;
    var tabla = "<thead class=" + "thead-dark" + "><tr><th>Artista</th><th>Titulo</th></tr></thead><tbody>";
    var discos = docXML.getElementsByTagName("CD");
    for (var i = 0; i < discos.length; i++) {
        tabla += "<tr><td>";
        tabla += discos[i].getElementsByTagName("ARTIST")[0].textContent;
        tabla += "</td><td>";
        tabla += discos[i].getElementsByTagName("TITLE")[0].textContent;
        tabla += "</td></tr>";
    }
    var contenedor = document.getElementById("demo");
    contenedor = contenedor.innerHTML = tabla + "</tbody>";
    if (carga == false) {
        var divv = document.getElementById("tabla");
        divv.style.display = "block";
        carga = true;
    } else {
        var divv = document.getElementById("tabla");
        divv.style.display = "none";
        carga = false;
    }

}

function cargarXMLL() {
    var tabla = "<thead class=" + "thead-dark" + "><tr><th>Artista</th><th>Titulo</th></tr></thead><tbody>";

    tabla += "<tr><td>";
    tabla += "Bob Dylan";
    tabla += "</td><td>";
    tabla += "Empire Burlesque";
    tabla += "</td></tr>";

    var contenedor = document.getElementById("demo");
    contenedor = contenedor.innerHTML = tabla + "</tbody>";
    if (carga == false) {
        var divv = document.getElementById("tabla");
        divv.style.display = "block";
        carga = true;
    } else {
        var divv = document.getElementById("tabla");
        divv.style.display = "none";
        carga = false;
    }
}