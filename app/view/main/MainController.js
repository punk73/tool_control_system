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
        // untuk membersihkan searh filtering;
        this.clearParam();

        //kirim ajax untuk hapus part_details dan tool_details hari ini;
        
        
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
                if (key == 'trans_date') {
                    result[key] = elements[key].rawValue;
                }
            }                
        }

        return result;            
    },

    clearParam : function (){
        elements = this.getSearchElement();
        result = [];
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
            trans_date: Ext.ComponentQuery.query('textfield[name=trans_date]')[0],
        }
    },

    onLogOut : function (){
        console.log('onLogOut')

        localStorage.removeItem('isLoggedIn');
        localStorage.removeItem('token');
        localStorage.removeItem('user');


        // Remove Main View
        this.getView().destroy();

        // Add the Login Window
        Ext.create({
            xtype: 'login'
        });
    },

    //untuk detail View;
    onSearchDetail : function (component, e){
        if (e.keyCode == 13) {
            param = this.getElementValueDetail();
            store = this.getViewModel().getStore('parts');
            viewModel = this.getViewModel();
            element = this.getElementDetail();

            data = {}

            for (var key in param) {
                // skip loop if the property is from prototype
                if (!param.hasOwnProperty(key)) continue;

                var obj = param[key];
                for (var prop in obj) {
                    // skip loop if the property is from prototype
                    if(!obj.hasOwnProperty(prop)) continue;

                    // your code
                    data[key] = param[key];
                    
                }
            }

            // console.log(data)
            // return false;

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

    getElementDetail : function(){
        return {
            no: Ext.ComponentQuery.query('textfield[name=search_part_by_no]')[0],
            name: Ext.ComponentQuery.query('textfield[name=search_part_by_name]')[0],
            supplier_name: Ext.ComponentQuery.query('textfield[name=search_part_by_supplier]')[0],
            model: Ext.ComponentQuery.query('textfield[name=search_part_by_model]')[0],
            first_value: Ext.ComponentQuery.query('textfield[name=search_part_by_first_value]')[0],
            date_of_first_value: Ext.ComponentQuery.query('textfield[name=search_part_by_date_of_first_value]')[0]

        }
    },

    getElementValueDetail: function (){
        var element = this.getElement();
        return {
            no : element.no.value,
            name : element.name.value,
            supplier_name : element.supplier_name.value,
            model : element.model.value,
            first_value : element.first_value.value,
            date_of_first_value : element.date_of_first_value.value,

        }
    },

    onSelectItem: function (sender, item){
        var data = item.data;
        var viewModel = this.getViewModel();
        var store = viewModel.getStore('part_details');

        /*console.log({
            data,
            viewModel,
            store
        })*/
        pivot = data.pivot;
        viewModel.set('toolpart', pivot )

        store.loadData(data.details, false);
        store.load({
            params: {
                part_id: data.id
            }
        })

        //ganti cavity disini
    },

    onDetailClick : function (grid, rowIndex, colIndex){
        //data is available on model variable;
        var model = grid.getStore().getAt(rowIndex).data;
        var parts = model.parts;
        var viewModel = this.getViewModel();
        var datas = viewModel.getStore('datas');
        var viewModelParts = viewModel.getStore('parts');
        var viewModelTools = viewModel.getStore('tools');
        var viewModelToolDetails =viewModel.getStore('tool_details');

        //load data untuk parts
        viewModelParts.loadData(parts, false );
        viewModelTools.loadData(model, false );

        viewModelToolDetails.loadData([], false );
        viewModelToolDetails.load({
            params: {tool_id: model.id },
            callback: function (records, operation, success){
                // console.log({records, operation, success})
                // viewModelToolDetails.loadData(records, false);   
            }
        })

        tool = {
            no: model.no,
            name: model.name,
            no_of_tooling: model.no_of_tooling,
            start_value: model.start_value,
            guarantee_shoot: model.guarantee_shoot,
            delivery_date: model.delivery_date,
            supplier_id: model.supplier_id,
            start_value_date : model.start_value_date,
        };
        //set data tool
        viewModel.set('model', tool );

        // console.log({model: viewModel.get('model')})
        //set data forecast
        viewModel.set('forecast', model.forecast );
        viewModel.set('toolpart', model.part.pivot )
        // console.log(viewModel.get('toolpart'))
        
        //make a new windows for showing details;
        Ext.create('Ext.window.Window', {
            // title: 'CHART',
            height: 600,
            width: 1100,
            maximizable : true,
            layout: 'fit',
            modal :true,
            // frame: true,
            items: [{
                xtype : 'main_detail',
                //set viewModel here
            }]
        }).show();
    },

    onTransDateChange : function (){
        /*transDate = Ext.ComponentQuery.query('textfield[name=trans_date]')[0].rawValue;
        modelView = this.getViewModel();
        store = modelView.getStore('datas')

        store.loadData([], false);
        store.load({
            params: {trans_date : transDate },
            callback : function (records, operation, success){
                console.log({records, operation, success})
            }
        })*/

        params = this.getElementValue();
        store = this.getViewModel().getStore('datas');
        console.log({params, store})
        // return;

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
    },

    notifOnClick : function (button){
        store = this.getViewModel().getStore('datas');
        name = button.name;
        param = {}

        if (name == 'btn-info') {
            param.safe = true;
        }else if (name == 'btn-danger'){
            param.danger = true;
        }else if (name == 'btn-warning'){
            param.warning = true;
        }

        console.log(param)
        // return;

        store.load({
            params: param,
            callback : function (records, operation, success){
                if (!success) {
                    console.log({
                        records, operation, success
                    })
                }
            }
        })
    },

    reloadNotifOnClick : function (button){
        Ext.Ajax.request({
            url: 'http://'+tool_control_system.util.Config.hostname()+'/tool_control/public/api/datas/count',
            method: 'GET',
            params: {
                token : token
            },
            success: function (response, opts){
                // console.log('success')
                //console.log({response, opts})
                res = JSON.parse(response.responseText);
                data = res.data;

                //set to viewModel
                viewModel = self.getViewModel();
                // console.log({data,viewModel})
                viewModel.set('notif', data)

            },
            failure : function(response, opts){

            }
        })
    },

    showSemiPart :  function (grid, rowIndex, colIndex){
        var model = grid.getStore().getAt(rowIndex);
        var data = model.data;
        var self = this;
        
        // this.fireEvent('onInit');
        console.log('showSemiPart')

        model.load({
            params: {
                id : model.id
            },
            success: function(part){

                //to fire event in list controller
                // the first argument is the name of event in another controller
                Ext.create('Ext.window.Window', {
                    // title: 'CHART',
                    height: 600,
                    width: 1000,
                    maximizable : true,
                    layout: 'fit',
                    modal :true,
                    items: [{
                        xtype : 'part_part_relation_List',

                    }]
                }).show();

                // console.log(part)
                self.fireEvent('onInit', part.id  );
            }
        })
    }

});