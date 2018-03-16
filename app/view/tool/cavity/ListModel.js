Ext.define('tool_control_system.view.tool.cavity.ListModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tool-cavity-list',
    data: {
        name: 'tool_control_system'
    },
    stores : {
    	parts: {
    		type:'parts'
    	}
    }

});
