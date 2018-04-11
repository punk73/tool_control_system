
Ext.define('tool_control_system.view.tool.Form',{
    extend: 'Ext.form.Panel',

    xtype : 'tool_form',

    requires: [
        'tool_control_system.view.tool.FormController',
        'tool_control_system.view.tool.FormModel',
        'tool_control_system.store.All_suppliers',

    ],

    controller: 'tool-form',
    viewModel: {
        type: 'tool-form'
    },

    margin : '10',
    
    bind:{
        title: '{title}',
    },

    frame: true,

    // resizable: true,

    bodyPadding: 10,
    
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    items : [
        {
            xtype: 'textfield',
            name: 'tool_number',
            fieldLabel: 'Tool Number',
            emptyText: 'Type And Enter',
            bind:{
                value: '{model.no}'
            },
            enableKeyEvents: true,
            listeners:{
                keyup: 'onSearch'
            },
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'tool_name',
            fieldLabel: 'Tool Name',
            emptyText: 'Tool Name',
            bind: {
                value: '{model.name}'
            },
            allowBlank: false,
            disabled:  true
        },{
            xtype: 'textfield',
            name: 'number_of_tooling',
            fieldLabel: 'Number Of Tooling',
            emptyText: 'Number of Tooling',
            bind: {
                value: '{model.no_of_tooling}'
            },
            allowBlank: false,
            disabled:  true
        },{
            xtype: 'numberfield',
            name: 'total_shoot',
            fieldLabel: 'First Total Shoot',
            bind: {
                value: '{model.start_value}'
            },
            minValue: 0,
            autoStripChars: true,
            allowBlank: false,
            disabled:  true
        },{
            xtype: 'numberfield',
            name: 'guarantee_shoot',
            fieldLabel: 'Guarantee Shoot',
            minValue: 0,
            autoStripChars: true,
            bind: {
                value: '{model.guarantee_shoot}'
            },
            minValue: 0,
            allowBlank: false,
            disabled:  true
        },{
            xtype: 'datefield',
            name: 'delivery_date',
            fieldLabel: 'Delivery Date',
            bind: {
                value: '{model.delivery_date}'
            },
            format: 'Y-m-d',
            emptyText:'yyyy-mm-dd',
            disabled:  true
        },{
            xtype: 'datefield',
            name: 'start_value_date',
            fieldLabel: 'First Total Shoot Date',
            bind: {
                value: '{model.start_value_date}'
            },
            format: 'Y-m-d',
            emptyText:'yyyy-mm-dd',
            disabled:  true
        },{
            xtype: 'combobox',
            name: 'supplier_id',
            emptyText: 'Supplier',
            store: {
                type:'all_suppliers'
            },
            displayField:'name',
            bind: {
                value: '{model.supplier_id}'
            },
            valueField:'id',
            queryMode: 'local', 
            fieldLabel: 'Supplier',
            allowBlank: false,
            disabled:  true
    }],

    buttons : [{
            xtype: 'button',
            name: 'btn_save',
            formBind: true,
            bind:{
                text : '{btn_save.text}',
                icon : '{icon.save}'
            },
            listeners:{
                click: 'onSaveClick'
            },
            disabled:  true
        },{
            xtype: 'button',
            name: 'btn_delete',
            bind:{
                text : '{btn_delete.text}',
                icon : '{icon.delete}'
            },
            listeners:{
                click: 'onDeleteClick'
            },
            disabled:  true
        },{
            xtype: 'button',
            text: 'Cancel',
            name: 'btn_cancel',
            bind: {
                icon : '{icon.cancel}'
            },
            listeners:{
                click: 'onCancelClick'
            }
        }
    ]
});
