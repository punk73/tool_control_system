
Ext.define('tool_control_system.view.machine_counter.Machine_counter',{
    extend: 'Ext.panel.Panel',

    xtype : 'machine_counterview',

    requires: [
        'tool_control_system.view.machine_counter.Machine_counterController',
        'tool_control_system.view.machine_counter.Machine_counterModel'
    ],

    controller: 'machine_counter-machine_counter',
    viewModel: {
        type: 'machine_counter-machine_counter'
    },

    html: 'machine_counter'
});
