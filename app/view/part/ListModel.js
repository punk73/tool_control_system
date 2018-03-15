Ext.define('tool_control_system.view.part.ListModel', {
    extend: 'Ext.app.ViewModel',
    
    alias: 'viewmodel.part-list',

    requires: [
        'tool_control_system.store.Parts'
    ],

    data: {
        name: 'tool_control_system'
    },
    stores : {
    	parts: {
    		type:'parts'
    	}
    }

});
