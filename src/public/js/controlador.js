$(document).ready(function(){
    $('#btn-mostrar').click(function(){
        $.ajax({
            url: "/api/productos",
            method: "GET",
            dataType: "json",
            success: function(productos){
                let contenido = $('#contenido-tabla');
                contenido.html("");
                productos.forEach(producto => {
                    contenido.append(
                        `<tr>
                            <td id="tr-id">${producto.id}</td>
                            <td><input id="td-producto" type="text" class="form-control" value="${producto.nombre}"></td>
                            <td>
                                <button id="btn-actualizar" type="button" class="btn btn-secondary">Actualizar</button>
                                <button type="button" class="btn btn-danger">Eliminar</button>
                            </td>
                        <tr>`
                    );
                });
            },
            error: function(error){
                console.error(error);
            }
        });
    });

    $('#btn-guardar').click(function(){
        let parametros = `nombre=${$("#txt-producto").val()}`;
        $.ajax({
            url: "/api/productos",
            method: "POST",
            data: parametros,
            dataType: 'json',
            success: function(res){
                $("#btn-mostrar").click();
            },
            error: function(error){
                console.error(error);
            }
        });
    });

    $('table').on('click', '#btn-actualizar', function(){
        let fila = $(this).closest('tr');
        let id = fila.find('#tr-id').text();
        let nombre = fila.find('#td-producto').val();
        $.ajax({
            url: "/api/productos/" + id,
            method: "PUT",
            data: {
                nombre: nombre
            },
            dataType: 'json',
            success: function(res){
                $("#btn-mostrar").click();
            },
            error: function(error){
                console.error(error);
            }
        });
    });
});
