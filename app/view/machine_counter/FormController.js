Ext.define('tool_control_system.view.machine_counter.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.machine_counter-form',

    onSaveClick: function (){
    	param = this.getElementValue();
    	components = this.getElement();
    	store = this.getViewModel().getStore('machines');
        viewModel = this.getViewModel();
            
        tool = viewModel.getData().tool;
        param.tool_id = tool.id;

        console.log({
            param,
            components
        });


        model = new tool_control_system.model.Tool(param);
        store.add(model);
        store.sync({
            callback : function (batch, option, success){
                // console.log(batch, option)
            }
        });

    	this.onCancelClick();

    },

    onSearch : function(component, e){

    	if (e.keyCode == 13) {
    		no = this.getElementValue().no;
    		store = this.getViewModel().getStore('tools');
    		viewModel = this.getViewModel();
    		element = this.getElement();
            self = this;

            // console.log(this.getElementValue())


            store.load({
                params: {
                    no: no,
                    supplier_id : tool_control_system.util.Config.getSupplierId()
                },
                callback: function(records,operation,success){
                    var model = store.findRecord('no', no);
                    // console.log(model)
                    if(model != null){
                        viewModel.setData({
                          tool : model.data
                        })

                        // console.log(viewModel.getData())
                        
                        element.no.disable();

                        
                        element.tanggal.enable();
                        element.machine_counter.enable();
                        element.note.enable();
                        element.btn_save.enable();

                        element.machine_counter.focus();
                    }else{
                        const message = 'Tool Number not found!<br>please recheck for typo or kindly contact JEIN for support';
                        Ext.Msg.alert('Info', message );
                        element.no.focus();
                        return;
                    }
                }
            })
            
    	}
    },

    onCancelClick: function (){
    	this.clearValue();
    	this.disableAll();
        this.getElement().no.focus()
        this.getViewModel().setData({
            model: {
	        	id : null,
	        	tanggal : new Date(),
	        	machine_counter : 0,
	        	note : null
	        }
        })
    },

    onDeleteClick: function (editor, edit){
        store = this.getViewModel().getStore('tools');
        no = this.getElementValue().no;
        model = store.findRecord('no', no);
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
                //this.clearValue();
                //this.disableAll();
                self.onCancelClick()
            }
        });
    },

    onPartNumberEnter: function(){

    },

    getElementValue : function (){
    	var element = this.getElement();
        return {
            no : element.no.value,
            name : element.name.value,
            no_of_tooling : element.no_of_tooling.value,
            tanggal: element.tanggal.rawValue,
            counter : element.machine_counter.value, //isinya sama kaya total shoot
            note : element.note.value
        }
    },

    getElement: function(){
    	return {
        	no: Ext.ComponentQuery.query('textfield[name=tool_number_machine_counter]')[0],
        	name: Ext.ComponentQuery.query('textfield[name=tool_name_machine_counter]')[0],
        	no_of_tooling: Ext.ComponentQuery.query('textfield[name=number_of_tooling_machine_counter]')[0],
        	tanggal: Ext.ComponentQuery.query('datefield[name=tanggal]')[0],
        	machine_counter: Ext.ComponentQuery.query('numberfield[name=machine_counter]')[0],
        	note: Ext.ComponentQuery.query('textarea[name=note]')[0],
        	btn_save: Ext.ComponentQuery.query('button[name=btn_save_machine_counter]')[0]

        	
        }
    },

    clearValue : function (){
    	// alert('on delete click')
    	var components = this.getElement();
    	components.no.setValue(null);
    	components.name.setValue(null);
    	components.no_of_tooling.setValue(null);
    	components.tanggal.setValue(new Date());
    	components.machine_counter.setValue(0);
    	components.note.setValue(null);
    },

    disableAll: function (){
    	components = this.getElement();
    	components.no.enable(); //hanya no yang hidup
    	components.name.disable();
    	components.no_of_tooling.disable();
    	components.tanggal.disable();
    	components.machine_counter.disable();
    	components.note.disable();
    	components.btn_save.disable();
        
    },

    enableAll :  function (){
    	components = this.getElement();
    	components.name.enable();
    	components.no_of_tooling.enable();
    	components.tanggal.enable();
    	components.machine_counter.enable();
    	components.note.enable();
    	components.btn_save.enable();	
    }


});
