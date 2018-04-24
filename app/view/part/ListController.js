Ext.define('tool_control_system.view.part.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.part-list',

    requires : [
    	'tool_control_system.view.part.part_relation.Form'
    ],

    onDelete: function (){
    	console.log('on delete click')
    },

    showSemiPartForm : function (){
    	console.log('show form')
    	//make a new windows for showing details;
        Ext.create('Ext.window.Window', {
            title: 'Semi Part Form',
            height: 600,
            width: 1100,
            maximizable : true,
            layout: 'fit',
            modal :true,
            // frame: true,
            items: [{
                xtype : 'part_part_relation_form',
                //override the properties
                margin: 0,
                frame : false,
                title : null
            }]
        }).show();
    }

});
