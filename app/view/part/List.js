
Ext.define('tool_control_system.view.part.List',{
    extend: 'Ext.grid.Panel',

    requires: [
        'tool_control_system.view.part.ListModel',
        'tool_control_system.view.part.ListController'
    ],

    controller: 'part-list', //controller nya refer ke FormController karena ini adalah child view form

    viewConfig  : {
        stripeRows          : true,
        enableTextSelection : true
    },

    
    emptyText: 'No Data',

    frame: true,

    style:{
        'border-color': '#D0D0D0'
    },

    xtype: 'part_list',


    bind:{
        store : '{tools}'
    },

    columns: [
        { text: 'Tool Number',  dataIndex: 'no', flex: 2 },
        { text: 'Tool Name', dataIndex: 'name', flex: 2 }
    ],

    buttons : [
        {
            xtype : 'button',
            text  : 'Semi Part',
            tooltip: 'Show Semi Part Form',
            bind : {
                icon : '{icon.info}'
            },
            listeners : {
                click : 'showSemiPartForm'
            }
            // disabled: true
        },
        
        /*{
            xtype : 'button',
            text  : 'Delete',
            name : 'btn_delete_part_list',
            tooltip : 'Delete Tool From This Part',
            bind : {
                icon : '{icon.delete}'
            },
            listeners : {
                click : 'onDelete'
            },
            disabled: true
        }*/
    ],

    listeners: {
        select : 'onRowSelected'
    }
    
});
