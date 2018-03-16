Ext.define('tool_control_system.view.part.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.part-form',

    onSaveClick: function (){
    	param = this.getElementValue();
    	components = this.getElement();
    	store = this.getStore('parts');
    	model = new tool_control_system.model.Part(param);

    	store.add(model);
    	store.sync();

    	this.onCancelClick();

    },

    onSearch : function(component, e){

    	if (e.keyCode == 13) {
    		part_no = this.getElementValue().no;
    		store = this.getStore('parts');
    		viewModel = this.getViewModel();
    		element = this.getElement();

    		let model = store.findRecord('no', part_no);
    		if(model != null){
    			//isi dengan specific model
    			viewModel.setData({
			        model : model,
			        btn_save: {
			        	text: 'Update'
			        }
			    })

                console.log(model)

			    this.enableAll();
			    element.name.focus();

    		}
    		else{
    			if( viewModel.getData().model.no == '' || viewModel.getData().model.no == null ){
    				Ext.Msg.alert('Info','You need to specify this data' );
    			}else{ //buat baru
	    			this.enableAll();
	    			element.name.focus();
	    		}
    		}

    	}
    },

    onCancelClick: function (){
    	this.clearValue();
    	this.disableAll();
    	this.getElement().no.focus();
    	this.getViewModel().setData({
    		btn_save: {
    			text: 'Save'
    		}
    	})
    },

    onDeleteClick: function (){
    	// this.disableAll();

    },

    onPartNumberEnter: function(){

    },

    getElementValue : function (){
    	
        return {
        	no: Ext.ComponentQuery.query('textfield[name=part_number]')[0].rawValue,
        	name: Ext.ComponentQuery.query('textfield[name=part_name]')[0].rawValue,
        	supplier_id : Ext.ComponentQuery.query('combobox[name=supplier_id]')[0].value,
        	model: Ext.ComponentQuery.query('textfield[name=model]')[0].rawValue,
        	first_value: Ext.ComponentQuery.query('numberfield[name=total_delivery]')[0].value,
        	total_delivery: Ext.ComponentQuery.query('numberfield[name=total_delivery]')[0].value,
        	total_qty: Ext.ComponentQuery.query('numberfield[name=total_delivery]')[0].value
        }
    },

    getElement: function(){
    	return {
        	no: Ext.ComponentQuery.query('textfield[name=part_number]')[0],
        	name: Ext.ComponentQuery.query('textfield[name=part_name]')[0],
        	model: Ext.ComponentQuery.query('textfield[name=model]')[0],
        	total_delivery: Ext.ComponentQuery.query('numberfield[name=total_delivery]')[0],
        	supplier: Ext.ComponentQuery.query('combobox[name=supplier_id]')[0],
        	btn_delete: Ext.ComponentQuery.query('combobox[name=supplier_id]')[0]
        }
    },

    clearValue : function (){
    	// alert('on delete click')
    	var components = this.getElement();
    	components.no.setValue('');
    	components.name.setValue('');
    	components.model.setValue('');
    	components.total_delivery.setValue(0);
    	components.supplier.setValue(null);
    },

    disableAll: function (){
    	components = this.getElement();
    	// components.no.disable();
    	components.name.disable();
    	components.model.disable();
    	components.total_delivery.disable();
    	components.supplier.disable();
    },

    enableAll :  function (){
    	components = this.getElement();
    	// components.no.enable();
    	components.name.enable();
    	components.model.enable();
    	components.total_delivery.enable();
    	components.supplier.enable();	
    }

});
