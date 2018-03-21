
Ext.define('tool_control_system.view.tool.cavity.List',{
    extend: 'Ext.grid.Panel',

    requires: [
        'tool_control_system.view.tool.cavity.FormController',
        'tool_control_system.view.tool.cavity.FormModel'
    ],
    
    controller: 'tool-cavity-form',

    viewModel: {
        type: 'tool-cavity-form'
    },

    xtype: 'cavity_list',

    autoScroll: true,

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    height: 200,

    frame:true,
    
    bind:{
        store : '{toolparts}'
    },

    columns: [
        { 
            text: 'Tool No',  
            dataIndex: 'tool', 
            flex: 2,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_tool',
                margin : 10,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },
        { 
            text: 'Part No',
            dataIndex: 'part',
            flex: 2,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_part',
                margin : 10,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  
        },
        { 
            text: 'Cavity', 
            dataIndex: 'cavity', 
            flex: 1,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_cavity',
                margin : 10,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }


});
