
Ext.define('tool_control_system.view.part.List',{
    extend: 'Ext.grid.Panel',

    requires: [
        'tool_control_system.view.part.ListController',
        'tool_control_system.view.part.ListModel',
        'tool_control_system.store.Parts'
    ],

    controller: 'part-list',

    margin : '10',

    title : 'Tool Info',

    viewModel: {
        type: 'part-list'
    },

    xtype: 'part_list',

    store: {
        type: 'parts'
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
