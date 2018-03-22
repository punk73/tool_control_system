Ext.define('tool_control_system.view.supplier.SupplierModel', {
    extend: 'Ext.app.ViewModel',
    alias: 'viewmodel.supplier-supplier',
    
    data: {
        name: 'tool_control_system',
        title : 'judul',
        btn_sync: {
            text: 'Sync',
            icon: 'btn-sync'
        }
    },

    stores : {
    	suppliers : {    
    		type : 'suppliers'
        }
    }

});
