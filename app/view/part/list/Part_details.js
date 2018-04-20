
Ext.define('tool_control_system.view.part.list.Part_details',{
    extend: 'Ext.grid.Panel',

    xtype : 'part_list_part_details',

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    emptyText: 'No Data',

    frame: true,

    title: 'Part Detail',

    margin : '2 0 0 0',

    style:{
        'border-color': '#D0D0D0'
    },

    bind:{
        store : '{part_details}' 
    },

    columns: [
        { text: 'Total Delivery',  dataIndex: 'total_delivery', flex: 2 },
        { text: 'Total Qty', dataIndex: 'total_qty', flex: 2 },
        { text: 'Transaction Date', dataIndex: 'trans_date', flex: 2 }
    ],
});
