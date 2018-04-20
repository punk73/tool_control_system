
Ext.define('tool_control_system.view.main.Detail', {
	extend: 'Ext.panel.Panel',

  xtype : 'main_detail',

  layout: 'border',

  autoScroll: true,

  items : [
    {
        title : 'CHART PER DAY',
        xtype : 'daily_output_barchart',
        // bodyPadding : 10,
        region : 'center'
    },{
      title : 'CHART PER MONTH',
      xtype : 'daily_output_barchart_permonth',
      collapsible: true,
      split: true,
      width : '50%',
      region : 'east'
  }]   

});