$(document).ready(function(){
    $(document).on('submit', '.add_task form', function(event){
        event.preventDefault();
        /**
         * @todo ajax query for saving a task to the db
         */
        $(this).parents('.todo').children('list_of_tasks').append(
            '<li class="task">       ' +
                '         <div class="row">      ' +
                '      <div class="span1 done">' +
                '                <input type="checkbox"/>' +
                '            </div>' +
                '<div class="span9 name">' +
                $(this).find('[name=name]').val() +
                '        </div>' +
                '        <div class="span2 actions">' +
                '            <div class="btn-toolbar">' +
                '                <div class="btn-group-primary">' +
                '                    <a class="btn" href="javascript:void(0)"><i class="icon-move"></i></a>' +
                '                    <a class="btn" href="javascript:void(0)"><i class="icon-edit"></i></a>' +
                '                    <a class="btn" href="javascript:void(0)"><i class="icon-remove"></i></a>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        </div>' +
                '        </li>'
        )
    })
})