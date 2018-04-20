
Ext.define('tool_control_system.view.main.Detail', {
	extend: 'Ext.panel.Panel',

  requires :

  xtype : 'main_detail',

  layout: 'border',

  autoScroll: true,

  items : [
    {
        title : 'CHART PER DAY',
        xtype : 'daily_output_barchart',
        // bodyPadding : 10,
        region : 'center'
    }
  ]   

});