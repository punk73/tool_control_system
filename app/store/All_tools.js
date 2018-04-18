Ext.define('tool_control_system.store.All_tools', {
    extend: 'Ext.data.Store',

    model: 'tool_control_system.model.Tool',

    alias: 'store.all_tools',

    autoLoad: true,

    // autoSync: true,

    proxy: {
        type: 'rest',

        enablePaging:true,

        extraParams: {
            token : tool_control_system.util.Config.getToken() //
        },

        url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/tools/all',
        
        reader: {
            type: 'json',
            rootProperty: 'data'
        }
    },

    onCreateRecords: function(record, opt, success){
        // console.log({record,opt,  success})
        if (success) {
            Ext.Msg.alert('Success', 'Date Saved!');
        }else{
            var response = opt.error.response.responseText;
            response = JSON.parse(response);
            error = response.error.message;
            Ext.Msg.alert('Error', error );
        }
    }

});
