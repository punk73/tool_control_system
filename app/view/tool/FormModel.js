Ext.define('tool_control_system.view.tool.FormModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.tool-form',
    requires :[
        'tool_control_system.store.Tools',
        'tool_control_system.store.Suppliers'
    ],
    data: {
        name: 'tool_control_system',
        title: 'Input Tool',
        btn_save :{
        	text: 'Save'
        },
        btn_delete :{
        	text: 'Delete'
        },
        model: {
        	no: null,
        	name: '',
        	no_of_tooling: 'TL-01',
        	total_shoot: 0,
        	guarantee_shoot: 0,
        	delivery_date: new Date(),
        	supplier_id: null,
            balance_shoot : 0,
            guarantee_remains: 0
        }
        
    },
    stores: {
    	tools: {type:'tools'},
        suppliers: {
            type : 'suppliers'
        }
    }

});
