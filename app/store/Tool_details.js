Ext.define('tool_control_system.store.Tool_details', {
    extend: 'Ext.data.Store',

    /*requires:[
        'tool_control_system.model.Tool_detail'
    ],*/

    model: 'tool_control_system.model.Tool_detail',

    alias: 'store.tool_details',

    autoLoad: true,

    // autoSync: true,

    proxy: {
        type: 'rest',

        enablePaging:true,

        url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/tool_details',
        
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
