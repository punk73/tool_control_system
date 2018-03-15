Ext.define('tool_control_system.store.Suppliers', {
    extend: 'Ext.data.Store',

    model: 'tool_control_system.model.Supplier',

    alias: 'store.suppliers',

    autoLoad: true,

    autoSync: true,

    proxy: {
        type: 'rest',

        enablePaging:true,

        url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/suppliers',
        
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
