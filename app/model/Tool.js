Ext.define('tool_control_system.model.Tool', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' },
        { name: 'no', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'no_of_tooling', type: 'auto' },
        // { name: 'total_shoot', type: 'int' },
        { name: 'start_value', type: 'auto' },
        { name: 'guarantee_shoot', type: 'int' },
        // { name: 'guarantee_remains', type: 'auto' },
        { name: 'delivery_date', type: 'auto' },
        { name: 'start_value_date', type: 'auto' },
        // { name: 'balance_shoot', type: 'auto' },
        { name: 'supplier_id', type: 'auto' }
    ]
    
});
