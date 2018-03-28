Ext.define('tool_control_system.model.Data', {
    extend: 'Ext.data.Model',

    fields: [
        { name: 'id', type: 'int' }, //base

        /*{ 
            name: 'no', 
            type: 'auto' 
        },*/

        { 
            name: 'part_no',
            type: 'auto',
            mapping: function(data){
                if (data.part) {
                  return data.part.no;  
                }
            }
        }, //insde part

        { 
            name: 'part_name', 
            type: 'auto',
            mapping: function(data){
                if (data.part) {
                  return data.part.name;  
                }
            } 
        }, // part

        { 
            name: 'tool_no',
            type: 'auto',
            mapping: function(data){
                if (data.tool) {
                  return data.tool.no;  
                }
            }
        }, //tool
        { 
            name: 'tool_name', 
            type: 'auto',
            mapping: function(data){
                if (data.tool) {
                  return data.tool.name;  
                }
            }
        }, //tool

        { 
            name: 'supplier_name',
            type: 'auto',
            mapping: function(data){
                if (data.supplier) {
                  return data.supplier.name;  
                }
            }
        }, //tool

        { 
            name: 'model',
            type: 'auto',
            mapping: function(data){
                if (data.part) {
                  return data.part.model;  
                }
            }
        }, //part

        { 
            name: 'no_of_tooling',
            type: 'auto',
            mapping: function(data){
                if (data.tool) {
                  return data.tool.no_of_tooling;  
                }
            }
        }, //tool
        
        { 
            name: 'cavity',
            type: 'auto'
        }, //toolpart

        {   
            //belum ada 
            name: 'total_delivery', 
            type: 'auto',
            mapping: function(data){
                if (data.part) {
                  return data.part.total_delivery;  
                }
            } 
        }, //pck31.total_delivery + part.first_value
        
        { 
            name: 'total_shoot', 
            type: 'auto',
            mapping: function(data){
                if (data.tool) {
                  return data.tool.total_shoot;  
                }
            } 
        }, //tool //pck31.total_delivery / toolpart.cavity

        { 
            name: 'month1',
            type: 'auto',
            mapping: function(data){
                if (data.forecast) {
                  return data.forecast.month1;  
                }
            } 
        }, //forecast
        { 
            name: 'month2', 
            type: 'auto',
            mapping: function(data){
                if (data.forecast) {
                  return data.forecast.month2;  
                }
            }  
        }, //forecast
        { 
            name: 'month3', 
            type: 'auto',
            mapping: function(data){
                if (data.forecast) {
                  return data.forecast.month3;  
                }
            }  
        }, //forecast
        { 
            name: 'month4', 
            type: 'auto',
            mapping: function(data){
                if (data.forecast) {
                  return data.forecast.month4;  
                }
            }  
        }, //forecast
        { 
            name: 'month5', 
            type: 'auto',
            mapping: function(data){
                if (data.forecast) {
                  return data.forecast.month5;  
                }
            }  
        }, //forecast

        { 
            name: 'total_qty', 
            type: 'auto',
            mapping: function(data){
                if (data.part) {
                  return data.part.total_qty;  
                }
            }  
        }, //pck31.total_delivery + sum(months)

        //belum ada
        { 
            name: 'total_shoot_forecast', 
            type: 'auto' 
        }, // ( pck31.total_delivery + sum(months) ) / toolpart.cavity

        { 
            name: 'guarantee_shoot', 
            type: 'auto',
            mapping: function(data){
                if (data.tool) {
                  return data.tool.guarantee_shoot;  
                }
            }  
        }, // tool

        { 
            name: 'balance_shoot', 
            type: 'auto',
            mapping: function(data){
                if (data.tool) {
                  return data.tool.balance_shoot;  
                }
            }  
        }, //tool (guarantee_shoot - total_shoot)

        //belum ada
        { 
            name: 'guarantee_remains', 
            type: 'auto',
            mapping: function(data){
                if (data.tool) {
                  return data.tool.guarantee_remains;  
                }
            }  
        }, //( (balance_shoot * cavity) / (sum(month)/6) )
        
        //belum ada //atau bisa jadi diambil dari tanggal terakhir isi machine counter
        { 
                name: 'validation_date', 
                type: 'auto' 
        },
        //belum ada
        { 
                name: 'remark', 
                type: 'auto' 
        },        

    ]

});
