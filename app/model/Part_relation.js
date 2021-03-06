Ext.define('tool_control_system.model.Part_relation', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'parent_part_id', type: 'int' },
        { name: 'children_part_id', type: 'int' },
        { 
        	name: 'children_part_name', 
        	type: 'auto', 
        	mapping: function (data)
        	{
        		if (data.children_part) {
        			return data.children_part.name 
        		}
        	} 
        },
        { 
        	name: 'parent_part_name', 
        	type: 'auto',
        	mapping : function (data){
        		if (data.parent_part) {
        			return data.parent_part.name
        		}
        	}
        },
        { 
            name: 'parent_part_no', 
            type: 'auto',
            mapping : function (data){
                if (data.parent_part) {
                    return data.parent_part.no
                }
            }
        },
        { 
            name: 'children_part_no', 
            type: 'auto',
            mapping : function (data){
                if (data.children_part) {
                    return data.children_part.no
                }
            }
        },


    ]

});
