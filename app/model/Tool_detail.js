Ext.define('tool_control_system.model.Tool_detail', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'tool_id', type: 'auto' },
        { name: 'machine_counter', type: 'auto' },
        { name: 'tanggal', type: 'auto' },
        { name: 'note', type: 'int' }
    ]
    
});
