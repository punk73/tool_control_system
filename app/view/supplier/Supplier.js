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

    layout: 'fit',

    height : 600,

    title: 'Supplier Master',

    autoScroll: true,

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
