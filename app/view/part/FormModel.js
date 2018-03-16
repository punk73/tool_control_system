Ext.define('tool_control_system.view.part.FormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.part-form',
    data: {
        name: 'tool_control_system',
        title: 'Input Parts'
    },
    stores: {
    	parts : { type: 'parts' }
    }

});
