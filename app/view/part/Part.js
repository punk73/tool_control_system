Ext.define('tool_control_system.view.part.Part', {
    extend: 'Ext.panel.Panel',

    xtype: 'partview',

    style : {
        
    },

    layout: {
        type:'border'
    },

    height : 600,

    requires: [
        'tool_control_system.view.part.PartModel',
        'tool_control_system.view.part.Form',
        'tool_control_system.view.part.List'
    ],

    title: 'Part Master',

    bind:{
        icon : '{icon.title}'
    },

    viewModel: {
        type: 'part-part'
    },

    autoScroll: true,

    items:[{
        xtype:'part_form',
        region  : 'center'
    },{
        xtype : 'part_list',
        region: 'east',
        width : '40%'
    }],

    listeners: {
        // select: 'onItemSelected'
    }
});
