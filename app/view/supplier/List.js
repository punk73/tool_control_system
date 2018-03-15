Ext.define('tool_control_system.view.supplier.List', {
    extend: 'Ext.grid.Panel',
    
    xtype: 'supplier_list',

    requires: [
        'tool_control_system.store.Suppliers'
    ],

    style : {
        // 'border-style' : 'solid',
        // 'border-width': '5px'
    },


    store: {
        type: 'suppliers'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id' },
        { text: 'Code', dataIndex: 'code', flex: 1 },
        { text: 'Name', dataIndex: 'name', flex: 5 }
    ],

    bbar: [{
        xtype: 'pagingtoolbar',
        pageSize: 50,
        store: 'suppliers',
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true
    }],
    

});