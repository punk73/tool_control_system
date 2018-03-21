
Ext.define('tool_control_system.view.tool.cavity.Form',{
    extend: 'Ext.form.Panel',

    xtype: 'cavity_form',

    requires: [
        'tool_control_system.view.tool.cavity.FormController',
        'tool_control_system.view.tool.cavity.FormModel',
        'tool_control_system.view.tool.cavity.List',
        'tool_control_system.store.All_parts',
        'tool_control_system.store.All_tools'

    ],

    controller: 'tool-cavity-form',
    viewModel: {
        type: 'tool-cavity-form'
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
            xtype: 'combobox',
            name: 'tool_number',
            emptyText: 'Tool Number',
            // formBind: true,
            /*store: {
                type:'all_tools'
            },*/
            displayField:'no',
            bind:{
                value: '{tool_id}',
                store: '{tools}'
            },
            valueField:'id',
            queryMode: 'local',
            fieldLabel: 'Tool Number',
            listeners:{
                'change' : 'toolOnChange'
            },
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'tool_name',
            bind:{
                value: '{tool_name}'
            },
            fieldLabel: 'Tool Name',
            allowBlank: false,
            disabled: true
        },
        {
            xtype: 'combobox',
            name: 'part_number',
            emptyText: 'Part Number',
            /*store: {
                type:'all_parts'
            },*/
            displayField:'no',
            bind:{
                value: '{part_id}',
                store: '{parts}'
            },
            listeners:{
                'change' : 'partOnChange'
            },
            valueField:'id',
            queryMode: 'local',
            fieldLabel: 'Part Number',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'part_name',
            bind:{
                value: '{part_name}'
            },
            fieldLabel: 'Part Name',
            allowBlank: false,
            disabled: true
        },{
            xtype: 'numberfield',
            name: 'cavity',
            bind:{
                value: '{cavity}'
            },
            fieldLabel: 'Cavity',
            allowBlank: false
        },{
            xtype : 'cavity_list'
        }
    ],

    buttons:[
        {
            xtype:'button',
            text : 'Save',
            name: 'btn_save',
            disabled: true,
            formBind: true,
            listeners:{
                'click' : 'saveOnClick'
            },
        },
        {
            xtype:'button',
            text : 'Delete',
            name: 'btn_delete',
            disabled: true,
            listeners:{
                'click' : 'deleteOnClick'
            },
        },{
            xtype:'button',
            text : 'Cancel',
            listeners:{
                'click' : 'cancelOnClick'
            },
        }
    ]
});
