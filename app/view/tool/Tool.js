
Ext.define('tool_control_system.view.tool.Tool',{
    extend: 'Ext.panel.Panel',

    xtype: 'toolview',

    requires: [
        'tool_control_system.view.tool.ToolController',
        'tool_control_system.view.tool.ToolModel',
        'tool_control_system.view.tool.Form'
    ],

    controller: 'tool-tool',
    
    viewModel: {
        type: 'tool-tool'
    },

    layout: {
        type:'border'
    },

    height : 600,

    autoScroll: true,

    title: 'Tool Master',

    items:[{
        xtype : 'tool_form',
        region: 'center'
    }]
});
