Ext.define('tool_control_system.view.tool.cavity.FormController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.tool-cavity-form',

    suppliersOnChange : function (){
        self = this;

        setTimeout(function() {
            elementValue = self.getElementValue();
            tools = self.getViewModel().getStore('tools');
            parts = self.getViewModel().getStore('parts');
            supplier_id = elementValue.supplier_id;
            element = self.getElement();
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
        }, 100);
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
            // store = this.getView().up('toolview').getViewModel().getStore('toolparts');
            store = this.getViewModel().getStore('toolparts')
            elementValue = this.getElementValue();
            value = {}
            
            if (elementValue.search_by_tool!='') {
                value.tool_number = elementValue.search_by_tool
            }
            
            if (elementValue.search_by_part!='') {
                value.part_number = elementValue.search_by_part
            }

            if (elementValue.search_by_cavity!='') {
                value.cavity      = elementValue.search_by_cavity
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

    onSearchInModal : function (component, e){
        if (e.keyCode == 13) {
            // store = this.getView().up('toolview').getViewModel().getStore('toolparts');
            store = this.getViewModel().getStore('toolparts')
            
            value = {}
            
            tool_number = Ext.ComponentQuery.query('textfield[name=search_by_tool_modal]')[0]
            part_number = Ext.ComponentQuery.query('textfield[name=search_by_part_modal]')[0]
            cavity = Ext.ComponentQuery.query('textfield[name=search_by_cavity_modal]')[0]
            supplier_name = Ext.ComponentQuery.query('textfield[name=search_by_supplier_name_modal]')[0]
            

            // return;

            if (tool_number.value !='') {
                value.tool_number = tool_number.value 
            }
            
            if (part_number.value !='') {
                value.part_number = part_number.value 
            }

            if (cavity.value !='') {
                value.cavity      = cavity.value 
            }    

            if (cavity.supplier_name !='') {
                value.supplier_name  = supplier_name.value 
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
        //reload toolpart store
        // return;

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

        model = new tool_control_system.model.Toolpart(newModel);
        store.add(model);
        store.sync({
            callback : function (batch, option, success){
                console.log(batch, option)
            }
        });

        //reload yng blm berhasil
        this.reloadToolpart();

        this.cancelOnClick();
    },

    reloadToolpart : function (){
        //reload toolpart yg disini
        toolpart = this.getViewModel().getStore('toolparts');
        toolpart.load()
        store = this.getViewModel().getParent().getStore('toolparts');
        store.load()

        console.log('reloadToolpart')
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
    },

    onEditRow : function (){
        console.log('')
    },

    onDeleteRow : function (grid, rowIndex, colIndex){
        var rec = grid.getStore().getAt(rowIndex);

        Ext.Msg.confirm('Remove Record', 
          'Are you sure you want to delete?', 
          function (button) {
            if (button == 'yes') {
              grid.store.remove(rec);
              grid.store.sync()
            }
        });
    },

    checkedOnChange :  function (grid, rowIndex, checked, model){
        if (checked) {
            result = 1;
        }else{
            result = 0;
        }

        model.set({
            is_independent: result
        })

        model.store.sync() //tinggal backend nya belum

        console.log({
            grid, rowIndex, checked, model
        })
    },

    showGrid: function (){

        //make windows
        //make a new windows for showing details;
        if (!modal) {
            var modal = Ext.create('Ext.window.Window', {
                // title: 'CHART',
                height: 600,
                width: 1100,
                maximizable : true,
                layout: 'fit',
                modal :true,

                items: [{
                    xtype : 'cavity_list',
                    
                    bbar : [{
                        xtype: 'pagingtoolbar',
                        pageSize: 50,
                        bind : {
                            store : '{toolparts}'
                        },        
                        emptyMsg: 'Sorry, No Records Are Available At The Moment.',   
                        displayInfo: true,
                        items:[{
                            bind : {
                                icon : '{icons.download}'
                            },
                            tooltip: 'download data',
                            xtype:'button',
                            handler: 'onDownload'
                        }]
                    }],

                    plugins: [{
                        ptype: 'rowediting',
                        clicksToEdit: 2,
                        pluginId: 'RowEditing',
                        // autoUpdate : true
                        listeners: {
                            cancelEdit: function(rowEditing, context) {
                                // Canceling editing of a locally added, unsaved record: remove it
                                if (context.record.phantom) {
                                    var store = Ext.data.StoreManager.lookup('Daily_outputs');
                                    store.remove(context.record);
                                }
                                console.log({
                                    rowEditing, context
                                })
                                console.log('cancelEdit')
                            },
                            edit:  function (editor, e){
                                console.log({
                                    editor, e
                                })

                                // e.record.commit();
                                e.record.store.sync();
                            }
                        }
                    }],

                    columns: [
                        {   
                            text : 'No',
                            xtype: 'rownumberer'
                        },

                        { 
                            text: 'Supplier Name',  
                            dataIndex: 'supplier_name', 
                            enableTextSelection  : true,
                            flex : 1,
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'stretch'
                            },
                            items : [{
                                xtype:'textfield',
                                name: 'search_by_supplier_name_modal',
                                margin : 3,
                                flex: 2,
                                emptyText : 'search',
                                tooltip :'Search By Supplier',
                                enableKeyEvents: true,
                                listeners: {
                                    keyup: 'onSearchInModal'
                                }
                            }] 
                        },


                        { 
                            text: 'Tool No',  
                            dataIndex: 'tool', 
                            enableTextSelection  : true,
                            flex : 1,
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'stretch'
                            },
                            items : [{
                                xtype:'textfield',
                                name: 'search_by_tool_modal',
                                margin : 3,
                                flex: 2,
                                emptyText : 'search',
                                enableKeyEvents: true,
                                listeners: {
                                    keyup: 'onSearchInModal'
                                }
                            }] 
                        },

                        { 
                            text: 'Part No',
                            dataIndex: 'part',
                            flex : 1,
                            enableTextSelection  : true,

                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'stretch'
                            },
                            items : [{
                                xtype:'textfield',
                                name: 'search_by_part_modal',
                                flex: 2,
                                margin : 3,
                                emptyText : 'search',
                                enableKeyEvents: true,
                                listeners: {
                                    keyup: 'onSearchInModal'
                                }
                            }]  
                        },

                        { 
                            text: 'Cavity', 
                            dataIndex: 'cavity', 
                            enableTextSelection  : true,
                            flex : 1,
                            layout: {
                                type: 'vbox',
                                pack: 'center',
                                align: 'stretch'
                            },
                            editor : 'textfield',
                            items : [{
                                xtype:'textfield',
                                name: 'search_by_cavity_modal',
                                margin : 3,
                                flex: 1,
                                emptyText : 'search',
                                enableKeyEvents: true,
                                listeners: {
                                    keyup: 'onSearchInModal'
                                }
                            }]  
                        },
                        
                        {
                            xtype : 'checkcolumn',
                            text : 'Is Suffix<br>Number',
                            dataIndex : 'is_independent',
                            flex : 1,
                            listeners : {
                                checkchange : 'checkedOnChange'
                            }
                            
                        },

                        {
                            align: 'center',
                            width: 50,
                            xtype: 'actioncolumn',
                            items: [
                               {
                                  xtype: 'button',
                                  iconCls: 'x-fa fa-remove',
                                  tooltip: 'Delete',
                                  scale: 'small',
                                  handler: 'onDeleteRow',
                                  margin: 3
                               }
                            ]
                        }
                    ],
                }]
            });
        }
        
        modal.show();   
    },

    onDownload (){
        console.log('onDownload')
        self = this;
        token = '?token='+ tool_control_system.util.Config.getToken();
        url = 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/toolparts/download' + token

        window.location = url
    },

});
