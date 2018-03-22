Ext.define('tool_control_system.view.tool.ToolModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tool-tool',
    requires :[
        'tool_control_system.store.Toolparts'
    ],
    data: {
        name: 'tool_control_system',
        icon: {
            save    : 'resources/Save-icon.png',
            delete  : 'resources/Button-Delete-icon.png',
            cancel    : 'resources/Close-2-icon.png'
        }
    },
    stores: {
    	toolparts :{
    		type: 'toolparts'
    	}
    }

});
