
Ext.define('tool_control_system.view.part.Form',{
    extend: 'Ext.form.Panel',

    xtype:'part_form',

    requires: [
        'tool_control_system.view.part.FormController',
        'tool_control_system.view.part.FormModel',
        'tool_control_system.store.Parts',
        'tool_control_system.store.Suppliers'

    ],

    margin : '10',
    
    bind:{
        title: '{title}',
    },

    frame: true,

    resizable: true,

    controller: 'part-form',

    viewModel: {
        type: 'part-form'
    },

    bodyPadding: 10,
    
    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    items : [
        {
            xtype: 'textfield',
            name: 'part_number',
            fieldLabel: 'Part Number',
            allowBlank: false,
            enableKeyEvents: true,
            emptyText : 'Type and Enter',
            bind:{
                value: '{model.no}',
            },
            listeners:{
                keyup: 'onSearch'
            }
        },{
            xtype: 'textfield',
            name: 'part_name',
            fieldLabel: 'Part Name',
            emptyText : 'Part Name',
            allowBlank: false,
            bind:{
                value: '{model.name}',
            },
            disabled:  true
        },{
            xtype: 'textfield',
            name: 'model',
            fieldLabel: 'Model',
            emptyText : 'Model for this part',
            allowBlank: false,
            bind:{
                value: '{model.model}',
            },
            disabled:  true
        },{
            xtype: 'numberfield',
            name: 'total_delivery',
            fieldLabel: 'Total Delivery',
            allowBlank: false,
            bind:{
                value: '{model.total_delivery}',
            },
            disabled:  true
        },{
            xtype: 'combobox',
            name: 'supplier_id',
            store : {type : 'suppliers'},
            displayField:'name',
            emptyText : 'Supplier',
            valueField:'id',
            queryMode: 'local', 
            fieldLabel: 'Supplier',
            bind:{
                value: '{model.supplier_id}',
            },
            allowBlank: false,
            disabled:  true
    }],

    buttons : [{
        xtype: 'button',
        bind:{
            text : '{btn_save.text}'
        },
        disabled:true,
        formBind: true,
        listeners: {
            click: 'onSaveClick'
        }    
    },{
        xtype: 'button',
        bind:{
            text : '{btn_delete.text}'
        },
        // formBind:true,
        disabled:true,
        listeners: {
            click: 'onDeleteClick'
        }
    },{
        xtype:'button',
        bind:{
            text : '{btn_cancel.text}'
        },
        listeners: {
            click: 'onCancelClick'
        }
    }],

    


});
