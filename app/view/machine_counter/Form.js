
Ext.define('tool_control_system.view.machine_counter.Form',{
    extend: 'Ext.form.Panel',

    xtype : 'machine_counter_form',

    requires: [
        'tool_control_system.view.machine_counter.FormController',
        'tool_control_system.view.machine_counter.FormModel'
    ],

    controller: 'machine_counter-form',
    viewModel: {
        type: 'machine_counter-form'
    },

    frame: true,

    title: 'Cavity',

    margin : '10',

    bodyPadding: 10,
    
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    items:[
        {
            xtype: 'textfield',
            name: 'tool_number',
            fieldLabel: 'Tool Number',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'tool_name',
            fieldLabel: 'Tool Name',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'number_of_tooling',
            fieldLabel: 'Number Of Tooling',
            allowBlank: false
        },{
            xtype: 'datefield',
            name: 'tanggal',
            fieldLabel: 'Tanggal',
            value : new Date()
        },{
            xtype: 'numberfield',
            name: 'machine_counter',
            fieldLabel: 'Machine Counter',
            allowBlank: false
        },{
            xtype : 'textarea',
            name : 'note',
            fieldLabel: 'Note'
        }
    ],

    buttons:[
        {
            xtype:'button',
            text : 'Save'
        }
    ]
    
});
