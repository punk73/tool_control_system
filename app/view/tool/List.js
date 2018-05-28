Ext.define('tool_control_system.view.tool.List',{
    /*inherite dari machine control list*/
	extend : 'tool_control_system.view.machine_counter.List',
	requires: [
        'tool_control_system.view.tool.ToolController',
    ],

    controller: 'tool-tool',

	xtype : 'tool_list',
	
	columns: [
        {   
            xtype: 'rownumberer',
            width: 65,
            text : 'No',
        },

        { 
            text: 'Tool Number',  
            dataIndex: 'no', 
            flex: 2,
            layout: {
                type: 'vbox',
                pack: 'center',
                align: 'stretch'
            },
            items : {
                xtype:'textfield',
                name: 'search_by_tool_no_tool_list',
                margin : 4,
                emptyText : 'search Tool No',
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
                name: 'search_by_tool_name_tool_list',
                margin : 4,
                emptyText : 'search Tool Name',
                enableKeyEvents: true,
                flex : 2,
                listeners: {
                    keyup: 'onSearch'
                }
            }
        },

        {
            text : 'No Of<br>Tooling',
            dataIndex :'no_of_tooling',
            flex: 1,
        },

        {
            text : 'First<br>Total<br>Shoot',
            dataIndex :'start_value',
            format:'0,000',
            flex: 1,
        },

        {
            text : 'Guarantee<br>Shoot',
            dataIndex :'guarantee_shoot',
            format:'0,000',
            flex: 1,
        },

        {
            text : 'Delivery<br>Date',
            dataIndex :'delivery_date',
            flex: 1,
        },

        {
            text : 'first total<br>shoot date',
            dataIndex :'start_value_date',
            flex: 1,
        },
    ],

    bbar : {
        xtype: 'pagingtoolbar',
        pageSize: 50,
        bind : {
            store : '{tools}'
        },        
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true,
        items:[{
            bind : {
                icon : '{icons.download}'
            },
            tooltip: 'download data',
            xtype:'button',
            handler: 'onDownload'
        }]
    }


})