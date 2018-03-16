
Ext.define('tool_control_system.view.machine_counter.Machine_counter',{
    extend: 'Ext.panel.Panel',

    xtype : 'machine_counterview',

    requires: [
        'tool_control_system.view.machine_counter.Machine_counterController',
        'tool_control_system.view.machine_counter.Machine_counterModel',
        'tool_control_system.view.machine_counter.Form',
        'tool_control_system.view.machine_counter.List'


    ],

    controller: 'machine_counter-machine_counter',
    viewModel: {
        type: 'machine_counter-machine_counter'
    },

    title : 'Machine Counter',

    layout: 'border',

    height: 600,

    items:[
        {
            xtype: 'machine_counter_form',
            region : 'center'
        },{
            xtype: 'machine_counter_list',
            region : 'east',
            width  : '40%' 
        }
    ]
});
