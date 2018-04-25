Ext.define('tool_control_system.view.part.FormController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.part-form',

    onSaveClick: function (){
    	param = this.getElementValue();
    	components = this.getElement();
    	store = this.getStore('parts');
        viewModel = this.getViewModel();

        // console.log(param)

        if(viewModel.getData().btn_save.text == 'Save'){
            model = new tool_control_system.model.Part(param);
            store.add(model);
            store.sync();
        }else{
            //coding update
            model = this.getViewModel().getData().model;
            //setup date of first value if date is changes
            model.data.date_of_first_value = this.getElementValue().date_of_first_value;
            // console.log(model);
            
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
            tools = this.getViewModel().getParent().getStore('tools'); //list store
            tools.loadData([], false); //kosongkan dulu
            self = this;
            
            store.load({
                params: {
                    no: part_no
                },
                callback: function (records,operation,success){
                    var model = store.findRecord('no', part_no);
                    // console.log(model.id, tools)
                    if(model != null){
                        //for setup date of first value
                        
                        viewModel.setData({
                            model : model,
                            btn_save: {
                                text: 'Update'
                            }
                        });

                        tools.loadData(model.get('tools'), false); //kosongkan dulu
                        
                        self.enableAll();
                        element.no.disable();
                        element.btn_delete.enable();
                        element.name.focus();
                    }
                    else{
                        if( viewModel.getData().model.no == '' || viewModel.getData().model.no == null ){
                            // console.log(viewModel.getData())
                            Ext.Msg.alert('Info','You need to specify this data' );
                        }else{ //buat baru
                            self.enableAll();
                            // console.log('buat baru')
                            element.name.focus();
                        }
                    }        
                }
            })
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
                first_value: 0,
                supplier_id: null,
            }
    	})

        //to fire event in list controller
        // the first argument is the name of event in another controller
        this.fireEvent('onCancelClicked');

        // console.log(this.getViewModel())
    },

    onDeleteClick: function (editor, edit){
        store = this.getViewModel().getStore('parts');
        part_no = this.getElementValue().no;
        model = store.findRecord('no', part_no);

        if (!model ) {
          Ext.Msg.alert('Info', 'No Record Selected');
          return;
        }

        self = this;
        
        Ext.Msg.confirm('Remove Record', 
          'Are you sure you want to delete?', 
          function (button) {
            if (button == 'yes') {
                store.remove(model);
                store.sync();
                self.clearValue();
                self.disableAll();
                self.onCancelClick();
            }
        });
    },

    onPartNumberEnter: function(){
    },

    getElementValue : function (){
    	
        return {
        	no: Ext.ComponentQuery.query('textfield[name=part_number]')[0].rawValue,
        	name: Ext.ComponentQuery.query('textfield[name=part_name]')[0].rawValue,
        	supplier_id : Ext.ComponentQuery.query('combobox[name=supplier_id]')[0].value,
        	model: Ext.ComponentQuery.query('textfield[name=model]')[0].rawValue,
        	first_value: Ext.ComponentQuery.query('numberfield[name=first_value]')[0].value,
            date_of_first_value : Ext.ComponentQuery.query('datefield[name=date_of_first_value]')[0].rawValue,
        }
    },

    getElement: function(){
    	return {
        	no: Ext.ComponentQuery.query('textfield[name=part_number]')[0],
        	name: Ext.ComponentQuery.query('textfield[name=part_name]')[0],
        	model: Ext.ComponentQuery.query('textfield[name=model]')[0],
        	first_value: Ext.ComponentQuery.query('numberfield[name=first_value]')[0],
            date_of_first_value : Ext.ComponentQuery.query('datefield[name=date_of_first_value]')[0],
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
    	components.first_value.setValue(0);
    	components.supplier.setValue(null);
        components.date_of_first_value.setValue(null);

        tools = this.getViewModel().getParent().getStore('tools'); //list store
        tools.loadData([], false );
    },

    disableAll: function (){
    	components = this.getElement();
    	// components.no.disable();
    	components.name.disable();
    	components.model.disable();
    	components.first_value.disable();
    	components.supplier.disable();
        components.date_of_first_value.disable();
        components.btn_delete.disable();
    },

    enableAll :  function (){
    	components = this.getElement();
    	// components.no.enable();
    	components.name.enable();
    	components.model.enable();
        components.date_of_first_value.enable();
    	components.first_value.enable();
    	components.supplier.enable();	
    }

});
