Ext.define('tool_control_system.model.Part_detail', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'part_id', type: 'int' },
        { name: 'total_delivery', type: 'int' },
        { name: 'total_qty', type: 'int' },
        { name: 'trans_date', type: 'auto' }
    ]
    
});
