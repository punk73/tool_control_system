
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

    // autoScroll: true, //kalau di true, nanti editor nya ga jalan

    viewConfig  : {
        stripeRows           : true,
        forcaFit             : true,
        enableTextSelection  : true
    },

    height: 140,

    frame:true,

    style:{
        'border-color': '#d0d0d0'
    },
    
    bind:{
        store : '{toolparts}'
    },

    columns: [
        {   
            text : 'No',
            xtype: 'rownumberer'
        },

        /*{ 
            text: 'Supplier Name',  
            dataIndex: 'supplier_name', 
            enableTextSelection  : true,
            flex : 1,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_supplier_name_modal',
                margin : 3,
                flex: 2,
                emptyText : 'search',
                tooltip :'Search By Supplier',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearchInModal'
                }
            }] 
        },*/

        { 
            text: 'Tool No',  
            dataIndex: 'tool', 
            enableTextSelection  : true,
            flex : 1,
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
                emptyText : 'search',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },

        { 
            text: 'Part No',
            dataIndex: 'part',
            flex : 1,
            enableTextSelection  : true,

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
                emptyText : 'search',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  
        },

        { 
            text: 'Cavity', 
            dataIndex: 'cavity', 
            enableTextSelection  : true,
            flex : 1,
            editor : {
                xtype : 'textfield'
            },
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
                emptyText : 'search',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  
        },
        
        {
            text : 'Is Suffix<br>Number',
            enableTextSelection  : true,
            dataIndex : 'is_independent',
            xtype : 'checkcolumn',
            flex : 1,
        }
    ],

    listeners: {
        select: 'onItemSelected'
    }


});
