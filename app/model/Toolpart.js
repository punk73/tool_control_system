Ext.define('tool_control_system.model.Toolpart', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'tool_id', type: 'int' },
        { name: 'part_id', type: 'int' },
        { name: 'tool', type: 'auto' },
        { name: 'part', type: 'auto' }
    ]

});
