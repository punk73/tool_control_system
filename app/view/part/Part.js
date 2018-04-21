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
        'tool_control_system.view.part.List',
        'tool_control_system.view.part.part_relation.Form',
        // 'tool_control_system.view.part.list.Parts'
        'tool_control_system.view.part.list.All'
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
        collapsible: true,
        split: {
            size: 10
        },
        region  : 'center'
    },{
        // xtype : 'part_part_relation_form', // ini nanti diadain di tombol;
        xtype : 'part_list_all',
        region: 'east',
        collapsible: true,
        split: {
            size: 10
        },
        width : '60%'
    }],

    listeners: {
        
    }
});
