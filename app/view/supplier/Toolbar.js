Ext.define("tool_control_system.view.supplier.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    // alias : 'widget.supplier_toolbar',
    
    xtype : 'supplier_toolbar',

    margin : '5 0 5 0',

    style: {
        'background-color': '#5FA2DD',
        'border-style' : 'solid',
        'border-width' : '5px'       
    },

    // frame:true,

    items: [
        {
            xtype:'button',
            iconCls: 'fa-refresh',
            text: 'Sync'
        }      
    ]
        
});