
Ext.define('tool_control_system.view.main.Detail', {
	extend: 'Ext.panel.Panel',

  requires : [
    'tool_control_system.view.tool.Form'
  ],

  xtype : 'main_detail',

  layout: 'border',

  autoScroll: true,

  items : [
    {
      xtype : 'form',
      region: 'west',
      width : '30%',
      collapsible: true,
      split: {
          size: 10
      },

      autoScroll: true,
      /*override properties*/
      title: 'Tool Data',
      //override margin
      margin : '2 0 2 2',

      bodyPadding: 10,
    
      defaults: {
          anchor: '100%',
          labelWidth: 100
      },

      items : [
        {
            xtype: 'textfield',
            name: 'tool_number',
            fieldLabel: 'Tool Number',
            bind:{
                value: '{model.no}'
            },
        },{
            xtype: 'textfield',
            name: 'tool_name',
            fieldLabel: 'Tool Name',
            emptyText: 'Tool Name',
            bind: {
                value: '{model.name}'
            },
            // allowBlank: false,
            // disabled:  true
        },{
            xtype: 'textfield',
            name: 'number_of_tooling',
            fieldLabel: 'Number Of Tooling',
            emptyText: 'Number of Tooling',
            bind: {
                value: '{model.no_of_tooling}'
            },
            // allowBlank: false,
            // disabled:  true
        },{
            xtype: 'numberfield',
            name: 'total_shoot',
            fieldLabel: 'First Total Shoot',
            bind: {
                value: '{model.start_value}'
            },
            minValue: 0,
            autoStripChars: true,
            // allowBlank: false,
            // disabled:  true
        },{
            xtype: 'numberfield',
            name: 'guarantee_shoot',
            fieldLabel: 'Guarantee Shoot',
            minValue: 0,
            autoStripChars: true,
            bind: {
                value: '{model.guarantee_shoot}'
            },
            minValue: 0,
            // allowBlank: false,
            // disabled:  true
        },{
            xtype: 'datefield',
            name: 'delivery_date',
            fieldLabel: 'Delivery Date',
            bind: {
                value: '{model.delivery_date}'
            },
            format: 'Y-m-d',
            emptyText:'yyyy-mm-dd',
            // disabled:  true
        },{
            xtype: 'datefield',
            name: 'start_value_date',
            fieldLabel: 'First Total Shoot Date',
            bind: {
                value: '{model.start_value_date}'
            },
            format: 'Y-m-d',
            emptyText:'yyyy-mm-dd',
            // disabled:  true
        },{
            xtype: 'combobox',
            name: 'supplier_id',
            emptyText: 'Supplier',
            store: {
                type:'all_suppliers'
            },
            displayField:'name',
            bind: {
                value: '{model.supplier_id}'
            },
            valueField:'id',
            queryMode: 'local', 
            fieldLabel: 'Supplier',
            allowBlank: false,
            // disabled:  true
        },{
          xtype :'grid',
          viewConfig  : {
            stripeRows          : true,
            enableTextSelection : true
          },
          frame: true,

          emptyText: 'No Data',

          height : 100,
          
          style : {
            'font-size' : '8px',
            'border-color': '#D0D0D0'
          },

          bind : {
            store : '{tool_details}',
          },

          columns :[
            { text: 'ID',  dataIndex: 'id', width: 50 },
            { text: 'Total Shoot',  dataIndex: 'total_shoot' },
            { text: 'Guarantee After Forecast',  dataIndex: 'guarantee_after_forecast' },
            { text: 'Balance Shoot',  dataIndex: 'balance_shoot' },
            { text: 'Transaction Date',  dataIndex: 'trans_date' }
          ]
        }
      ],
      //override the buttons;
      buttons:[]
    },

    {
      xtype :'panel',
      layout: 'border',
      region : 'center',
      items : [
        {
          // xtype : 'part_part_relation_form', // ini nanti diadain di tombol;
          xtype : 'part_list_parts',
          region: 'center',
          collapsible: true,
          split: {
              size: 10
          },
          // width : '40%',
          /*override properties*/
          title : 'Related Part',
        },{
          xtype : 'part_list_part_details',
          region: 'south',
          collapsible: true,
          margin :'2 0 2 0',
          split: {
              size: 10
          },
          height : '40%',

          /*override properties*/
          title: 'Part Detail'
        }
      ]
    },
    
    {
      title : 'Forecast & Pck31 Data',
      xtype :'panel',
      layout: 'border',
      region : 'east',
      width : '30%',
      collapsible: true,
      split: {
          size: 10
      },
      margin: 2,
      items : [
        {
            // xtype : 'part_part_relation_form', // ini nanti diadain di tombol;
          xtype : 'form',

          region: 'north',

          collapsible: true,

          split: {
              size: 10
          },

          // properties
          title: 'Cavity Data',
          
          margin: 2,

          height: '25%',

          bodyPadding: '5 5 0',
          // width: 600,

          fieldDefaults: {
              labelAlign: 'top',
              msgTarget: 'side'
          },

          defaults: {
              border: false,
              xtype: 'panel',
              flex: 1,
              layout: 'anchor'
          },

          layout: 'hbox',
          
          items : [ 
            {
                xtype: 'textfield',
                fieldLabel: 'Cavity',
                anchor: '-5',
                margin : '0 7 0 0',
                bind: {
                  value : '{toolpart.cavity}'
                }
            },
            /*This still not working yet!!!!*/
            /*already try using grid and checkcolumn xtype, but cannot specify the store */
            {
                xtype:'checkbox',
                fieldLabel: 'Is Suffix Number',
                anchor: '100%',
                bind: {
                  value : '{toolpart.is_independent}'
                },
                uncheckedValue : 0
            }

          ],

          /*initItems: function(){
            console.log('hadsf')
          }*/
        },
        {
          // xtype : 'part_part_relation_form', // ini nanti diadain di tombol;
          xtype : 'form',
          region: 'center',
          // collapsible: true,
          // split: {
          //     size: 10
          // },
          title : 'Forecast Data',
          autoScroll :true,
          bodyPadding: 10,
          margin :'2 0 0 0',
          items : [
            {
              xtype: 'textfield',
              fieldLabel: 'Trans Date',
              emptyText : 'Data Empty',
              bind:{
                  value: '{forecast.trans_date}'
              }
            },{
              xtype: 'textfield',
              fieldLabel: 'Month 1st',
              emptyText : 'Data Empty',
              bind:{
                  value: '{forecast.month1}'
              }
            },{
              xtype: 'textfield',
              fieldLabel: 'Month 2nd',
              emptyText : 'Data Empty',
              bind:{
                  value: '{forecast.month2}'
              }
            },{
              xtype: 'textfield',
              fieldLabel: 'Month 3rd',
              emptyText : 'Data Empty',
              bind:{
                  value: '{forecast.month3}'
              }
            },{
              xtype: 'textfield',
              fieldLabel: 'Month 4th',
              emptyText : 'Data Empty',
              bind:{
                  value: '{forecast.month4}'
              }
            },{
              xtype: 'textfield',
              fieldLabel: 'Month 5th',
              emptyText : 'Data Empty',
              bind:{
                  value: '{forecast.month5}'
              }
            },{
              xtype: 'textfield',
              fieldLabel: 'Month 6th',
              emptyText : 'Data Empty',
              bind:{
                  value: '{forecast.month6}'
              }
            }
          ]
        }, {
          // xtype : 'part_part_relation_form', // ini nanti diadain di tombol;
          xtype : 'form',
          region: 'south',
          collapsible: true,
          split: {
              size: 10
          },
          title : 'Pck31 Data',
          autoScroll :true,
          bodyPadding: 10,
          margin :'2 0 2 0',
          items : [
            {
              xtype: 'textfield',
              fieldLabel: 'Month',
              emptyText : 'Data Empty',
              bind:{
                  value: '{pck31.month}'
              }
            },{
              xtype: 'textfield',
              fieldLabel: 'Total Pck31',
              emptyText : 'Data Empty',
              bind:{
                  value: '{pck31.total_qty}'
              }
            }
          ]
        }
      ]
    },
    
  ]     

});