$(document).ready(function(){
    $(document).on('submit', '.add_task form', function(event){
        event.preventDefault();
        /*
         @todo ajax query for saving a task to the db
         */
        var that = this;

        $(this).parents('.todo').find('.list').append(
            '<li class="task" id="task###">       ' +
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
                '                    <a class="btn move_task" href="javascript:void(0)"><i class="icon-move"></i></a>' +
                '                    <a class="btn edit_task" href="javascript:void(0)"><i class="icon-edit"></i></a>' +
                '                    <a class="btn remove_task" href="javascript:void(0)"><i class="icon-remove"></i></a>' +
                '                </div>' +
                '            </div>' +
                '        </div>' +
                '        </div>' +
                '        </li>'
        )
    });
    $(document).on('click', '.remove_task', function(){
        $(this).parents('.task').fadeOut(function(){
            $(this).remove();
        });
    });
    $(document).on('click', '.edit_task', function(){
       var name = $.trim($(this).parents('.task').find('.list').text());
       var id = $(this).parents('.todo').attr('id').split("_")[1];
        $(this).parents('.task').find('.name').html('<form class="form-inline">' +
            '            <fieldset>' +
            '            <input type="hidden" placeholder="Task name"' +
            '            name="id" value="'+id+'" required="required">'     +
            '            <input type="text" placeholder="Task name"' +
            '            name="name" value="'+name+'" required="required">' +
            '                            <button type="submit" class="btn btn-primary">Save</button>       ' +
            '     </fieldset>' +
            '            </form>');
    });
    $(document).on('submit', '.name form', function(event){
        event.preventDefault();
        /**
         * @todo ajax call to update a project
         */

        var name = $(this).find("input[name=name]").val();
        $(this).parents('.name').text(name);
    });
    $(document).on('click', '.move_task', function(){
        $("#sortable").sortable();
        $("#sortable").disableSelection();
        $(this).move();
    });
});