
Ext.define('tool_control_system.view.tool.Form',{
    extend: 'Ext.form.Panel',

    xtype : 'tool_form',

    requires: [
        'tool_control_system.view.tool.FormController',
        'tool_control_system.view.tool.FormModel'
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
            xtype: 'numberfield',
            name: 'total_shoot',
            fieldLabel: 'Total Shoot',
            value : 0,
            allowBlank: false
        },{
            xtype: 'numberfield',
            name: 'guarantee_shoot',
            fieldLabel: 'Guarantee Shoot',
            value : 0,
            allowBlank: false
        },{
            xtype: 'datefield',
            name: 'delivery_date',
            fieldLabel: 'Delivery Date',
            value : new Date()
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
