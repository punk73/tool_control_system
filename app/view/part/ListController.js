
Ext.define('tool_control_system.view.part.ListController', {
    extend: 'Ext.app.ViewController',
    alias: 'controller.part-list',

    requires : [
    	'tool_control_system.view.part.part_relation.Form'
    ],

    onDelete: function (){
    	console.log('on delete click')
        self = this;
        grid = Ext.ComponentQuery.query('part_list')[0]; //ambil object grid
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
                  self.onCancel();

                }
            });
        }
    },

    showSemiPartForm : function (){
    	console.log('show form')
    	//make a new windows for showing details;
        Ext.create('Ext.window.Window', {
            title: 'Semi Part Form',
            height: 600,
            width: 1100,
            maximizable : true,
            layout: 'fit',
            modal :true,
            // frame: true,
            items: [{
                xtype : 'part_part_relation_form',
                //override the properties
                margin: 0,
                frame : false,
                title : null
            }]
        }).show();
    },

    onRowSelected :  function (sender, record){
        btn_delete = Ext.ComponentQuery.query('button[name=btn_delete_part_list]')[0];
        btn_delete.enable();        
    },

    onCancel : function (){
        //tidak jadi karena button dihapus
        /*btn_delete = Ext.ComponentQuery.query('button[name=btn_delete_part_list]')[0];
        if (typeof btn_delete != undefined) {
            btn_delete.disable();
        }*/
    },

    //this is listener. this controller listen to another controller to fire specific event that already 
    //configured like below
    listen : {
        controller : {
            'part-form' : { //this is controller alias name
                //name of the event : //method to trigger here
                'onCancelClicked': 'onCancel'
            }
        }
    }

});
