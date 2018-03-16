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
        { 
            text: 'Code',
            dataIndex: 'code', 
            flex: 1,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_code',
                margin : 10,
                // anchor: '100%',
                // flex: 1,
                emptyText : 'Searh'
            }] 
        },
        { 
            text: 'Name',
            dataIndex: 'name',
            flex: 5,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_name',
                margin : 10,
                flex: 1,
                // anchor: '100%',
                emptyText : 'Searh'
            }]
        }
    ]
    

});