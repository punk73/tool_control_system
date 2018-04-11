Ext.define('tool_control_system.view.part.part_relation.FormModel', {
    extend: 'Ext.app.ViewModel',
    
    alias: 'viewmodel.part-part_relation-form',

    requires :[
        'tool_control_system.store.Part_relations'
    ],

    data: {
        name: 'tool_control_system',

        parent_part_name : null,
        
        children_part_name: null,
        
        model: {
            parent_part_id : null,
            children_part_id : null,
        },

        btn_save : {
        	text: 'Save'
        },

        btn_cancel : {
        	text : 'Cancel'
        },

        btn_delete : {
        	text : 'Delete'
        }
    },
    stores: {
    	parts : {
    		type : 'all_parts'
    	},

        part_relations : {
            type: 'part_relations'
        }
    }

});
