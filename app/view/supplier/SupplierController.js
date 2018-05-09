Ext.define('tool_control_system.view.supplier.SupplierController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.supplier-supplier',

    onSyncClick: function (){
    	Ext.Ajax.request({
            url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/suppliers/sync',
            method: 'POST',
            headers:{
                Authorization : 'Bearer ' + tool_control_system.util.Config.getToken()
            },
            success: function (response, opts){
                alert('Sync!')        
            },
            failure: function(response, opts) {
                alert('Sync Failed!!')
            }
        });
        
    },

    onSearch : function (component, e){
    	if (e.keyCode == 13) {
    		param = this.getElementValue();
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

            console.log(data)

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
