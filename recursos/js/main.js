function marcarDescargado(boton){
        boton.textContent = "Descargado";
        boton.classList.add("descargado");
        boton.disabled = true; // opcional, evita que se vuelva a presionar
    }

function marcarGenerado(boton) {
    boton.textContent = "Generado";
    boton.classList.add("generado");
    boton.disabled = true;
}

function marcarDescargadoPrincipal(boton) {
    boton.textContent = "Descargado";
    boton.classList.add("descargado-principal");
    boton.disabled = true;
}

function marcarDescargado(boton) {
    boton.textContent = "Descargado";
    boton.classList.add("descargado");
    boton.disabled = true;
}