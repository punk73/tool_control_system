Ext.define('tool_control_system.model.Machine', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { 
        	name: 'tool_id', 
        	type: 'auto'
	    },

        { 
        	name: 'counter', 
        	type: 'int'
        },
        
        { 
        	name: 'tanggal', 
        	type: 'auto'
        },
        
        { 
        	name: 'note', 
        	type: 'auto'
        }
    ]
    
});
