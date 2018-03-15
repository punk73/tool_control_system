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

    height : 550,

    requires: [
        // 'tool_control_system.store.Parts',
        // 'tool_control_system.store.Suppliers',
        'tool_control_system.view.part.Form',
        // 'tool_control_system.view.part.List'
    ],

    title: 'Part Master',

    store: {
        type    : 'parts'
    },

    autoScroll: true,

    

    items:[{
        xtype:'part_form',
        region  : 'center'
    }],

    listeners: {
        // select: 'onItemSelected'
    }
});
