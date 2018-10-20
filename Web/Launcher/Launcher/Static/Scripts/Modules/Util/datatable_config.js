$(document).ready(function () {
    var table = $('.datatable-basic').dataTable({
        "scrollCollapse": true,
        "bScrollCollapse": true,
        "scrollX": true,
        "responsive": true,
        "searching": true,
        "aaSorting": [[0, "desc"]],
        "oLanguage": {
            "sPaginationType": "bootstrap",
            "sLengthMenu": "Mostrar _MENU_ registros",
            "sZeroRecords": "Não foram encontrados resultados",
            "sInfo": "_START_ - _END_ do total de _TOTAL_ registros",
            "sInfoEmpty": "Mostrando 0 até 0 de 0 registros",
            "sSearchPlaceholder": "Buscar",
            "sSearch": "",
            "sInfoFiltered": "(Filtrando de _MAX_ registros no total)",
            "sURL": "",
            "oPaginate": {
                "sFirst": "Primeiro",
                "sPrevious": "←",
                "sNext": "→",
                "sLast": "Último"
            },
        }
    });
    $('#buscar-registros').keyup(function () {
        table.dataTable().fnFilter(this.value);
    });
});
