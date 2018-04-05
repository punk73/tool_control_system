Ext.define('tool_control_system.view.machine_counter.FormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.machine_counter-form',

    requires:[
        'tool_control_system.store.Tool_details',
        'tool_control_system.store.Machines',

    ],

    data: {
        name: 'tool_control_system',

        tool : {
            id : null,
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
    	},

        tool_details :{
            type : 'tool_details'
        },

        machines : {
            type : 'machines'
        }
    }

});
