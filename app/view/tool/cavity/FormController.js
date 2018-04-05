Ext.define('tool_control_system.view.tool.cavity.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tool-cavity-form',

    toolOnChange : function (){
    	viewModel = this.getViewModel();
    	// data = viewModel.getData();
    	element = this.getElementValue();
    	store = this.getViewModel().getStore('tools');
    	id = element.tool_number;
    	model = store.findRecord('id', id );
    	// console.log(model, 'model tool ')
        if (model != null ) {

        	viewModel.setData({
    			tool_name: model.get('name')	
        	})
        }

    },

    partOnChange : function (){
    	viewModel = this.getViewModel();
    	// data = viewModel.getData();
    	element = this.getElementValue();
    	store = this.getViewModel().getStore('parts');
    	id = element.part_number;
    	model = store.findRecord('id', id );
    	// console.log(model, 'model part')
    	if (model != null) {
        	viewModel.setData({
    			part_name: model.get('name')	
        	})
        }   

    },

    onSearch : function (sender, record){
        console.log({sender, record})
    },

    saveOnClick : function (){
    	console.log('saveOnClick')
        param = this.getElementValue();
        components = this.getElement();
        store = this.getViewModel().getParent().getStore('toolparts');
        viewModel = this.getViewModel();
        
        console.log(param)

        newModel = {
            tool_id : param.tool_number,
            part_id : param.part_number,
            cavity  : param.cavity
        }
        console.log(newModel)
        model = new tool_control_system.model.Toolpart(newModel);
        store.add(model);
        store.sync({
            callback : function (batch, option, success){
                console.log(batch, option)
            }
        });
        

        this.cancelOnClick();
    },

    deleteOnClick : function (sender, record){
        grid = Ext.ComponentQuery.query('cavity_list')[0]; //ambil object grid
        if (grid) {
            console.log(grid);
            var sm = grid.getSelectionModel(); //ambil model dari grid tsb, *daily_ouput //contructor   
            var rs = sm.getSelection(); //ambil object modelnya, berupa array
            
            if (!rs.length) {
              Ext.Msg.alert('Info', 'No Record Selected');
              return;
            }
            
            Ext.Msg.confirm('Remove Record', 
              'Are you sure you want to delete?', 
              function (button) {
                if (button == 'yes') {
                  grid.store.remove(rs[0]);
                  grid.store.sync()
                }
            });
        }
    },

    onItemSelected : function (sender, record){
        element = this.getElement();
        element.btn_delete.enable();
    },

    getElementValue : function (){
    	element = this.getElement();
    	return {
    		tool_number: element.tool_number.value,
			tool_name: element.tool_name.value,
			part_number: element.part_number.value,
			part_name: element.part_name.value,
			cavity: element.cavity.value
    	}
    },

    getElement: function(){
    	return {
        	tool_number: Ext.ComponentQuery.query('combobox[name=tool_number]')[0],
        	tool_name: Ext.ComponentQuery.query('textfield[name=tool_name]')[1],
        	part_number: Ext.ComponentQuery.query('combobox[name=part_number]')[0],
        	part_name: Ext.ComponentQuery.query('textfield[name=part_name]')[1],
        	cavity: Ext.ComponentQuery.query('numberfield[name=cavity]')[0],
        	btn_delete: Ext.ComponentQuery.query('button[name=btn_delete]')[2],
        	btn_save: Ext.ComponentQuery.query('button[name=btn_save]')[2]

        }
    },

    cancelOnClick : function (){
    	this.clearValue();
        element = this.getElement();
        element.btn_save.disable();
        element.btn_delete.disable();
        element.tool_number.focus();
    },

    clearValue : function (){
    	// alert('on delete click')
    	var components = this.getElement();
    	components.tool_number.setValue(null);
    	components.tool_name.setValue('');
    	components.part_number.setValue(null);
    	components.part_name.setValue('');
    	components.cavity.setValue(0);

        // tools = this.getViewModel().getParent().getStore('tools'); //list store
        // tools.loadData([], false );
    },

    disableAll: function (){
    	components = this.getElement();
    	// components.no.disable();
    	components.tool_number.disable();
    	components.tool_name.disable();
    	components.part_number.disable();
    	components.part_name.disable();
        components.cavity.disable();
        components.btn_save.disable();
        components.btn_delete.disable();

    },

    enableAll :  function (){
    	components = this.getElement();
    	components.tool_number.enable();
    	components.tool_name.enable();
    	components.part_number.enable();
    	components.part_name.enable();
    	components.cavity.enable();

    }

});
