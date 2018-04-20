
Ext.define('tool_control_system.view.part.List',{
    extend: 'Ext.grid.Panel',

    requires: [
        'tool_control_system.view.part.ListController',
        'tool_control_system.view.part.ListModel',
    ],

    controller: 'part-list',

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    
    emptyText: 'No Data',

    frame: true,

    style:{
        'border-color': '#D0D0D0'
    },

    xtype: 'part_list',


    bind:{
        store : '{tools}'
    },

    columns: [
        { text: 'Tool Number',  dataIndex: 'no', flex: 2 },
        { text: 'Tool Name', dataIndex: 'name', flex: 2 }
    ],

    buttons : [
        {
            xtype : 'button',
            text  : 'Delete',
            bind : {
                icon : '{icon.delete}'
            },
            disabled: true
        }
    ]
    
});
