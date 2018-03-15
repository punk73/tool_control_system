
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

    title: 'Input Parts',

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
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'part_name',
            fieldLabel: 'Part Name',
            allowBlank: false
        },{
            xtype: 'textfield',
            name: 'model',
            fieldLabel: 'Model',
            allowBlank: false
        },{
            xtype: 'numberfield',
            name: 'total_delivery',
            fieldLabel: 'Total Delivery',
            value : 0,
            allowBlank: false
        },{
            xtype: 'combobox',
            name: 'supplier_id',
            store : {type : 'suppliers'},
            displayField:'name',
            valueField:'name',
            queryMode: 'local', 
            fieldLabel: 'Supplier',
            allowBlank: false
    }],

    buttons : [{
        xtype: 'button',
        text : 'Save'
    },{
        xtype: 'button',
        text : 'Delete'
    }]


});
