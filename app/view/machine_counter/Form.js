
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

    title: 'Input Counter Machine',

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
            allowBlank: false,
            emptyText: 'Type And Enter',
            bind:{
                value: '{model.no}'
            },
            enableKeyEvents: true,
            listeners:{
                keyup: 'onSearch'
            }

        },{
            xtype: 'textfield',
            name: 'tool_name',
            fieldLabel: 'Tool Name',
            disabled: true,
            bind: {
                value : '{tool.name}'
            },
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'number_of_tooling',
            fieldLabel: 'Number Of Tooling',
            bind: {
                value : '{tool.no_of_tooling}'
            },
            disabled: true,
            allowBlank: false
        },{
            xtype: 'datefield',
            name: 'tanggal',
            fieldLabel: 'Tanggal',
            bind: {
                value : '{model.tanggal}'
            },
            disabled: true,
        },{
            xtype: 'numberfield',
            name: 'machine_counter',
            fieldLabel: 'Machine Counter',
            disabled: true,
            bind: {
                value : '{model.machine_counter}'
            },
            allowBlank: false
        },{
            xtype : 'textarea',
            name : 'note',
            bind: {
                value : '{model.note}'
            },
            disabled: true,
            fieldLabel: 'Note'
        }
    ],

    buttons:[
        {
            xtype:'button',
            text : 'Save',
            formBind : true,
            name : 'btn_save'
        },
        {
            xtype:'button',
            text : 'Cancel',
            name : 'btn_cancel',
            listeners :{
                click : 'onCancelClick'
            }
        }
    ]
    
});
