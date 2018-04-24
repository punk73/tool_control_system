
Ext.define('tool_control_system.view.machine_counter.List',{
    extend: 'Ext.grid.Panel',

    requires: [
        'tool_control_system.view.machine_counter.ListController',
        'tool_control_system.view.machine_counter.ListModel'
    ],

    controller: 'machine_counter-list',

    title : 'Tool Info',

    /*viewModel: {
        type: 'machine_counter-list'
    },*/

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    xtype: 'machine_counter_list',

    margin: '10',

    bind:{
        store : '{tools}'
    },

    frame : true,

    columns: [
        { 
            text: 'Tool Number',  
            dataIndex: 'no', 
            flex: 1,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : {
                xtype:'textfield',
                name: 'search_by_tool_no_machine',
                margin : 4,
                emptyText : 'Searh Tool No',
                enableKeyEvents: true,
                flex :1,
                listeners: {
                    keyup: 'onSearch'
                }
            }
        },

        { 
            text: 'Tool Name', 
            dataIndex: 'name', 
            flex: 2,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : {
                xtype:'textfield',
                name: 'search_by_tool_name_machine',
                margin : 4,
                emptyText : 'Searh Tool Name',
                enableKeyEvents: true,
                flex : 2,
                listeners: {
                    keyup: 'onSearch'
                }
            }
        }
    ],

    bbar : {
        xtype: 'pagingtoolbar',
        pageSize: 50,
        bind : {
            store : '{tools}'
        },        
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true
    }

    
});
