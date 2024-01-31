// script.js
$(document).ready(function() {
    var materiasSeleccionadas = []
    var profesoresSeleccionados = []

    // Función para actualizar el área de materias seleccionadas
    function actualizarMateriasSeleccionadas() {
        if (materiasSeleccionadas.length > 0) {
            var materiasHTML = "<p>Materias seleccionadas:</p><ul class='listaSeleccionado'>"

            materiasSeleccionadas.forEach(function(materia) {
                materiasHTML += "<li class='elementoSeleccionado'>" + materia + " <button class='btn btn-danger btn-sm eliminarBtn' data-tipo='materia' data-seleccionado='" + materia + "'>Eliminar</button></li>"
            })

            materiasHTML += "</ul>"
            $("#materiasSeleccionadas").html(materiasHTML)
        } else {
            // Si no hay materias seleccionadas, elimina el contenido del elemento
            $("#materiasSeleccionadas").empty()
        }
        localStorage.setItem('materiasSeleccionadas', JSON.stringify(materiasSeleccionadas));
    }

    // Función para actualizar el área de profesores seleccionados
    function actualizarProfesoresSeleccionados() {
        if (profesoresSeleccionados.length > 0) {
            var profesoresHTML = "<p>Profesores seleccionados:</p><ul class='listaSeleccionado'>";
            profesoresSeleccionados.forEach(function(profesor) {
                profesoresHTML += "<li class='elementoSeleccionado'>" + profesor + " <button class='btn btn-danger btn-sm eliminarBtn' data-tipo='profesor' data-seleccionado='" + profesor + "'>Eliminar</button></li>"
            })
            profesoresHTML += "</ul>"
            $("#profesoresSeleccionados").html(profesoresHTML)
        } else {
            // Si no hay materias seleccionadas, elimina el contenido del elemento
            $("#profesoresSeleccionados").empty()
        }
        localStorage.setItem('profesoresSeleccionados', JSON.stringify(profesoresSeleccionados))
    }

    // Manejar el clic en el botón "Buscar" de materias
    $("#materiaSelect").change(function() {
        var selectedMateria = $(this).val()

        if (materiasSeleccionadas.indexOf(selectedMateria) === -1) {
            materiasSeleccionadas.push(selectedMateria)
            actualizarMateriasSeleccionadas()
        }
    })

    // Manejar el clic en el botón "Buscar" de profesores
    $("#profesorSelect").change(function() {
        var selectedProfesor = $(this).val()
        if (profesoresSeleccionados.indexOf(selectedProfesor) === -1) {
            profesoresSeleccionados.push(selectedProfesor)
            actualizarProfesoresSeleccionados()
        }
    });

    // Manejar el clic en el botón "Eliminar"
    $(document).on("click", ".eliminarBtn", function() {
        var tipo = $(this).data("tipo")
        var seleccionado = $(this).data("seleccionado")

        if (tipo === "materia") {
            materiasSeleccionadas = materiasSeleccionadas.filter(function(materia) {
                return materia !== seleccionado
            });
            actualizarMateriasSeleccionadas()
        } else if (tipo === "profesor") {
            profesoresSeleccionados = profesoresSeleccionados.filter(function(profesor) {
                return profesor !== seleccionado
            })
            actualizarProfesoresSeleccionados()
        }
    })
})