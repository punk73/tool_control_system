Ext.define('tool_control_system.view.part.list.AllModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.part-list-all',

    requires :[
        'tool_control_system.store.Part_details'
    ],

    data: {
        name: 'tool_control_system'
    },
    stores :{
    	parts :{
    		type : 'parts'
    	},
        part_details : {
            type : 'part_details'
        }
    }

});
