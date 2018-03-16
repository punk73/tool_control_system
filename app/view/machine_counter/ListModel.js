Ext.define('tool_control_system.view.machine_counter.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.machine_counter-list',
    requires:[
    	'tool_control_system.store.Parts'
    ],
    data: {
        name: 'tool_control_system'
    },
    stores:{
    	parts:{
    		type:'parts'
    	}
    }
});
