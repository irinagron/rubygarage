$(document).ready(function () {
    /**
     * function for adding a project
     */
    $('#newProjectForm').submit(function (event) {
        event.preventDefault();
        /**
         * @todo ajax query to save a project in the db
         */
        $('.content').append('<div class="row todo">      ' +
            '      <div class="span12 project_title">        ' +
            '    <div class="row">' +
            '                <div class="span1 project_icon">' +
            '                    <div class="icon-white icon-calendar icon-with-margin">&nbsp;</div>' +
            '                </div>' +
            '                <div class="span9 project_name">' +
            $(this).find('[name=name]').val() +
            '                </div>' +
            '                <div class="span2 actions">' +
            '                    <div class="btn-toolbar">' +
            '                        <div class="btn-group-primary">' +
            '                            <a class="btn" href="javascript:void(0)"><i class="icon-edit"></i></a>' +
            '                            <a class="btn remove_project" href="javascript:void(0)"><i class="icon-remove"></i></a>' +
            '                        </div>' +
            '                    </div>' +
            '                </div>' +
            '            </div>' +
            '            </div>' +
            '        <div class="span12 add_task">' +
            '            <div class="row">' +
            '                <div class="span1">' +
            '                    <i class="icon-plus icon-with-margin"></i>' +
            '                </div>' +
            '                <div class="span11">' +
            '                    <form>' +
            '            <div class="input-append">           ' +
            '                            <input class="span9" placeholder="Start typing here to create a task" type="text">' +
            '                                <button class="btn btn-success" type="button">Add new task</button>' +
            '                            </div>' +
            '                        </form>' +
            '                    </div>' +
            '                </div>' +
            '            </div>');
    });
    $(document).on('click', '.remove_project', function(){
        $(this).parents('.todo').fadeOut(function(){
            $(this).remove();
        });
    })
})