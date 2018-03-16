
Ext.define('tool_control_system.view.tool.cavity.Form',{
    extend: 'Ext.form.Panel',

    xtype: 'cavity_form',

    requires: [
        'tool_control_system.view.tool.cavity.FormController',
        'tool_control_system.view.tool.cavity.FormModel',
        'tool_control_system.view.tool.cavity.List'
    ],

    controller: 'tool-cavity-form',
    viewModel: {
        type: 'tool-cavity-form'
    },

    frame: true,

    title: 'Cavity',

    // autoScroll: true,

    margin : '10',

    bodyPadding: 10,
    
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    items:[
        {
            xtype: 'textfield',
            name: 'part_number',
            fieldLabel: 'Part Number',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'part_name',
            fieldLabel: 'Part Name',
            allowBlank: false
        },{
            xtype: 'numberfield',
            name: 'cavity',
            fieldLabel: 'Cavity',
            allowBlank: false
        },{
            xtype : 'cavity_list'
        }
    ],

    buttons:[
        {
            xtype:'button',
            text : 'Save'
        },
        {
            xtype:'button',
            text : 'Delete'
        }
    ]
});
