Ext.define('tool_control_system.view.part.list.Part_detailsModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.part-list-part_details',

    requires : [
    	'tool_control_system.store.Part_details'
    ],

    data: {
        name: 'tool_control_system'
    },

    stores : {
    	part_details : {
    		type : 'part_details'
    	}
    }

});
