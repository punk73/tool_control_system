Ext.define('tool_control_system.view.supplier.Supplier',{
    extend: 'Ext.panel.Panel',

    requires: [
        'tool_control_system.view.supplier.SupplierController',
        'tool_control_system.view.supplier.SupplierModel',
        'tool_control_system.view.supplier.Toolbar',
        'tool_control_system.view.supplier.List'
    ],

    controller: 'supplier-supplier',

    viewModel: {
        type: 'supplier-supplier'
    },

    xtype: 'supplierview',

    height : 550,

    title: 'Supplier Master',

    autoScroll: true,

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Code', dataIndex: 'code', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 5 }
    ],

    tbar : {
        xtype : 'supplier_toolbar'
    },

    items:[{
        xtype : 'supplier_list'
    }],
    
    bbar: [{
        xtype: 'pagingtoolbar',
        pageSize: 50,
        bind : {
            store : '{suppliers}'
        },
        
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true
    }],
    

    listeners: {
        // select: 'onItemSelected'
    }
});
