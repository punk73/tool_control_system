Ext.define('tool_control_system.view.supplier.SupplierController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.supplier-supplier',

    onSyncClick: function (){
    	alert('sync!')
    },

    onSearch : function (component, e){
    	if (e.keyCode == 13) {
    		param = this.getElementValue().code;
    		store = this.getViewModel().getStore('suppliers');
    		viewModel = this.getViewModel();
    		element = this.getElement();

    		/*console.log({
    			param, store, viewModel, element
    		})*/
    		data = {}
    		if (param.code != null && param.code != "" ) {
    			data.code = param.code
    		}

    		if (param.name != null && param.name != "" ) {
    			data.name = param.name
    		}

    		store.loadData([], false);

    		store.load({
    			params: data,
    			callback: function (records, operation, success){
	    			if (success && store.totalCount == 0 ){
						var message = 'Tanggal : '+ param.tanggal+ '<br> shift : ' + param.shift+ '<br> line : ' + param.line_name+ ' <br> ';
						Ext.Msg.alert('Info', message + 'Data Kosong!');
					}   
	    		}
	
	    	})

	    	console.log(store)
    		element.code.setValue('');

     	}
    },



    getElement : function(){
    	return {
        	code: Ext.ComponentQuery.query('textfield[name=search_by_code]')[0],
        	name: Ext.ComponentQuery.query('textfield[name=search_by_name]')[0]
        }
    },

    getElementValue: function (){
    	var element = this.getElement();
    	return {
    		code : element.code.value,
    		name : element.name.value
    	}
    }

});
