Ext.define('tool_control_system.view.part.list.AllController', {
    extend: 'Ext.app.ViewController',
    
    alias: 'controller.part-list-all',
    

    onSearch : function (component, e){
    	if (e.keyCode == 13) {
    		param = this.getElementValue();
    		store = this.getViewModel().getStore('parts');
    		viewModel = this.getViewModel();
    		element = this.getElement();

    		data = {}

			for (var key in param) {
			    // skip loop if the property is from prototype
			    if (!param.hasOwnProperty(key)) continue;

			    var obj = param[key];
			    for (var prop in obj) {
			        // skip loop if the property is from prototype
			        if(!obj.hasOwnProperty(prop)) continue;

			        // your code
			        data[key] = param[key];
			        
			    }
			}

    		// console.log(data)
    		// return false;

    		store.loadData([], false);
    		store.load({
    			params: data,
    			callback: function (records, operation, success){
	    			if (success && store.totalCount == 0 ){
						var message = 'Code : '+ param.code+ '<br> Name : ' + param.name+ '<br>';
						Ext.Msg.alert('Info', message + 'Data Kosong!');
					}   
	    		}
	
	    	})

    		
     	}
    },

    getElement : function(){
    	return {
        	no: Ext.ComponentQuery.query('textfield[name=search_part_by_no]')[0],
        	name: Ext.ComponentQuery.query('textfield[name=search_part_by_name]')[0],
        	supplier_name: Ext.ComponentQuery.query('textfield[name=search_part_by_supplier]')[0],
        	model: Ext.ComponentQuery.query('textfield[name=search_part_by_model]')[0],
        	first_value: Ext.ComponentQuery.query('textfield[name=search_part_by_first_value]')[0],
        	date_of_first_value: Ext.ComponentQuery.query('textfield[name=search_part_by_date_of_first_value]')[0]

        }
    },

    getElementValue: function (){
    	var element = this.getElement();
    	return {
    		no : element.no.value,
    		name : element.name.value,
    		supplier_name : element.supplier_name.value,
    		model : element.model.value,
    		first_value : element.first_value.value,
    		date_of_first_value : element.date_of_first_value.value,

    	}
    },

    onSelectItem: function (sender, item){
        var data = item.data;
        // console.log(data)
        var viewModel = this.getViewModel();
        var store = viewModel.getStore('part_details');
        store.loadData(data.details, false);
        store.load({
            params: {
                part_id: data.id
            },
            callback: function (){
                
            }
        })
        
    },

    showSemiPart :  function (grid, rowIndex, colIndex){
        var model = grid.getStore().getAt(rowIndex);
        var data = model.data;
        var self = this;
        console.log({self})
        this.fireEvent('onInit');
        this.fireEvent('onCancelClicked')

        model.load({
            params: {
                id : model.id
            },
            success: function(part){

                //to fire event in list controller
                // the first argument is the name of event in another controller
                self.fireEvent('changeParamPartRelation');

                Ext.create('Ext.window.Window', {
                    // title: 'CHART',
                    height: 600,
                    width: 1100,
                    maximizable : true,
                    layout: 'fit',
                    modal :true,
                    items: [{
                        xtype : 'part_part_relation_List',

                    }]
                }).show();
            }
        })

        
    }

});
