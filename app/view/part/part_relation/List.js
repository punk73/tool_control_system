
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
        { text: 'parent_part_id',  dataIndex: 'parent_part_id', flex: 3 },
        { text: 'children_part_id', dataIndex: 'children_part_id', flex: 3 }
    ],

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
