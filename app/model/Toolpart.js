Ext.define('tool_control_system.model.Toolpart', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'tool_id', type: 'int' },
        { name: 'part_id', type: 'int' },
        { name: 'cavity', type: 'int' },
        { 
        	name: 'tool', 
        	type: 'auto',
        	mapping: function(data){
                if (data.tool.no) {
        		  return data.tool.no;  
                }
        	}
        },
        { 
        	name: 'part',
        	type: 'auto', 
        	mapping: function (data){
                if (data.part.no) {
        		  return data.part.no;
                    
                }
	        } 
	    }
    ]

});
