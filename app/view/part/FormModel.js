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
            text: 'Delete'
        },
        btn_save: {
            text: 'Save'
        },
        model : {
            no: null,
            name: null,
            model: null,
            total_delivery: 0,
            supplier_id: null,
        }
    },
    stores: {
    	parts : { type: 'parts' }
    }

});
