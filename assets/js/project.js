$(document).ready(function () {
    /**
     * function for adding a project
     */
    $('#newProjectForm').submit(function (event) {
        event.preventDefault();
        /**
         * @todo ajax query to save a project in the db
         * @todo add appending of id in html
         */
        $('.content').append('<div class="row todo" id="project###">      ' +
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
            '                            <a class="btn edit_project" href="javascript:void(0)"><i class="icon-edit"></i></a>' +
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
    });
    $(document).on('click', '.edit_project', function(){
        var name = $.trim($(this).parents('.todo').find('.project_name').text());
        var id = $(this).parents('.todo').attr('id').split("_")[1];
        $(this).parents('.todo').find('.project_name').html('<form class="form-inline">' +
            '            <fieldset>' +
            '            <input type="hidden" placeholder="Project name"' +
            '            name="id" value="'+id+'" required="required">'     +
        '            <input type="text" placeholder="Project name"' +
            '            name="name" value="'+name+'" required="required">' +
            '                            <button type="submit" class="btn btn-primary">Save</button>       ' +
            '     </fieldset>' +
            '            </form>');
    });
    $(document).on('submit', '.project_name form', function(event){
        event.preventDefault();
        /**
         * @todo ajax call to update a project
         */

        var name = $(this).find("input[name=name]").val();
        $(this).parents('.project_name').text(name);
    });
});