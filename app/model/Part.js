Ext.define('tool_control_system.model.Part', {
    extend: 'Ext.data.Model',

    requires:[
        'tool_control_system.model.Tool'
    ],

    fields: [
        { name: 'id', type: 'int' },
        { name: 'no', type: 'auto' },
        { name: 'name', type: 'auto' },
        { name: 'supplier_id', type: 'auto' },
        { name: 'model', type: 'auto' },
        { name: 'first_value', type: 'auto' },
        { name: 'total_delivery', type: 'auto' },
        { name: 'total_qty', type: 'auto' },
        { name: 'tools', type: 'auto' },

    ]

});
