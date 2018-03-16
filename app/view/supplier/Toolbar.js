Ext.define("tool_control_system.view.supplier.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    // alias : 'widget.supplier_toolbar',
    
    xtype : 'supplier_toolbar',

    margin : '5 0 5 0',

    style: {
        'background-color': '#5FA2DD'        
    },

    items: [
        {
            xtype:'button',
            iconCls: 'fa-refresh',
            text: 'Sync'
        }      
    ]
        
});