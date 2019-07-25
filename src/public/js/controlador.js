$(document).ready(function(){
    $('#btn-mostrar').click(function(){
        $.ajax({
            url: "/api/productos",
            method: "GET",
            dataType: "json",
            success: function(productos){
                var contenido = $('#contenido-tabla');
                contenido.html("");
                productos.forEach(producto => {
                    contenido.append(
                        `<tr>
                            <td>${producto.id}</td>
                            <td><input type="text" class="form-control" value="${producto.nombre}"></td>
                            <td>
                                <button type="button" class="btn btn-secondary">Actualizar</button>
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
        var parametros = `nombre=${$("#txt-producto").val()}`;
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
});
