$(document).ready(function(){
    $(document).on('submit', '.add_task form', function(event){
        event.preventDefault();
        /*
         @todo ajax query for saving a task to the db
         */
        var that = this;

        $(this).parents('.todo').find('.list').append(
            '<li class="task">       ' +
                '         <div class="row">      ' +
                '      <div class="span1 done">' +
                '                <input type="checkbox"/>' +
                '            </div>' +
                '<div class="span9 name">' +
                $(that).find('[name=name]').val() +
                '        </div>' +
                '        <div class="span2 actions">' +
                '            <div class="btn-toolbar">' +
                '                <div class="btn-group-primary">' +
                '                    <a class="btn" href="javascript:void(0)"><i class="icon-move"></i></a>' +
                '                    <a class="btn" href="javascript:void(0)"><i class="icon-edit"></i></a>' +
                '                    <a class="btn remove_task" href="javascript:void(0)"><i class="icon-remove"></i></a>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        </div>' +
                '        </li>'
        )
    })
    $(document).on('click', '.remove_task', function(){
        $(this).parents('.task').fadeOut(function(){
            $(this).remove();
        });
    });
})