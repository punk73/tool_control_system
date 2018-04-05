Ext.define('tool_control_system.view.machine_counter.Machine_counterModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.machine_counter-machine_counter',
    requires:[
    	'tool_control_system.store.Parts',
        'tool_control_system.store.Tools'

    ],
    data: {
        name: 'tool_control_system',
        icon : {
            save    : 'resources/Save-icon.png',
            delete  : 'resources/Button-Delete-icon.png',
            cancel  : 'resources/Close-2-icon.png',
            machine_counter : 'resources/machine_counter.png'
        }
    },
    stores:{
    	parts:{
    		type:'parts'
    	},
        tools:{
            type:'tools'
        },

    }

});
