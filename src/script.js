{
  document.addEventListener("DOMContentLoaded", inicio);

  function inicio() {
    const lista = document.getElementById("lista");
    const input = document.getElementsByTagName("input");
    const boton = document.getElementById("button-addon2");

    boton.addEventListener("click", function () {
      const productoLista = input[0].value;
      const li = document.createElement("li");
      li.className = "list-group-item";

      // Texto de la lista
      const textoLista = document.createElement("span");
      textoLista.textContent = " " + productoLista;

      // Crear checkbox
      const checkbox = document.createElement("input"); //checkbox va dentro de un input
      checkbox.type = "checkbox";
      //Cuando interactúa con el checkbox tengo que poner change
      checkbox.addEventListener("change", function () {
        if (checkbox.checked) {
          textoLista.style.textDecoration = "line-through";
        } else {
          textoLista.style.textDecoration = "none";
        }
      });

      //Botón
      const botonBorrar = document.createElement("button");
      botonBorrar.className = "btn btn-danger btn-sm float-end";
      botonBorrar.textContent = "Eliminar";
      botonBorrar.addEventListener("click", function () {
        lista.removeChild(li);
      });

      li.appendChild(checkbox);
      li.appendChild(textoLista);
      li.appendChild(botonBorrar);

      lista.appendChild(li);
    });
  }
}