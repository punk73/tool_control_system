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
    
    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    // layout : 'fit',
    frame: true,

    style:{
        'border-color': '#D0D0D0'
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
                margin : 4,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
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
                margin : 4,
                flex: 1,
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                },
                emptyText : 'Searh'
            }]
        }
    ]
    

});