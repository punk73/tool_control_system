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
            id: 'forecast_date',
            labelPad: 15,
            labelWidth:40,
            style : {
                'font-color' : 'white !important'
            },
            format: 'Y-m-d',          
            allowBlank: true,
            emptyText:'yyyy-mm-dd',
            value: new Date(),
            fieldLabel:'Tanggal'
        }
    ]
        
});