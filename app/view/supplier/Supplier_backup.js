Ext.define('tool_control_system.view.supplier.Supplier', {
    extend: 'Ext.panel.Panel',

    xtype: 'supplierview',

    style : {
        // 'border-style' : 'solid',
        // 'border-width': '5px'
    },

    // layout:{type:'vbox', align:'stretch'},
    height : 550,

    requires: [

        // 'tool_control_system.store.Suppliers',
        'tool_control_system.view.supplier.Toolbar',
        'tool_control_system.view.supplier.List'
    ],

    title: 'Supplier Master',

    store: {
        type: 'suppliers'
    },

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
    
    

    listeners: {
        // select: 'onItemSelected'
    }
});
