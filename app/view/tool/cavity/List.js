
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

    height: 150,

    frame:true,

    style:{
        'border-color': '#d0d0d0'
    },
    
    bind:{
        store : '{toolparts}'
    },

    columns: [
        { 
            text: 'Tool No',  
            dataIndex: 'tool', 
            
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_tool',
                margin : 3,
                flex: 2,
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
            
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_part',
                flex: 2,
                margin : 3,
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
            
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_cavity',
                margin : 3,
                flex: 1,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  
        },
        {
            text : 'Is Suffix Number',
            dataIndex : 'is_independent',
            xtype : 'checkcolumn',
            flex : 0.2,

        }
    ],

    listeners: {
        select: 'onItemSelected'
    }


});
