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
        { text: 'Part No', dataIndex: 'part_no'/*, flex: 1*/ },
        { text: 'Tool No', dataIndex: 'tool_no'/*, flex: 1*/ },
        { text: 'Tool Name', dataIndex: 'tool_name'/*, flex: 1*/ },
        { text: 'Supplier<br>Name', dataIndex: 'supplier_name'/*, flex: 1*/ },
        { text: 'Model', dataIndex: 'model'/*, flex: 1*/ },
        { text: 'No Of Tooling', dataIndex: 'no_of_tooling'/*, flex: 1*/ },
        { text: 'Cavity', dataIndex: 'cavity'/*, flex: 1*/ },
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
    }
});
