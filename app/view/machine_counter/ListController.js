Ext.define('tool_control_system.view.machine_counter.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.machine_counter-list',

    onSearch :  function (component, e){
		if (e.keyCode == 13 ) {
    	
			elements = this.getElement();
	    	value = this.getElementValue();
	    	viewModel = this.getViewModel();
	    	store = viewModel.getStore('tools');

	    	console.log({component,e})

	    	// return;

			store.loadData([], false );
			store.load({
				params : value,
				callback : function (records, operations, success){
					// console.log({
					// 	records, operations, success
					// })
				}
			})
		
		}    	
    },

    getElement(){
    	return {
    		tool_no : Ext.ComponentQuery.query('textfield[name=search_by_tool_no_machine]')[0],
    		tool_name: Ext.ComponentQuery.query('textfield[name=search_by_tool_name_machine]')[0]
    	}
    },

    getElementValue (){
    	element = this.getElement();
    	return {
    		no: element.tool_no.value,
    		name : element.tool_name.value
    	}
    }

});
