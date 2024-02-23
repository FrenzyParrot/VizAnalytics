function loadDocument(documentName) {
    var xhttp = new XMLHttpRequest();
    xhttp.onreadystatechange = function() {
        if (this.readyState == 4 && this.status == 200) {
            document.getElementById("contentDisplay").innerHTML = this.responseText;
        }
    };
    xhttp.open("GET", documentName, true);
    xhttp.send();
}


  
  