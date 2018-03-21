
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

    height: 200,

    frame:true,
    
    bind:{
        store : '{toolparts}'
    },
    columns: [
        { text: 'Tool Number',  dataIndex: 'tool.no', flex: 2 },
        { text: 'Part Number', dataIndex: 'part.no', flex: 2 },
        { text: 'Part Number', dataIndex: 'cav', flex: 1 }

    ]


});
