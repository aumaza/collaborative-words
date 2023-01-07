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
      
      $('#documentsTable').DataTable({
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
                messageTop: 'Listado de Documentos',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'csv',
                text: 'Exportar CSV',
                messageTop: 'Listado de Documentos',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'pdf',
                text: 'Exportar PDF',
                messageTop: 'Listado de Documentos',
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
                messageTop: 'Listado de Documentos',
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


 // ESTRUCTURA TABLE SIRHU INDICATORS

 $(document).ready(function(){
      
      $('#sirhuIndicatorsTable').DataTable({
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
                messageTop: 'Listado de Indicadores Sirhu',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'csv',
                text: 'Exportar CSV',
                messageTop: 'Listado de Indicadores Sirhu',
                exportOptions: { columns: ':visible',}
            },
            {
                extend: 'pdf',
                text: 'Exportar PDF',
                messageTop: 'Listado de Indicadores Sirhu',
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
                messageTop: 'Listado de Indicadores Sirhu',
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


/*
** CREATE TEXTAREA
*/
$(document).ready(function(){

var textarea = document.getElementById('documents');
      sceditor.create(textarea, {
        plugins: 'undo',
        format: 'bbcode',
        icons: 'material',
        locale: 'es-ES',
        spellcheck: true,
        enablePasteFiltering: true,
        print: true,
        emoticonsEnabled: true,
        emoticonsCompat: true,
        emoticons:
            {
                // Emoticons to be included in the dropdown
                dropdown: {
                    ':smile:': '/static/skeleton/sceditor-3.1.1/emoticons/smile.png',
                    ':angel:': '/static/skeleton/sceditor-3.1.1/emoticons/angel.png'

                },
                // Emoticons to be included in the more section
                more: {
                    ':alien:': '/static/skeleton/sceditor-3.1.1/emoticons/alien.png',
                    ':blink:': '/static/skeleton/sceditor-3.1.1/emoticons/blink.png',
                    ':angry:': '/static/skeleton/sceditor-3.1.1/emoticons/angry.png',
                    ':blush:': '/static/skeleton/sceditor-3.1.1/emoticons/blush.png',
                    ':cheerful:': '/static/skeleton/sceditor-3.1.1/emoticons/cheerful.png',
                    ':cool:': '/static/skeleton/sceditor-3.1.1/emoticons/cool.png',
                    ':cwy:': '/static/skeleton/sceditor-3.1.1/emoticons/cwy.png',
                    ':devil:': '/static/skeleton/sceditor-3.1.1/emoticons/devil.png',
                    ':dizzy:': '/static/skeleton/sceditor-3.1.1/emoticons/dizzy.png',
                    ':ermm:': '/static/skeleton/sceditor-3.1.1/emoticons/ermm.png',
                    ':face:': '/static/skeleton/sceditor-3.1.1/emoticons/face.png',
                    ':getlost:': '/static/skeleton/sceditor-3.1.1/emoticons/getlost.png',
                    ':grin:': '/static/skeleton/sceditor-3.1.1/emoticons/grin.png',
                    ':happy:': '/static/skeleton/sceditor-3.1.1/emoticons/happy.png',
                    ':heart:': '/static/skeleton/sceditor-3.1.1/emoticons/heart.png',
                    ':kissing:': '/static/skeleton/sceditor-3.1.1/emoticons/kissing.png',
                    ':laughing:': '/static/skeleton/sceditor-3.1.1/emoticons/laughing.png',
                    ':ninja:': '/static/skeleton/sceditor-3.1.1/emoticons/ninja.png',
                    ':pinch:': '/static/skeleton/sceditor-3.1.1/emoticons/pinch.png',
                    ':pouty:': '/static/skeleton/sceditor-3.1.1/emoticons/pouty.png',
                    ':sad:': '/static/skeleton/sceditor-3.1.1/emoticons/sad.png',
                    ':shocked:': '/static/skeleton/sceditor-3.1.1/emoticons/shocked.png',
                    ':sick:': '/static/skeleton/sceditor-3.1.1/emoticons/sick.png',
                    ':sideways:': '/static/skeleton/sceditor-3.1.1/emoticons/sideways.png',
                    ':silly:': '/static/skeleton/sceditor-3.1.1/emoticons/silly.png',
                    ':sleeping:': '/static/skeleton/sceditor-3.1.1/emoticons/sleeping.png',
                    ':tongue:': '/static/skeleton/sceditor-3.1.1/emoticons/tongue.png',
                    ':unsure:': '/static/skeleton/sceditor-3.1.1/emoticons/unsure.png',
                    ':w00t:': '/static/skeleton/sceditor-3.1.1/emoticons/w00t.png',
                    ':wassat:': '/static/skeleton/sceditor-3.1.1/emoticons/wassat.png',
                    ':whistling:': '/static/skeleton/sceditor-3.1.1/emoticons/whistling.png',
                    ':wink:': '/static/skeleton/sceditor-3.1.1/emoticons/wink.png',
                    ':wub:': '/static/skeleton/sceditor-3.1.1/emoticons/wub.png'

                }
                
            },

        style: 'minified/themes/content/default.min.css'

      });
});



/*
** CREATE TEXTAREA
*/
$(document).ready(function(){

//var textarea = document.getElementById('editor1');
CKEDITOR.replace( 'editor1' );

});