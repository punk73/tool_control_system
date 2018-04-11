
Ext.define('tool_control_system.view.part.part_relation.Form',{
    extend: 'Ext.form.Panel',

    requires: [
        'tool_control_system.view.part.part_relation.FormController',
        'tool_control_system.view.part.part_relation.FormModel',
        'tool_control_system.view.part.part_relation.List'
    ],

    xtype: 'part_part_relation_form',

    controller: 'part-part_relation-form',

    viewModel: {
        type: 'part-part_relation-form'
    },

    margin: 10,

    bodyPadding: 10,

    title: 'Part Relation Form',

    frame: true,

    resizable: true,

    defaults: {
        anchor: '100%',
        labelWidth: 100
    },

    items : [
        {
            xtype: 'combobox',
            name: 'parent_part_number',
            emptyText: 'Parent Part Number',
            displayField:'no',
            bind:{
                value: '{model.parent_part_id}',
                store: '{parts}'
            },
            listeners:{
                'change' : 'ParentPartOnChange'
            },
            queryMode: 'local', 
            valueField:'id',
            fieldLabel: 'Parent Part Number',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'parent_part_name',
            fieldLabel: 'Parent Part Name',
            allowBlank: false,
            emptyText : 'Type and Enter',
            bind:{
                value: '{parent_part_name}',
            },
            disabled : true
        },
        {
            xtype: 'combobox',
            name: 'children_part_number',
            emptyText: 'Children Part Number',
            displayField:'no',
            bind:{
                value: '{model.children_part_id}',
                store: '{parts}'
            },
            listeners:{
                'change' : 'childrenPartOnChange'
            },
            queryMode: 'local', 
            valueField:'id',
            fieldLabel: 'Children Part Number',
            allowBlank: false
        },
        {
            xtype: 'textfield',
            name: 'children_part_name',
            fieldLabel: 'Children Part Name',
            allowBlank: false,
            emptyText : 'Children Part Name',
            bind:{
                value: '{children_part_name}',
            },
            disabled : true
        },
        {
            xtype : 'part_part_relation_List',
            height : 200
        }
    ],

    buttons : [{
        xtype: 'button',
        // iconAlign : 'top',
        bind:{
            icon : '{icon.save}',
            text : '{btn_save.text}'
        },
        name: 'btn_save_part_relation',
        disabled:true,
        formBind: true,
        listeners: {
                click: 'onSaveClick'
            }    
        },{
            // xtype:'button',
            bind:{
                text : '{btn_cancel.text}',
                icon : '{icon.cancel}'
            },
            name:'btn_cancel_part_relation',
            listeners: {
                click: 'onCancelClick'
            }
        }
    ],


});
