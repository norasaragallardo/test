var intervalID = window.setInterval(updateScreen, 200);
var c = document.getElementById("console");

var txt = [
    "FORCE: XX0022. ENCYPT://000.222.2345",
    "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
    "RETRY: REINDEER FLOTILLA",
    "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning ports...",
    "BACKDOOR FOUND (23.45.23.12.00000000)"+contador,
    "BACKDOOR FOUND (13.66.23.12.00110000)",
    "BACKDOOR FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "BRUTE.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "MCP/> DEPLOY CLU",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "SCAN: __ 0001.0000.0554.0550",
    "SCAN: __ 0012.0000.0553.0030",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "FORCE: XX0022. ENCYPT://000.222.2345",
    "TRYPASS: ********* AUTH CODE: ALPHA GAMMA: 1___ PRIORITY 1",
    "RETRY: REINDEER FLOTILLA",
    "Z:> /FALKEN/GAMES/TICTACTOE/ EXECUTE -PLAYERS 0",
    "================================================",
    "Priority 1 // local / scanning...",
    "scanning ports...",
    "BACKDOOR FOUND (23.45.23.12.00000000)",
    "BACKDOOR FOUND (13.66.23.12.00110000)",
    "BACKDOOR FOUND (13.66.23.12.00110044)",
    "...",
    "...",
    "BRUTE.EXE -r -z",
    "...locating vulnerabilities...",
    "...vulnerabilities found...",
    "MCP/> DEPLOY CLU",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
    "SCAN: __ 0001.0000.0554.0550",
    "SCAN: __ 0012.0000.0553.0030",
    "SCAN: __ 0100.0000.0554.0080",
    "SCAN: __ 0020.0000.0553.0080",
]

var docfrag = document.createDocumentFragment();

function updateScreen() {
    //Shuffle the "txt" array
    txt.push(txt.shift());
    //Rebuild document fragment
    txt.forEach(function(e) {
        var p = document.createElement("p");
        p.textContent = e;
        docfrag.appendChild(p);
    });
    //Clear DOM body
    while (c.firstChild) {
        c.removeChild(c.firstChild);
    }
    c.appendChild(docfrag);
}

document.addEventListener('DOMContentLoaded', function() {
    // Verificar si hay un valor guardado en el almacenamiento local
    var contador = localStorage.getItem('visitas');

    // Si no hay un contador en el almacenamiento local, establecerlo a 0
    if (!contador) {
        contador = 0;
    }

    // Mostrar el contador en la página
    document.getElementById('contador').textContent = contador;

    // Incrementar el contador en 1 cada vez que la página se carga
    contador++;
    console.warn("c%Ingresos a la Pagina  " + contador , "color: blue; font-size: 40px")
    // Guardar el nuevo valor del contador en el almacenamiento local
    localStorage.setItem('visitas', contador);
});

