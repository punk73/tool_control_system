
Ext.define('tool_control_system.view.part.part_relation.List',{
    extend: 'Ext.grid.Panel',

    requires: [
        'tool_control_system.view.part.part_relation.FormController',
        'tool_control_system.view.part.part_relation.FormModel'
    ],

    xtype : 'part_part_relation_List',

    controller: 'part-part_relation-form',

    viewModel: {
        type: 'part-part_relation-form'
    },

    emptyText: 'No Data',

    frame: true,

    style:{
        'border-color': '#D0D0D0'
    },

    bind:{
        store : '{part_relations}'
    },

    columns: [
        { text: 'ID',  dataIndex: 'id', flex: 1 },
        { text: 'parent_part_name',  dataIndex: 'parent_part_name', flex: 3 },
        { text: 'children_part_name', dataIndex: 'children_part_name', flex: 3 }
    ],

    bbar :[{
        xtype: 'pagingtoolbar',
        // pageSize: 50,
        bind : {
            store : '{part_relations}'
        },        
        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
        displayInfo: true
    }],

    buttons : [
        {
            xtype : 'button',
            text  : 'Reload',
            bind : {
                icon : '{icon.sync}'
            },
            listeners : {
                click : 'listReload'
            }
            
        },{
            xtype : 'button',
            text  : 'Delete',
            bind : {
                icon : '{icon.delete}'
            },
            listeners : {
                click : 'deleteListOnClick'
            },
            // disabled: true
        }
    ]
});
