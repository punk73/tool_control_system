Ext.define('tool_control_system.view.supplier.List', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'supplier_list',

    requires: [
        'tool_control_system.store.Suppliers'
    ],

    //store nya di bind refer ke viewModel.data.stores
    bind: {
        store : '{suppliers}'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Code', dataIndex: 'code', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 5 }
    ]
    

});