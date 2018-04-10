Ext.define('tool_control_system.view.part.FormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.part-form',

    requires:[
    	'tool_control_system.store.Parts',
    ],

    data: {
        name: 'tool_control_system',
        title: 'Input Parts',
        btn_delete: {
            text: 'Delete',
            name: 'btn_delete'
        },
        btn_save: {
            text: 'Save',
            name: 'btn_save'
        },
        btn_cancel: {
            text: 'Cancel',
            name: 'btn_cancel'
        },
        model : {
            no: null,
            name: null,
            model: null,
            first_value: 0,
            date_of_first_value : null,
            supplier_id: null,
        }
    },
    stores: {
    	parts : { type: 'parts' }
    }

});
