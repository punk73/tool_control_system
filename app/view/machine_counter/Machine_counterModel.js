Ext.define('tool_control_system.view.machine_counter.Machine_counterModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.machine_counter-machine_counter',
    requires:[
    	'tool_control_system.store.Parts',
        'tool_control_system.store.Tools'

    ],
    data: {
        name: 'tool_control_system'
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
