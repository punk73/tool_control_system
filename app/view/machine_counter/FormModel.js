Ext.define('tool_control_system.view.machine_counter.FormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.machine_counter-form',
    data: {
        name: 'tool_control_system',

        tool : {
        	no : null,
        	name : null,
        	no_of_tooling : null
        },

        model: {
        	id : null,
        	tanggal : new Date(),
        	machine_counter : 0,
        	note : null
        }
    },
    stores : {
    	tools : {
    		type : 'tools'
    	}
    }

});
