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
                return data.no;  
            }
        }, //tool
        { 
            name: 'tool_name', 
            type: 'auto',
            mapping: function(data){
                return data.name;  
                
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
            type: 'auto',
            mapping : function (data){
                if (data.part) {
                    if (data.part.pivot) {
                        return data.part.pivot.cavity;
                    }
                }
            }
        }, //toolpart
        
        { 
            name: 'machine_counter',
            type: 'auto',
            mapping: function(data){
                if (data.tool) {
                  return data.tool.counter;  
                }
            }
        },

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
                    if (data.tool.detail) {
                        //jika tool.detail != null
                        return data.tool.start_value + data.tool.detail.total_shoot
                    }else{

                        return data.tool.start_value;  
                    }
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
            name: 'total_qty', //untuk total qty untill
            type: 'auto',
            mapping: function(data){
                if (data.part) {
                    if (data.forecast) {
                        return (data.part.total_delivery+data.forecast.total);
                    }

                    return data.part.total_delivery
                }
            }  
        }, //pck31.total_delivery + sum(months)

        //belum ada
        { 
            name: 'total_shoot_forecast', 
            type: 'auto',
            mapping : function (data){
                /*if (data.part) {
                    if (data.forecast) {
                        return (data.part.total_delivery+data.forecast.total) / data.cavity ;
                    }

                    return data.part.total_delivery / data.cavity
                }*/

                return data.total_shoot;

            } 
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
                /*var tool = data.tool, part = data.part, forecast = data.forecast;
                if (tool) {
                    if (part) {
                        if (forecast) {
                            return  tool.guarantee_shoot - (part.total_delivery+forecast.total)/data.cavity;
                        }
                    }
                }*/
                return data.balance_shoot;
            }  
        }, //tool (guarantee_shoot - total_shoot)

        //belum ada
        { 
            name: 'guarantee_remains', 
            type: 'auto',
            mapping: function(data){
                /*if (data.tool) {
                  if (data.tool.detail) {
                        return data.detail.guarante_after_forecast
                    }
                }*/
                return data.guarantee_after_forecast;
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
