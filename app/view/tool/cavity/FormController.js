Ext.define('tool_control_system.view.tool.cavity.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tool-cavity-form',

    suppliersOnChange : function (){
        elementValue = this.getElementValue();
        tools = this.getViewModel().getStore('tools');
        parts = this.getViewModel().getStore('parts');
        supplier_id = elementValue.supplier_id;
        element = this.getElement();
        element.tool_number.enable();
        element.part_number.enable();

        params = {
            supplier_id : supplier_id
        }

        tools.load({
            params : params,
            callback : function (a,b,c){
                console.log({a,b,c})
            }
        })

        parts.load({
            params : params,
            callback : function (a,b,c){
                console.log({a,b,c})
            }
        })
    },

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

        this.getElement().cavity.enable();
        this.getElement().is_independent.enable();   

    },

    onSearch : function (component, e){
        if (e.keyCode == 13) {
            store = this.getView().up('toolview').getViewModel().getStore('toolparts');
            elementValue = this.getElementValue();
            value = {
                tool_number : elementValue.search_by_tool,
                part_number : elementValue.search_by_part,
                cavity      : elementValue.search_by_cavity
            }


            // console.log(store)
            store.load({
                params:  value,
                success : function(a,b){
                    console.log({a,b})
                }
            })
        }
    },

    saveOnClick : function (){
    	// console.log('saveOnClick')
        param = this.getElementValue();
        components = this.getElement();
        store = this.getViewModel().getParent().getStore('toolparts');
        viewModel = this.getViewModel();
        
        if (param.is_independent) {
            is_independent = 1;
        }else{
            is_independent = 0;
        }

        newModel = {
            tool_id : param.tool_number,
            part_id : param.part_number,
            cavity  : param.cavity,
            is_independent : is_independent
        }

        // console.log({param, newModel})
        
        // return false;

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
            // console.log(grid);
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
    		supplier_id: element.supplier.value,
            tool_number: element.tool_number.value,
			tool_name: element.tool_name.value,
			part_number: element.part_number.value,
			part_name: element.part_name.value,
			cavity: element.cavity.value,
            is_independent : element.is_independent.value,

            search_by_tool : element.search_by_tool.value,
            search_by_part : element.search_by_part.value,
            search_by_cavity : element.search_by_cavity.value,


    	}
    },

    getElement: function(){
    	return {
            supplier: Ext.ComponentQuery.query('combobox[name=supplier]')[0],
            tool_number: Ext.ComponentQuery.query('combobox[name=tool_number]')[0],
        	tool_name: Ext.ComponentQuery.query('textfield[name=tool_name]')[1],
        	part_number: Ext.ComponentQuery.query('combobox[name=part_number]')[0],
        	part_name: Ext.ComponentQuery.query('textfield[name=part_name]')[1],
        	cavity: Ext.ComponentQuery.query('numberfield[name=cavity]')[0],
            is_independent: Ext.ComponentQuery.query('checkbox[name=is_independent]')[0],

            search_by_tool: Ext.ComponentQuery.query('textfield[name=search_by_tool]')[0],
            search_by_part: Ext.ComponentQuery.query('textfield[name=search_by_part]')[0],
            search_by_cavity: Ext.ComponentQuery.query('textfield[name=search_by_cavity]')[0],

            

        	btn_delete: Ext.ComponentQuery.query('button[name=btn_delete]')[2],
        	btn_save: Ext.ComponentQuery.query('button[name=btn_save]')[2]

        }
    },

    cancelOnClick : function (){
    	this.clearValue();
        element = this.getElement();
        element.tool_number.disable();
        element.part_number.disable();
        element.cavity.disable();

        element.is_independent.checked = false;
        element.is_independent.disable();

        element.btn_save.disable();
        element.btn_delete.disable();

        element.supplier.focus();
    },

    clearValue : function (){
    	// alert('on delete click')
    	var components = this.getElement();
        components.supplier.setValue(null);
        components.tool_number.setValue(null);
    	components.tool_name.setValue('');
    	components.part_number.setValue(null);
    	components.part_name.setValue('');
    	components.cavity.setValue(1);
        components.is_independent.checked = false;

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
        components.is_independent.enable();


    }

});
