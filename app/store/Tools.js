Ext.define('tool_control_system.store.Tools', {
    extend: 'Ext.data.Store',

    model: 'tool_control_system.model.Tool',

    alias: 'store.tools',

    autoLoad: 'true',

    autoSync: true,

    proxy: {
        type: 'rest',

        enablePaging:true,

        url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/tools',
        
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    }
});
