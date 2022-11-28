// ESTRUCTURA TABLE USUARIOS

 $(document).ready(function(){
      
      $('#usersTable').DataTable({
        "order": [[0, "asc"]],
        "responsive":     true,
        "scrollY":        "300px",
        "scrollX":        true,
        "scrollCollapse": true,
        "paging":         true,
        "deferRender": true,
        "dom":  "Bfrtip",
        buttons: [
            
            {
                extend: 'excel',
                text: 'Exportar Excel',
                messageTop: 'Listado de Usuarios',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'csv',
                text: 'Exportar CSV',
                messageTop: 'Listado de Usuarios',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'pdf',
                text: 'Exportar PDF',
                messageTop: 'Listado de Usuarios',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'print', 
                text: 'Imprimir',
                customize: function ( win ) {
                    $(win.document.body)
                        .css( 'font-size', '8pt' );
                                                
 
                    $(win.document.body).find( 'table' )
                        .addClass( 'compact' )
                        .css( 'font-size', 'inherit' );
                },
                messageTop: 'Listado de Usuarios',
                autoPrint: false,
                exportOptions: {
                    columns: ':visible',
                }
                
            },
            
              'colvis'
        ],
        columnDefs: [ {
            targets: -1,
            visible: true
        } ],
        "fixedColumns": true,
      "language":{
        "lengthMenu": "Display _MENU_ records",
        "info": "Mostrando pagina _PAGE_ de _PAGES_",
        "infoEmpty": "No hay registros disponibles",
        "infoFiltered": "(filtrada de _MAX_ registros)",
        "loadingRecords": "Cargando...",
        "processing":     "Procesando...",
        "search": "Buscar:",
        "zeroRecords":    "No se encontraron registros coincidentes",
        "paginate": {
          "next":       "Siguiente",
          "previous":   "Anterior"
        },
      }
    });
         
    });


// ESTRUCTURA TABLE SERVICIOS

 $(document).ready(function(){
      
      $('#projectsTable').DataTable({
        "order": [[0, "asc"]],
        "responsive":     true,
        "scrollY":        "300px",
        "scrollX":        true,
        "scrollCollapse": true,
        "paging":         true,
        "deferRender": true,
        "dom":  "Bfrtip",
        buttons: [
            
            {
                extend: 'excel',
                text: 'Exportar Excel',
                messageTop: 'Listado de Proyectos',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'csv',
                text: 'Exportar CSV',
                messageTop: 'Listado de Proyectos',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'pdf',
                text: 'Exportar PDF',
                messageTop: 'Listado de Proyectos',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'print', 
                text: 'Imprimir',
                customize: function ( win ) {
                    $(win.document.body)
                        .css( 'font-size', '8pt' );
                                                
 
                    $(win.document.body).find( 'table' )
                        .addClass( 'compact' )
                        .css( 'font-size', 'inherit' );
                },
                messageTop: 'Listado de Proyectos',
                autoPrint: false,
                exportOptions: {
                    columns: ':visible',
                }
                
            },
            
              'colvis'
        ],
        columnDefs: [ {
            targets: -1,
            visible: true
        } ],
        "fixedColumns": true,
      "language":{
        "lengthMenu": "Display _MENU_ records",
        "info": "Mostrando pagina _PAGE_ de _PAGES_",
        "infoEmpty": "No hay registros disponibles",
        "infoFiltered": "(filtrada de _MAX_ registros)",
        "loadingRecords": "Cargando...",
        "processing":     "Procesando...",
        "search": "Buscar:",
        "zeroRecords":    "No se encontraron registros coincidentes",
        "paginate": {
          "next":       "Siguiente",
          "previous":   "Anterior"
        },
      }
    });
         
    });


 // ESTRUCTURA TABLE PAGOS

 $(document).ready(function(){
      
      $('#detailsTable').DataTable({
        "order": [[0, "asc"]],
        "responsive":     true,
        "scrollY":        "300px",
        "scrollX":        true,
        "scrollCollapse": true,
        "paging":         true,
        "deferRender": true,
        "dom":  "Bfrtip",
        buttons: [
            
            {
                extend: 'excel',
                text: 'Exportar Excel',
                messageTop: 'Listado de Detalles de Proyecto',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'csv',
                text: 'Exportar CSV',
                messageTop: 'Listado de Detalles de Proyecto',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'pdf',
                text: 'Exportar PDF',
                messageTop: 'Listado de Detalles de Proyecto',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'print', 
                text: 'Imprimir',
                customize: function ( win ) {
                    $(win.document.body)
                        .css( 'font-size', '8pt' );
                                                
 
                    $(win.document.body).find( 'table' )
                        .addClass( 'compact' )
                        .css( 'font-size', 'inherit' );
                },
                messageTop: 'Listado de Detalles de Proyecto',
                autoPrint: false,
                exportOptions: {
                    columns: ':visible',
                }
                
            },
            
              'colvis'
        ],
        columnDefs: [ {
            targets: -1,
            visible: true
        } ],
        "fixedColumns": true,
      "language":{
        "lengthMenu": "Display _MENU_ records",
        "info": "Mostrando pagina _PAGE_ de _PAGES_",
        "infoEmpty": "No hay registros disponibles",
        "infoFiltered": "(filtrada de _MAX_ registros)",
        "loadingRecords": "Cargando...",
        "processing":     "Procesando...",
        "search": "Buscar:",
        "zeroRecords":    "No se encontraron registros coincidentes",
        "paginate": {
          "next":       "Siguiente",
          "previous":   "Anterior"
        },
      }
    });
         
    });


 // ESTRUCTURA TABLE EMPRESAS

 $(document).ready(function(){
      
      $('#companiesTable').DataTable({
        "order": [[0, "asc"]],
        "responsive":     true,
        "scrollY":        "300px",
        "scrollX":        true,
        "scrollCollapse": true,
        "paging":         true,
        "deferRender": true,
        "dom":  "Bfrtip",
        buttons: [
            
            {
                extend: 'excel',
                text: 'Export Excel',
                messageTop: 'Listado de Empresas',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'csv',
                text: 'Export CSV',
                messageTop: 'Listado de Empresas',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'pdf',
                text: 'Export PDF',
                messageTop: 'Listado de Empresas',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'print', 
                text: 'Imprimir',
                customize: function ( win ) {
                    $(win.document.body)
                        .css( 'font-size', '8pt' );
                                                
 
                    $(win.document.body).find( 'table' )
                        .addClass( 'compact' )
                        .css( 'font-size', 'inherit' );
                },
                messageTop: 'Listado de Empresas',
                autoPrint: false,
                exportOptions: {
                    columns: ':visible',
                }
                
            },
            
              'colvis'
        ],
        columnDefs: [ {
            targets: -1,
            visible: true
        } ],
        "fixedColumns": true,
      "language":{
        "lengthMenu": "Display _MENU_ records",
        "info": "Mostrando pagina _PAGE_ de _PAGES_",
        "infoEmpty": "No hay registros disponibles",
        "infoFiltered": "(filtrada de _MAX_ registros)",
        "loadingRecords": "Cargando...",
        "processing":     "Procesando...",
        "search": "Buscar:",
        "zeroRecords":    "No se encontraron registros coincidentes",
        "paginate": {
          "next":       "Siguiente",
          "previous":   "Anterior"
        },
      }
    });
         
    });


/*
** FUNCION QUE BLOQUEA EL BOTON BACK DEL NAVEGADOR
*/
function nobackbutton(){

    window.location.hash = "no-back-button";
    window.location.hash = "Again-No-back-button" //chrome
    
    window.onhashchange = function(){
        window.location.hash = "no-back-button";
    }
    
}