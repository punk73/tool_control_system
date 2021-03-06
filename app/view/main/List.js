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
        {   
            xtype: 'rownumberer',
            width : 60,
            text : 'No',
        },

        // { text: 'ID',  dataIndex: 'id', width: 50 },

        { 
            
            align: 'center',
            width: 50,
            xtype: 'actioncolumn',
            items: [
               {
                  xtype: 'button',
                  iconCls: 'x-fa fa-info',
                  tooltip: 'Details',
                  scale: 'small',
                  handler: 'onDetailClick',
                  margin: 3
               }
            ],
            renderer : function (value, meta){
                // console.log({value, meta})
                data = this.up().grid.getStore().getAt(meta.rowIndex).data//.getStore().getAt(meta.rowIndex)
                // console.log({data})
                guarantee_after_forecast = data.guarantee_after_forecast;
                //yg habis dalam 6 bulan kedepan 
                if(parseInt(guarantee_after_forecast) > 6) {
                    meta.style = "background-color:#3bd368;color:white;";
                    // return 'OK';
                } else {
                    meta.style = "background-color:red;color:white;";
                    // return 'Danger';
                }
            }
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
                emptyText : 'search',
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
                emptyText : 'search',
                tooltip: 'Type Part No Here',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  
        },

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
                emptyText : 'search',
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
                emptyText : 'search',
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
                emptyText : 'search',
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
                emptyText : 'search',
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
                emptyText : 'search',
                tooltip: 'Type Part No Here',
                enableKeyEvents: true,
                listeners: {
                    keyup: 'onSearch'
                }
            }]  /*, flex: 1*/ 
        },
        
        { text: 'Machine<br>Counter', dataIndex: 'machine_counter', xtype: 'numbercolumn', format:'0,000' },
        { text: 'Total<br>Delivery', dataIndex: 'total_delivery', xtype: 'numbercolumn', format:'0,000' },
        { text: 'Total<br>Shoot', dataIndex: 'total_shoot', xtype: 'numbercolumn', format:'0,000' },
        { text: 'month1', dataIndex: 'month1', xtype: 'numbercolumn', format:'0,000' },
        { text: 'month2', dataIndex: 'month2', xtype: 'numbercolumn', format:'0,000' },
        { text: 'month3', dataIndex: 'month3', xtype: 'numbercolumn', format:'0,000' },
        { text: 'month4', dataIndex: 'month4', xtype: 'numbercolumn', format:'0,000'},
        { text: 'month5', dataIndex: 'month5', xtype: 'numbercolumn', format:'0,000'},
        { text: 'month6', dataIndex: 'month6', xtype: 'numbercolumn', format:'0,000'},
        { text: 'Total<br>Qty', dataIndex: 'total_qty', xtype: 'numbercolumn', format:'0,000' },
        { text: 'Total Shoot <br> Forecast', dataIndex: 'total_shoot_forecast', xtype: 'numbercolumn', format:'0,000' },
        { text: 'Guarantee<br>Shoot', dataIndex: 'guarantee_shoot', xtype: 'numbercolumn', format:'0,000' },
        { 
            text: 'Balance<br>Shoot', 
            dataIndex: 'balance_shoot',
            xtype: 'numbercolumn', 
            format:'0,000',
            /*renderer : function (value, meta){
                if(parseInt(value) >= 0) {
                    meta.style = "background-color:#3bd368;color:white;";

                } else {
                    meta.style = "background-color:red;color:white;";
                }

                return value;
            }*/
        },
        { text: 'Guarantee<br>Remains<br>(In Month)', dataIndex: 'guarantee_remains', xtype: 'numbercolumn', format:'0,000' },
        /*{ text: 'Validation<br>Date', dataIndex: 'validation_date' },
        { text: 'Remark', dataIndex: 'remark', xtype: 'numbercolumn', format:'0,000' }*/
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
