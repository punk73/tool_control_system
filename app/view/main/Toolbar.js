Ext.define("tool_control_system.view.main.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    
    xtype : 'main_toolbar',

    frame:true,

    items: [
        {
            xtype:'button',
            // iconAlign : 'top',
            icon : 'resources/sync-icon.png',
            cls: 'btn-sync',
            bind:{
                // iconCls: '{btn_sync.icon}',
                text: '{btn_sync.text}'
            },
            tooltip: 'Click to Sync Data',
            listeners: {
                click: 'onSyncClick'
            }
        },
        {
            xtype: 'datefield',
            // id: 'forecast_date',
            name : 'trans_date',
            labelPad: 15,
            labelWidth:40,
            style : {
                'font-color' : 'white !important'
            },
            format: 'Y-m-d',          
            allowBlank: true,
            emptyText:'yyyy-mm-dd',
            maxValue : new Date(),
            value: new Date(),
            fieldLabel:'Tanggal',
            listeners: {
                change : 'onTransDateChange'
            }
        },
        {
            xtype:'button',
            name : 'btn-danger',
            icon : 'resources/danger.png',
            style : {
                'color' : 'red'
            },
            bind: {
                text : '{notif.danger}'
            },
            tooltip: 'Tool Already Over Guarantee!!',
            listeners: {
                click: 'notifOnClick'
            }
        },{
            xtype:'button',
            name : 'btn-warning',
            icon : 'resources/warning.png',
            style : {
                'color' : 'red'
            },
            bind: {
                text : '{notif.warning}'
            },
            tooltip: 'Tool Over Guarantee Within 5 months!',
            listeners: {
                click: 'notifOnClick'
            }
        },{
            xtype:'button',
            name : 'btn-info',
            icon : 'resources/info.png',
            style : {
                'color' : 'red'
            },
            bind: {
                text : '{notif.safe}'
            },
            tooltip: 'SAVE ~',
            listeners: {
                click: 'notifOnClick'
            }
        },{
            xtype:'button',
            name : 'btn-reload-notif',
            bind:{
                icon : '{icons.sync}',
            },
            // text : 'Reload',
            tooltip: 'Reload Notification',
            listeners: {
                click: 'reloadNotifOnClick'
            }
        }
    ]
        
});