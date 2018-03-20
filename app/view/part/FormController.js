Ext.define('tool_control_system.view.part.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.part-form',

    onSaveClick: function (){
    	param = this.getElementValue();
    	components = this.getElement();
    	store = this.getStore('parts');
        viewModel = this.getViewModel();

        if(viewModel.getData().btn_save.text == 'Save'){
            model = new tool_control_system.model.Part(param);
            store.add(model);
            store.sync();
        }else{
            //coding update
            model = this.getViewModel().getData().model;
            model.store.sync();
            // console.log(model)
        }

    	this.onCancelClick();

    },

    onSearch : function(component, e){

    	if (e.keyCode == 13) {
    		part_no = this.getElementValue().no;
    		store = this.getViewModel().getStore('parts');
    		viewModel = this.getViewModel();
    		element = this.getElement();
            var model = store.findRecord('no', part_no);
            tools = this.getViewModel().getParent().getStore('tools'); //list store
            
            // console.log(model.id, tools)
    		if(model != null){
                // console.log(model.data , 'edit data')
                //isi dengan specific model
                viewModel.setData({
                    model : model,
                    btn_save: {
                        text: 'Update'
                    }
                })

                tools.load({
                    params: {
                        part_id: model.id
                    }
                })

			    this.enableAll();
                element.no.disable();
                element.btn_delete.enable();
			    element.name.focus();
    		}
    		else{
    			if( viewModel.getData().model.no == '' || viewModel.getData().model.no == null ){
                    // console.log(viewModel.getData())
                    Ext.Msg.alert('Info','You need to specify this data' );
    			}else{ //buat baru
	    			this.enableAll();
                    // console.log('buat baru')
	    			element.name.focus();
	    		}
    		}

    	}
    },

    onCancelClick: function (){
    	this.clearValue();
    	this.disableAll();
        this.getElement().no.enable();
        this.getElement().no.focus();
    	this.getViewModel().setData({
    		btn_save: {
    			text: 'Save'
    		},
            model : {
                no: null,
                name: null,
                model: null,
                total_delivery: 0,
                supplier_id: null,
            }
    	})

        // console.log(this.getViewModel())
    },

    onDeleteClick: function (editor, edit){
        store = this.getViewModel().getStore('parts');
        part_no = this.getElementValue().no;
        model = store.findRecord('no', part_no);
        store.remove(model);
        store.sync();

        this.clearValue();
        this.disableAll();
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
        	btn_delete: Ext.ComponentQuery.query('button[name=btn_delete]')[0]
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

        tools = this.getViewModel().getParent().getStore('tools'); //list store
        tools.loadData([], false );
    },

    disableAll: function (){
    	components = this.getElement();
    	// components.no.disable();
    	components.name.disable();
    	components.model.disable();
    	components.total_delivery.disable();
    	components.supplier.disable();
        components.btn_delete.disable();
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
