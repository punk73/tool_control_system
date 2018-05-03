Ext.define('tool_control_system.model.Toolpart', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'tool_id', type: 'int' },
        { name: 'part_id', type: 'int' },
        { name: 'cavity', type: 'float' },
        {
            name : 'is_independent', 
            type : 'int'
        },

        /*order is MATTER !!!!!!! if put this under the tool, everythings will MESS UP*/
        { 
            name: 'supplier_name', 
            type: 'auto',
            mapping: function(data){
                if (data.tool) {
                  if(data.tool.supplier){
                    return data.tool.supplier.name;
                  }
                }
            }
        },

        { 
        	name: 'tool', 
        	type: 'auto',
        	mapping: function(data){
                if (data.tool) {
        		  return data.tool.no;  
                }
        	}
        },

        { 
        	name: 'part',
        	type: 'auto', 
        	mapping: function (data){
                if (data.part) {
        		  return data.part.no;
                    
                }
	        } 
	    }
    ]

});
