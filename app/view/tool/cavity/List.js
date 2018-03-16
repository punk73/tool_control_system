
Ext.define('tool_control_system.view.tool.cavity.List',{
    extend: 'Ext.grid.Panel',

    requires: [
        'tool_control_system.view.tool.cavity.ListController',
        'tool_control_system.view.tool.cavity.ListModel'
    ],

    controller: 'tool-cavity-list',

    viewModel: {
        type: 'tool-cavity-list'
    },

    xtype: 'cavity_list',

    autoScroll: true,

    height: 250,

    frame:true,
    bind:{
        store : '{parts}'
    },
    columns: [
        { text: 'Tool Number',  dataIndex: 'no', flex: 2 },
        { text: 'Tool Name', dataIndex: 'name', flex: 2 }
    ]


});
