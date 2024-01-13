$(document).ready(function() {
    $('#form-tarefa').on('submit', function (e) {
        e.preventDefault();

        const novaTarefa = $('#nova-tarefa').val();
        const tarefa = $('<li></li>').text(novaTarefa);
        $('#lista-tarefas').append(tarefa);

        $('#nova-tarefa').val('');
    });

    $('#lista-tarefas').on('click', 'li', function() {
        $(this).toggleClass('riscado');
    });
});




