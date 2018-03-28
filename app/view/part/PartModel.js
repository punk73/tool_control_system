Ext.define('tool_control_system.view.part.PartModel', {
    extend: 'Ext.app.ViewModel',
    
    alias: 'viewmodel.part-part',

    requires: [
        'tool_control_system.store.Parts',
        'tool_control_system.store.Tools'

    ],

    data: {
        name: 'tool_control_system',
        icon : {
            save    : 'resources/Save-icon.png',
            delete  : 'resources/Button-Delete-icon.png',
            cancel  : 'resources/Close-2-icon.png',
            title   : 'resources/part.png'
        },
    },
    stores : {
    	tools: {
    		type:'tools',
            autoLoad: false,
            autoSync: false
    	}
    }

});
