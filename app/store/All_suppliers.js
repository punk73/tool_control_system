Ext.define('tool_control_system.store.All_suppliers', {
    extend: 'Ext.data.Store',

    model: 'tool_control_system.model.Supplier',

    alias: 'store.all_suppliers',

    autoLoad: true,

    // autoSync: true,

    proxy: {
        type: 'rest',

        extraParams: {
            token : tool_control_system.util.Config.getToken() //
        },

        url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/suppliers/all',
        
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
