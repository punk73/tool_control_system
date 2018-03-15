Ext.define("tool_control_system.view.supplier.Toolbar", {
    extend: 'Ext.toolbar.Toolbar',
    // alias : 'widget.supplier_toolbar',
    
    xtype : 'supplier_toolbar',

    margin : '5 0 5 0',

    style: {
        'background-color': '#b0b7b6'        
    },

    items: [
        {
            xtype:'button',
            iconCls: 'fa-refresh',
            text: 'Sync'
        }      
    ]
        
});