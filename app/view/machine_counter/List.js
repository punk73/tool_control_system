
Ext.define('tool_control_system.view.machine_counter.List',{
    extend: 'Ext.grid.Panel',

    requires: [
        'tool_control_system.view.machine_counter.ListController',
        'tool_control_system.view.machine_counter.ListModel'
    ],

    controller: 'machine_counter-list',

    viewModel: {
        type: 'machine_counter-list'
    },

    xtype: 'machine_counter_list',

    margin: '10',

    bind:{
        store : '{parts}'
    },

    frame : true,

    columns: [
        { text: 'Tool Number',  dataIndex: 'no', flex: 1 },
        { text: 'Tool Name', dataIndex: 'name', flex: 2 }
    ],

    
});
