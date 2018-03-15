Ext.define('tool_control_system.store.parts', {
    extend: 'Ext.data.Store',

    model: 'tool_control_system.model.Part',

    alias: 'store.parts',

    autoLoad: 'true',

    autoSync: true,

    proxy: {
        type: 'rest',

        enablePaging:true,

        url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/parts',
        
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
