
Ext.define('tool_control_system.view.part.List',{
    extend: 'Ext.grid.Panel',

    requires: [
        'tool_control_system.view.part.ListController',
        'tool_control_system.view.part.ListModel',
    ],

    controller: 'part-list',

    margin : '10',

    title : 'Tool Info',

    viewModel: {
        type: 'part-list'
    },

    xtype: 'part_list',


    bind:{
        store : '{parts}'
    },

    columns: [
        { text: 'Tool Number',  dataIndex: 'no', flex: 1 },
        { text: 'Tool Name', dataIndex: 'name', flex: 2 }
    ],

    buttons : [
        {
            xtype : 'button',
            text  : 'Delete'
        }
    ]
    
});
