/**
 * This view is an example list of people.
 */
Ext.define('tool_control_system.view.main.List', {
    extend: 'Ext.grid.Panel',
    xtype: 'mainlist',

    requires: [
        'tool_control_system.store.Datas',
        'tool_control_system.view.main.Toolbar'
    ],


    title: '<span> MAIN DATA </span> ',

    style : {
        'font-size' : '8px'
    },

    bind : {
        store : '{datas}',
        icon: '{list.icon}',
    },

    tbar: {
        xtype : 'main_toolbar'
    },

    height : 600,

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    columns: [
        { text: 'ID',  dataIndex: 'id', width: 50 },

        { 
            text: 'Part No', 
            dataIndex: 'part_no', 
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_part_no',
                margin : 4,
                emptyText : 'Searh',
                tooltip: 'Type Part No Here',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },

        { 
            text: 'Tool No', 
            dataIndex: 'tool_no', 
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_tool_no',
                margin : 4,
                emptyText : 'Searh',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] 
        },

        { 
            text: 'Tool Name', 
            dataIndex: 'tool_name',
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_tool_name',
                margin : 4,
                emptyText : 'Searh',
                tooltip: 'Type Part No Here',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  
        },

        { 
            text: 'Supplier Name', 
            dataIndex: 'supplier_name', 
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_supplier_name',
                margin : 4,
                emptyText : 'Searh',
                tooltip: 'Type Part No Here',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  
        },

        { 
            text: 'Model', 
            dataIndex: 'model', 
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_model',
                margin : 4,
                emptyText : 'Searh',
                tooltip: 'Type Part No Here',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  
        },

        { 
            text: 'No Of Tooling', 
            dataIndex: 'no_of_tooling', 
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : [{
                xtype:'textfield',
                name: 'search_by_no_of_tooling',
                margin : 4,
                emptyText : 'Searh',
                tooltip: 'Type Part No Here',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }] /*, flex: 1*/ 
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
                margin : 4,
                emptyText : 'Searh',
                tooltip: 'Type Part No Here',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  /*, flex: 1*/ 
        },
        
        { text: 'Machine<br>Counter', dataIndex: 'machine_counter', /*, flex: 1*/ },
        { text: 'Total<br>Delivery', dataIndex: 'total_delivery'/*, flex: 1*/ },
        { text: 'Total<br>Shoot', dataIndex: 'total_shoot'/*, flex: 1*/ },
        { text: 'month1', dataIndex: 'month1'/*, flex: 1*/ },
        { text: 'month2', dataIndex: 'month2'/*, flex: 1*/ },
        { text: 'month3', dataIndex: 'month3'/*, flex: 1*/ },
        { text: 'month4', dataIndex: 'month4'/*, flex: 1*/ },
        { text: 'month5', dataIndex: 'month5'/*, flex: 1*/ },
        { text: 'Total<br>Qty', dataIndex: 'total_qty'/*, flex: 1*/ },
        { text: 'Total Shoot <br> Forecast', dataIndex: 'total_shoot_forecast'/*, flex: 1*/ },
        { text: 'Guarantee<br>Shoot', dataIndex: 'guarantee_shoot'/*, flex: 1*/ },
        { text: 'Balance<br>Shoot', dataIndex: 'balance_shoot'/*, flex: 1*/ },
        { text: 'Guarantee<br>Remains', dataIndex: 'guarantee_remains'/*, flex: 1*/ },
        { text: 'Validation<br>Date', dataIndex: 'validation_date'/*, flex: 1*/ },
        { text: 'Remark', dataIndex: 'remark'/*, flex: 1*/ }
    ],

    bbar: [{
        xtype: 'pagingtoolbar',
        pageSize: 50,
        bind : {
            store : '{datas}'
        },        
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true
    }],

    listeners: {
        // select: 'onItemSelected'
        // itemcontextmenu: 'onRighClick' //niatnya buat right click, tp ga enakeun karena ada event righclick nya chrome        
    }
});
