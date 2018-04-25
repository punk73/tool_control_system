Ext.define('tool_control_system.view.tool.cavity.FormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tool-cavity-form',
    data: {
        name: 'tool_control_system',
        tool_id: null,
        tool_name : null,
        part_id : null,
        part_name : null,
    	cavity: 1,
        // model: {}
    },
    stores:{
        tools :{
            type : 'all_tools'
        },
        
        parts :{
            type : 'all_parts'
        },

        suppliers : {
            type : 'all_suppliers'
        },

        toolparts : {
            type : 'toolparts'
        }
    }

});
