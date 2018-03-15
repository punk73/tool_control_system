Ext.define('tool_control_system.view.part.Part', {
    extend: 'Ext.panel.Panel',

    xtype: 'partview',

    style : {
        // 'border-style' : 'solid',
        // 'border-width': '5px'
    },

    layout: {
        type:'border'
    },

    height : 600,

    requires: [
        'tool_control_system.view.part.Form',
        'tool_control_system.view.part.List'
    ],

    title: 'Part Master',

    store: {
        type    : 'parts'
    },

    autoScroll: true,

    

    items:[{
        xtype:'part_form',
        region  : 'center'
    },{
        xtype : 'part_list',
        region: 'east',
        width : '50%'
    }],

    listeners: {
        // select: 'onItemSelected'
    }
});
