Ext.define('tool_control_system.model.Part_relation', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'parent_part_id', type: 'int' },
        { name: 'children_part_id', type: 'int' }

    ]

});
