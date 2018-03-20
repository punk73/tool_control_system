Ext.define('tool_control_system.view.part.PartModel', {
    extend: 'Ext.app.ViewModel',
    
    alias: 'viewmodel.part-part',

    requires: [
        'tool_control_system.store.Parts',
        'tool_control_system.store.Tools'

    ],

    data: {
        name: 'tool_control_system'
    },
    stores : {
    	tools: {
    		type:'tools',
            autoLoad: false,
            autoSync: false
    	}
    }

});
