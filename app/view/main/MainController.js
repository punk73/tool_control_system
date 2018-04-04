/**
 * This class is the controller for the main view for the application. It is specified as
 * the "controller" of the Main view class.
 *
 * TODO - Replace this content of this view to suite the needs of your application.
 */
Ext.define('tool_control_system.view.main.MainController', {
    extend: 'Ext.app.ViewController',

    alias: 'controller.main',

    onItemSelected: function (sender, record) {
        Ext.Msg.confirm('Confirm', 'Are you sure?', 'onConfirm', this);
    },

    onConfirm: function (choice) {
        if (choice === 'yes') {
            //
        }
    },

    onRighClick : function (record, item, index, e, eOpts){
        console.log({
            record, item, index, e, eOpts
        })

        var xy = eOpts.getXY();                         
        new Ext.menu.Menu({
            items : [{
                text : 'Add'
            }, {
                text : 'Add'
            }]
        }).showAt(xy) 
    },

    onSyncClick :  function (){
        console.log('SYNC!!');
        store = this.getViewModel().getStore('datas');
        this.clearParam();
        
        store.loadData([], false );
        store.load();
    },

    onSearch : function (component, e){
        if (e.keyCode == 13) {
            params = this.getElementValue();
            store = this.getViewModel().getStore('datas');
            
            store.loadData([], false);
            store.load({
                params: params,
                callback: function (records, operation, success){
                    if (success && store.totalCount == 0 ){
                        var message = '';
                        Ext.Msg.alert('Info', message + 'Data Kosong!');
                    }   
                }
    
            })

        }

    },

    getElementValue : function (){
        elements = this.getSearchElement();
        result = {}

        for (var key in elements) {
            // skip loop if the property is from prototype
            if (!elements.hasOwnProperty(key)) continue;
            if (elements[key].value != '') {
                result[key] = elements[key].value; 
            }                
        }

        return result;            
    },

    clearParam : function (){
        elements = this.getSearchElement();
        for (var key in elements) {
            // skip loop if the property is from prototype
            if (!elements.hasOwnProperty(key)) continue;
            result[key] = elements[key].setValue(''); 
        }            
    },

    getSearchElement : function (){
        return {
            part_no: Ext.ComponentQuery.query('textfield[name=search_by_part_no]')[0],
            tool_no: Ext.ComponentQuery.query('textfield[name=search_by_tool_no]')[0],
            tool_name: Ext.ComponentQuery.query('textfield[name=search_by_tool_name]')[0],
            supplier_name: Ext.ComponentQuery.query('textfield[name=search_by_supplier_name]')[0],
            model: Ext.ComponentQuery.query('textfield[name=search_by_model]')[0],
            no_of_tooling: Ext.ComponentQuery.query('textfield[name=search_by_no_of_tooling]')[0],
            cavity: Ext.ComponentQuery.query('textfield[name=search_by_cavity]')[0],
            
        }
    }



});
