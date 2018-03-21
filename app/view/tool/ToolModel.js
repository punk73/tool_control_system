Ext.define('tool_control_system.view.tool.ToolModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tool-tool',
    requires :[
        'tool_control_system.store.Toolparts'
    ],
    data: {
        name: 'tool_control_system',
    },
    stores: {
    	toolparts :{
    		type: 'toolparts'
    	}
    }

});
