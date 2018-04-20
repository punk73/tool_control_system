Ext.define('tool_control_system.view.part.list.PartsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.part-list-parts',
    data: {
        name: 'tool_control_system'
    },
    stores :{
    	parts :{
    		type : 'parts'
    	}
    }

});
